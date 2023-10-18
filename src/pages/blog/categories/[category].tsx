import React from 'react';
// import { /*blogItemType,*/ storeBlogEntry, storeInterface } from 'types';
// import * as He from 'he';
// import { useSelector } from 'react-redux';
// import { transformStory } from 'utils';
import { LandingLayout } from 'layout';
// import { BlogStory } from 'common/Blog/BlogStory';
import { BlogPageBanner } from 'common/Blog/BlogPageBanner';
import { BlogCategories } from 'common/Blog/BaseBlog/BlogCategories';
import { NewsLetter } from 'common/NewsLetter';
import { ComponentHolder } from 'components';
import BlogCardGrid from 'common/Blog/BlogCardGrid';

const BlogCategoryPage: React.FC<Props> = ({ isMobile, deviceWidth, category }) => {
  // const {
  //   // blogSingleStories,
  //   // dashboardBlogs,
  //   categories /*blogCategoryStories */
  // }: storeBlogEntry = useSelector((store: storeInterface) => store.blog);

  // const categoryObj = categories.slugPairs[category];

  // console.log(categoryObj);

  // const story = blogSingleStories?.[String(slug || '')];
  // const seoData = transformStory(serverBlog || story);
  // const storyTitle = (serverBlog || story)?.title?.rendered ? He.unescape((serverBlog || story).title.rendered) : '';

  // const category = categories.pairs[serverBlog.categories[0]].slug;

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
      headTitle={`WETALKSOUND`}
      // headImage={seoData.seoImage}
      // headDescription={seoData.sub}
      isMobile={isMobile}
      deviceWidth={deviceWidth}
      showFooter={true}
      showHeader={false}
    >
      <BlogPageBanner
        isMobile={isMobile}
        deviceWidth={deviceWidth}
        items={[...Array(6)]}
        category={category}

        // slug={slug}
        // story={serverBlog}
        // dataSource={(blogBannerDataSource().source || []).filter((item, index) => index < 3)}
        // dataSourceLoader={blogBannerDataSource().loader}
      />

      <ComponentHolder className="no-border page-events-expanded-body" bodyClass="page-zero-content">
        <div className="page-events-expanded-body-content">
          <BlogCardGrid items={[...Array(16)]} actionText={`Show more ${category}`} />
        </div>
      </ComponentHolder>

      <BlogCategories />
      <NewsLetter />
    </LandingLayout>
  );
};

export async function getServerSideProps({ params }: { params: { category: string } }) {
  //   let data: any = null;
  const { category } = params;

  //   const url = `https://blog-admin.wetalksound.co/wp-json/wp/v2/posts?slug=${slug}&_embed`;
  //   const res = await fetch(url);
  //   data = await res.json();
  //   data = Array.isArray(data) ? data[0] : data;

  // redirect to blog page if no data
  //   if (!data) {
  //     return {
  //       redirect: {
  //         destination: '/blog2',
  //         permanent: false
  //       }
  //     };
  //   }

  return {
    props: { category }
  };
}

interface Props {
  isMobile: boolean;
  deviceWidth: number;
  category: string;
}

export default BlogCategoryPage;
