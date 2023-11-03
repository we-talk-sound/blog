import React, { useEffect, useState } from 'react';
import { LandingLayout } from 'layout';
import { NewsLetter } from 'common/NewsLetter';
import { BlogPageBanner } from 'common/Blog/BlogPageBanner';
import { blogItemType } from 'types';
import { ComponentHolder } from 'components';
import BlogCardGrid from 'common/Blog/BlogCardGrid';
import { BlogCategories } from 'common/Blog/BaseBlog/BlogCategories';
import { useRouter } from 'next/router';

const Blog: React.FC<Props> = ({ isMobile, deviceWidth, posts, musics, videos }) => {
  const [topReads, setTopReads] = useState<blogItemType[]>([]);

  useEffect(() => {
    // select random 5 posts that are not press releases
    // press releases has categories = [6], originals have categories [x, 6]
    let random5 = posts.filter(post => post.categories.some(x => ![1, 4, 7].includes(x)));
    random5 = random5.sort(() => 0.5 - Math.random()).slice(0, 5);
    setTopReads(random5);
  }, [posts]);

  const router = useRouter();

  return (
    <LandingLayout
      headTitle={`Blog | WETALKSOUND`}
      isMobile={isMobile}
      deviceWidth={deviceWidth}
      showFooter={true}
      showHeader={false}
    >
      <BlogPageBanner isMobile={isMobile} deviceWidth={deviceWidth} items={posts.slice(0, 6)} />

      <ComponentHolder className="no-border page-events-expanded-body" bodyClass="page-zero-content">
        <div className="page-events-expanded-body-content">
          <BlogCardGrid items={topReads} title="Top Reads" variant="topreads" showAction={false} />
          <BlogCardGrid
            items={musics.slice(0, 8)}
            title="Music"
            showAction={musics.length > 8}
            actionText="Show More Music"
            action={() => router.push('/blog/music')}
          />
          <BlogCardGrid
            items={videos}
            title="Videos"
            variant="videos"
            actionText="Show older videos"
            action={() => window.open('https://www.youtube.com/@WeTalkSound/videos', '_blank')}
          />
          {/* <BlogCardGrid items={posts.slice(6, 14)} title="Features" showAction={false} /> */}
        </div>
      </ComponentHolder>

      <BlogCategories />
      <NewsLetter />
    </LandingLayout>
  );
};

export async function getServerSideProps() {
  // get music category id
  let musicCategoryID: any = await fetch(`https://blog-admin.wetalksound.co/wp-json/wp/v2/categories?slug=music`);
  musicCategoryID = await musicCategoryID.json();
  musicCategoryID = musicCategoryID[0].id;

  const baseUrl =
    'https://blog-admin.wetalksound.co/wp-json/wp/v2/posts?_embed=1' +
    '&_fields=title,slug,categories,date,_links.wp:featuredmedia,_links.author,yoast_head_json.description';

  const youtubeUrl =
    'https://www.googleapis.com/youtube/v3/search?key=' +
    process.env.NEXT_PUBLIC_YOUTUBE_API_KEY +
    '&channelId=' +
    process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID +
    '&part=snippet,id&order=date&maxResults=6';

  let [posts, musics, videos] = await Promise.all([
    fetch(`${baseUrl}&per_page=10`).then(res => res.json()),
    fetch(`${baseUrl}&categories=${musicCategoryID}`).then(res => res.json()),
    fetch(youtubeUrl)
      .then(res => res.json())
      .then(data => data.items)
  ]);

  return {
    props: { posts, musics, videos }
  };
}

export default Blog;

interface Props {
  isMobile: boolean;
  deviceWidth: number;
  posts: blogItemType[];
  musics: blogItemType[];
  videos: any[];
}
