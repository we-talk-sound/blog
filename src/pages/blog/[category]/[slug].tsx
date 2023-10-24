import React from 'react';
import { blogItemType } from 'types';
import * as He from 'he';
import { transformStory } from 'utils';
import { LandingLayout } from 'layout';
import { BlogStory } from 'common/Blog/BlogStory';
import { BlogPageBanner } from 'common/Blog/BlogPageBanner';
import { BlogCategories } from 'common/Blog/BaseBlog/BlogCategories';

const SingleBlogPage: React.FC<Props> = ({ isMobile, deviceWidth, serverBlog, relatedPosts, category }) => {
  const seoData = transformStory(serverBlog);
  const storyTitle = serverBlog?.title?.rendered ? He.unescape(serverBlog.title.rendered) : '';

  return (
    <LandingLayout
      headTitle={storyTitle || `WETALKSOUND`}
      headImage={seoData.seoImage}
      headDescription={seoData.item.yoast_head_json?.description || storyTitle}
      isMobile={isMobile}
      deviceWidth={deviceWidth}
      showFooter={true}
      showHeader={false}
    >
      <BlogPageBanner isMobile={isMobile} deviceWidth={deviceWidth} category={category} story={serverBlog} />

      <BlogStory story={serverBlog} relatedPosts={relatedPosts} />
      <BlogCategories />
    </LandingLayout>
  );
};

export async function getServerSideProps({ params }: { params: { slug: string; category: string } }) {
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

  const POSTS_API_URL =
    'https://blog-admin.wetalksound.co/wp-json/wp/v2/posts?per_page=4&_embed=1' +
    '&_fields=title,slug,categories,date,_links.wp:featuredmedia,yoast_head_json.description';

  let relatedPosts: any = await fetch(`${POSTS_API_URL}&categories=${data.categories[0]}&exclude[0]=${data.id}`);
  relatedPosts = await relatedPosts.json();

  relatedPosts = Array.isArray(relatedPosts) ? relatedPosts : [];

  return {
    props: { serverBlog: data, slug, relatedPosts, category }
  };
}

interface Props {
  isMobile: boolean;
  deviceWidth: number;
  serverBlog: blogItemType;
  slug?: string;
  relatedPosts: blogItemType[];
  category: string;
}

export default SingleBlogPage;
