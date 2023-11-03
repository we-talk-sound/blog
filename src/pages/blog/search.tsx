import React from 'react';
// import { blogItemType, storeBlogEntry, storeInterface } from 'types';
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
import { blogItemType } from 'types';

const BlogSearchPage: React.FC<Props> = ({ isMobile, deviceWidth, query, posts }) => {
  return (
    <LandingLayout
      headTitle={`Search - WETALKSOUND`}
      // headImage={seoData.seoImage}
      // headDescription={seoData.sub}
      isMobile={isMobile}
      deviceWidth={deviceWidth}
      showFooter={true}
      showHeader={false}
    >
      <BlogPageBanner isMobile={isMobile} deviceWidth={deviceWidth} text={`Results for “${query}”`} />

      <ComponentHolder className="no-border page-events-expanded-body" bodyClass="page-zero-content">
        <div className="page-events-expanded-body-content">
          <BlogCardGrid items={posts} showAction={posts.length > 15} />
        </div>
      </ComponentHolder>

      <BlogCategories />
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
  query: string;
  posts: blogItemType[];
}

export default BlogSearchPage;
