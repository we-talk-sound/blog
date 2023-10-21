import React from 'react';
import { LandingLayout } from 'layout';
import { BlogPageBanner } from 'common/Blog/BlogPageBanner';
import { BlogCategories } from 'common/Blog/BaseBlog/BlogCategories';
import { NewsLetter } from 'common/NewsLetter';
import { ComponentHolder } from 'components';
import BlogCardGrid from 'common/Blog/BlogCardGrid';
import { blogItemType } from 'types';

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
      <BlogPageBanner isMobile={isMobile} deviceWidth={deviceWidth} items={posts.slice(0, 6)} category={category} />

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
  let activeCategory = await fetch(`https://blog-admin.wetalksound.co/wp-json/wp/v2/categories?slug=${category}`);
  activeCategory = await activeCategory.json();

  // redirect to blog page if no category
  if (!activeCategory) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false
      }
    };
  }

  const baseUrl =
    'https://blog-admin.wetalksound.co/wp-json/wp/v2/posts?_embed=1&_fields=title,slug,categories,date,_links,yoast_head_json.description';
  // @ts-ignore
  let data = await fetch(`${baseUrl}&categories=${activeCategory[0].id}&per_page=18`);
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
