import React from 'react';
import { LandingLayout } from 'layout';
import { useRouter } from 'next/router';
// import { BlogEntries } from 'common/Blog/BaseBlog/BlogEntries';
import { NewsLetter } from 'common/NewsLetter';
import { BlogPageBanner } from 'common/Blog/BlogPageBanner';
import { useFetching } from 'hooks/useFetching';
import { blogProcess } from 'redux/actions/BlogActions';
import { useDispatch } from 'react-redux';
// import { BlogStory } from 'common/Blog/BlogStory';
import { blogItemType, storeBlogEntry, storeInterface } from 'types';
import { useSelector } from 'react-redux';
import * as He from 'he';
// import { BaseBlog } from 'common/Blog/BaseBlog';
import { transformStory } from 'utils';
import { ComponentHolder } from 'components';
import BlogCardGrid from 'common/Blog/BlogCardGrid';
import { BlogCategories } from 'common/Blog/BaseBlog/BlogCategories';

const Blog: React.FC<Props> = ({ isMobile, deviceWidth, serverBlog }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const { blogSingleStories, dashboardBlogs, blogCategoryStories, categories }: storeBlogEntry = useSelector(
    (store: storeInterface) => store.blog
  );

  let { category, slug } = router.query;

  const safeParams = ['slug', 'category', 'page'];

  type determineFetchTypes = [
    'retrieve' | 'retrieve-story' | 'retrieve-category-stories',

    'blogSingleStories' | 'blogCategoryStories' | 'dashboardBlogs',

    any
  ];

  const determineFetch = (e: { slug: string; category: string; page: string }): determineFetchTypes => {
    if (e?.slug) return ['retrieve-story', 'blogSingleStories', { slug: e.slug }];

    if (e?.category)
      return [
        'retrieve-category-stories',

        'blogCategoryStories',

        {
          category: e.category,

          per_page: 9,

          categories: categories?.slugPairs?.[e.category]?.id,

          // if page one exists , proceed to page requested from url , else, go to page 1

          page: blogCategoryStories?.categoryData?.[e?.category]?.['1'] ? e?.page || 1 : 1
        }
      ];

    return ['retrieve', 'dashboardBlogs', { per_page: 9 }];
  };

  const story = blogSingleStories?.[String(slug || '')];

  const seoData = transformStory(serverBlog || story);

  const storyTitle = (serverBlog || story)?.title?.rendered ? He.unescape((serverBlog || story).title.rendered) : '';

  const blogBannerDataSource = () => {
    if (category && categories?.slugPairs?.[String(category)]) {
      return {
        source: blogCategoryStories?.categoryData?.[String(category)]?.[1],

        loader: blogCategoryStories?.categoryData?.[String(category)]?.[1] === undefined
      };
    }

    return {
      source: dashboardBlogs?.data || [],

      loader: dashboardBlogs.loader
    };
  };

  useFetching({
    dispatcher: (arg: any) => {
      const arguments_ = determineFetch(arg);

      dispatch(blogProcess(arguments_[0], arguments_[1], arguments_[2]));
    },

    safeParams
  });

  return (
    <LandingLayout
      headTitle={String(storyTitle || `WETALKSOUND`)}
      headImage={seoData.seoImage}
      headDescription={seoData.sub}
      isMobile={isMobile}
      deviceWidth={deviceWidth}
      showFooter={true}
      showHeader={false}
    >
      <BlogPageBanner
        isMobile={isMobile}
        deviceWidth={deviceWidth}
        items={[...Array(6)]}
        // category={category}

        // slug={slug}
        // story={serverBlog}
        dataSource={(blogBannerDataSource().source || []).filter((item, index) => index < 3)}
        dataSourceLoader={blogBannerDataSource().loader}
      />

      <ComponentHolder className="no-border page-events-expanded-body" bodyClass="page-zero-content">
        <div className="page-events-expanded-body-content">
          <BlogCardGrid items={[...Array(8)]} title="Music" actionText="Show More Music" />
          <BlogCardGrid items={[...Array(6)]} title="Videos" video actionText="Show older videos" />
          <BlogCardGrid items={[...Array(8)]} title="Features" actionText="See More" />
        </div>
      </ComponentHolder>

      <BlogCategories />
      <NewsLetter />
    </LandingLayout>
  );
};

export async function getServerSideProps({ query }: { query: { slug: string } }) {
  let data: any = {};

  if (query?.slug) {
    const url = `https://blog-admin.wetalksound.co/wp-json/wp/v2/posts?slug=${query.slug}&_embed`;

    const res = await fetch(url);

    data = await res.json();

    data = Array.isArray(data) ? data[0] : data;
  }

  return {
    props: {
      serverBlog: data
    }
  };
}

export default Blog;

interface Props {
  isMobile: boolean;
  deviceWidth: number;
  serverBlog: blogItemType;
}
