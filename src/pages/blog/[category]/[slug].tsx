import React from 'react';
import { blogItemType, storeBlogEntry, storeInterface } from 'types';
import * as He from 'he';
import { useSelector } from 'react-redux';
import { transformStory } from 'utils';
import { LandingLayout } from 'layout';
import { BlogStory } from 'common/Blog/BlogStory';
import { BlogPageBanner } from 'common/Blog/BlogPageBanner';
import { BlogCategories } from 'common/Blog/BaseBlog/BlogCategories';

const SingleBlogPage: React.FC<Props> = ({ isMobile, deviceWidth, serverBlog, slug }) => {
  const {
    blogSingleStories,
    // dashboardBlogs,
    categories /*blogCategoryStories, categories */
  }: storeBlogEntry = useSelector((store: storeInterface) => store.blog);

  const story = blogSingleStories?.[String(slug || '')];
  const seoData = transformStory(serverBlog || story);
  const storyTitle = (serverBlog || story)?.title?.rendered ? He.unescape((serverBlog || story).title.rendered) : '';

  const category = categories.pairs[serverBlog.categories[0]].slug;

  // const blogBannerDataSource = () => {
  //   // if (category && categories?.slugPairs?.[String(category)]) {
  //   //   return {
  //   //     source: blogCategoryStories?.categoryData?.[String(category)]?.[1],

  //   //     loader: blogCategoryStories?.categoryData?.[String(category)]?.[1] === undefined
  //   //   };
  //   // }

  //   return {
  //     source: dashboardBlogs?.data || [],
  //     loader: dashboardBlogs.loader
  //   };
  // };

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
        // slug={slug}
        category={category}
        story={serverBlog}
        // dataSource={(blogBannerDataSource().source || []).filter((item, index) => index < 3)}
        // dataSourceLoader={blogBannerDataSource().loader}
      />

      <BlogStory story={serverBlog} />
      <BlogCategories />
    </LandingLayout>
  );
};

export async function getServerSideProps({ params }: { params: { slug: string, category: string } }) {
  let data: any = null;
  const { slug, category } = params;

  const url = `https://blog-admin.wetalksound.co/wp-json/wp/v2/posts?slug=${slug}&_embed`;
  const res = await fetch(url);
  data = await res.json();
  data = Array.isArray(data) ? data[0] : data;

  // redirect to blog post's category page if no data
  if (!data) {
    return {
      redirect: {
        destination: `/blog/${category}`,
        permanent: false
      }
    };
  }

  return {
    props: { serverBlog: data, slug }
  };
}

interface Props {
  isMobile: boolean;
  deviceWidth: number;
  serverBlog: blogItemType;
  slug?: string;
}

export default SingleBlogPage;
