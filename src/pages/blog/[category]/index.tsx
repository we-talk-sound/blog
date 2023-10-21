import React from 'react';
import { LandingLayout } from 'layout';
import { BlogPageBanner } from 'common/Blog/BlogPageBanner';
import { BlogCategories } from 'common/Blog/BaseBlog/BlogCategories';
import { NewsLetter } from 'common/NewsLetter';
import { ComponentHolder } from 'components';
import BlogCardGrid from 'common/Blog/BlogCardGrid';
import { blogItemType } from 'types';
import { baseSlugPairs } from 'redux/reducers/blogReducer';

const BlogCategoryPage: React.FC<Props> = ({ isMobile, deviceWidth, category, posts }) => {

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
        items={posts.slice(0, 6)}
        category={category}
      />

      <ComponentHolder className="no-border page-events-expanded-body" bodyClass="page-zero-content">
        <div className="page-events-expanded-body-content">
          <BlogCardGrid items={posts.slice(6)} actionText={`Show more ${category}`} />
        </div>
      </ComponentHolder>

      <BlogCategories />
      <NewsLetter />
    </LandingLayout>
  );
};

export async function getServerSideProps({ params }: { params: { category: string } }) {
  const { category } = params;
  const categoryID = (baseSlugPairs as any)[category]?.id;
  console.log({ categoryID });

  const baseUrl =
    'https://blog-admin.wetalksound.co/wp-json/wp/v2/posts?_embed=1&_fields=title,slug,categories,date,_links,yoast_head_json.description';

  let data = await fetch(`${baseUrl}&categories=${categoryID}&per_page=18`);
  data = await data.json();

  return {
    props: { category, posts: data || [] }
  };
}

export default BlogCategoryPage;

interface Props {
  isMobile: boolean;
  deviceWidth: number;
  posts: blogItemType[];
  category: string;
}

// export async function getServerSideProps({ params }: { params: { category: string } }) {
//   //   let data: any = null;
//   const { category } = params;

//   //   const url = `https://blog-admin.wetalksound.co/wp-json/wp/v2/posts?slug=${slug}&_embed`;
//   //   const res = await fetch(url);
//   //   data = await res.json();
//   //   data = Array.isArray(data) ? data[0] : data;

//   // redirect to blog page if no data
//   //   if (!data) {
//   //     return {
//   //       redirect: {
//   //         destination: '/blog2',
//   //         permanent: false
//   //       }
//   //     };
//   //   }

//   return {
//     props: { category }
//   };
// }

// interface Props {
//   isMobile: boolean;
//   deviceWidth: number;
//   category: string;
// }

// export default BlogCategoryPage;
