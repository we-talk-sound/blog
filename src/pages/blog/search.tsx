import React from 'react';
import { LandingLayout } from 'layout';
import { BlogPageBanner } from 'common/Blog/BlogPageBanner';
import { BlogCategories } from 'common/Blog/BaseBlog/BlogCategories';
import { NewsLetter } from 'common/NewsLetter';
import { ComponentHolder } from 'components';
import BlogCardGrid from 'common/Blog/BlogCardGrid';
import { blogCategoryItemType, blogItemType } from 'types';

const BlogSearchPage: React.FC<Props> = ({ isMobile, deviceWidth, blogCategories, query, posts }) => {
  return (
    <LandingLayout
      headTitle={`Search - WETALKSOUND`}
      isMobile={isMobile}
      deviceWidth={deviceWidth}
      showFooter={true}
      showHeader={false}
    >
      <BlogPageBanner isMobile={isMobile} deviceWidth={deviceWidth} text={`Results for “${query}”`} />

      <ComponentHolder className="no-border page-events-expanded-body" bodyClass="page-zero-content">
        <div className="page-events-expanded-body-content">
          <BlogCardGrid items={posts} allCategories={blogCategories} showAction={posts.length > 15} />
        </div>
      </ComponentHolder>

      <BlogCategories categories={blogCategories} />
      <NewsLetter />
    </LandingLayout>
  );
};

export async function getServerSideProps({ query }: { query: { q: string } }) {
  const { q } = query;

  const url =
    'https://blog-admin.wetalksound.co/wp-json/wp/v2/posts?search=' +
    q +
    '&_fields=title,slug,categories,date,_links.wp:featuredmedia,_links.author,yoast_head_json.description&per_page=16&_embed';

  let data = await fetch(url);
  data = await data.json();

  return {
    props: { query: query.q || '', posts: data || [] }
  };
}

interface Props {
  isMobile: boolean;
  deviceWidth: number;
  blogCategories: blogCategoryItemType[];
  query: string;
  posts: blogItemType[];
}

export default BlogSearchPage;
