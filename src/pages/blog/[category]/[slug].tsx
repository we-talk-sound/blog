import React from 'react';
import { blogItemType, storeBlogEntry, storeInterface } from 'types';
import * as He from 'he';
import { useSelector } from 'react-redux';
import { transformStory } from 'utils';
import { LandingLayout } from 'layout';
import { BlogStory } from 'common/Blog/BlogStory';
import { BlogPageBanner } from 'common/Blog/BlogPageBanner';
import { BlogCategories } from 'common/Blog/BaseBlog/BlogCategories';

const SingleBlogPage: React.FC<Props> = ({ isMobile, deviceWidth, serverBlog }) => {
  const { categories }: storeBlogEntry = useSelector((store: storeInterface) => store.blog);

  const seoData = transformStory(serverBlog);
  const storyTitle = serverBlog?.title?.rendered ? He.unescape(serverBlog.title.rendered) : '';

  const category = categories.pairs[serverBlog.categories[0]].slug;

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

      <BlogStory story={serverBlog} />
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
