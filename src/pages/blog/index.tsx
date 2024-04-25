import React from 'react';
import { LandingLayout } from 'layout';
import { NewsLetter } from 'common/NewsLetter';
import { BlogPageBanner } from 'common/Blog/BlogPageBanner';
import { blogCategoryItemType, blogItemType } from 'types';
import { ComponentHolder } from 'components';
import BlogCardGrid from 'common/Blog/BlogCardGrid';
import { BlogCategories } from 'common/Blog/BaseBlog/BlogCategories';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Blog: React.FC<Props> = ({
  isMobile,
  deviceWidth,
  blogCategories,
  posts,
  musics,
  // videos,
  reviews,
  interviews,
  culture
}) => {
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
      <BlogPageBanner
        isMobile={isMobile}
        allCategories={blogCategories}
        deviceWidth={deviceWidth}
        items={posts.slice(0, 6)}
      />

      <ComponentHolder className="no-border page-events-expanded-body" bodyClass="page-zero-content">
        <div className="page-events-expanded-body-content">
          <BlogCardGrid
            items={topReads}
            title="Top Reads"
            allCategories={blogCategories}
            variant="topreads"
            showAction={false}
          />

          {/* <BlogCardGrid
            items={videos}
            title="Videos"
            variant="videos"
            actionText="Show older videos"
            action={() => window.open('https://www.youtube.com/@WeTalkSound/videos', '_blank')}
          /> */}
          <BlogCardGrid
            items={culture}
            title="Culture"
            actionText="Show more culture"
            showAction={culture.length > 7}
            allCategories={blogCategories}
            action={() => router.push('/blog/culture')}
          />
          <BlogCardGrid
            items={musics}
            title="Music"
            showAction={musics.length > 7}
            allCategories={blogCategories}
            actionText="Show more music"
            action={() => router.push('/blog/music')}
          />
          <BlogCardGrid
            items={interviews}
            title="Interviews"
            showAction={interviews.length > 7}
            allCategories={blogCategories}
            actionText="Show more interviews"
            action={() => router.push('/blog/interviews')}
          />

          <BlogCardGrid
            items={reviews}
            title="Reviews"
            showAction={reviews.length > 7}
            actionText="Show more reviews"
            allCategories={blogCategories}
            action={() => router.push('/blog/reviews')}
          />
        </div>
      </ComponentHolder>

      <BlogCategories categories={blogCategories} />
      <NewsLetter />
    </LandingLayout>
  );
};

export async function getServerSideProps() {
  let categories: any = await fetch(`https://blog-admin.wetalksound.co/wp-json/wp/v2/categories?_fields=id,slug`);
  categories = await categories.json();

  type Catg = { id: number; slug: string };
  // music
  let musicCategoryID = categories.find((category: Catg) => category.slug === 'music');
  musicCategoryID = musicCategoryID.id;
  // culture
  let cultureCategoryID = categories.find((category: Catg) => category.slug === 'culture');
  cultureCategoryID = cultureCategoryID.id;
  // interviews
  let interviewsCategoryID = categories.find((category: Catg) => category.slug === 'interviews');
  interviewsCategoryID = interviewsCategoryID.id;
  // reviews
  let reviewsCategoryID = categories.find((category: Catg) => category.slug === 'reviews');
  reviewsCategoryID = reviewsCategoryID.id;

  const baseUrl =
    'https://blog-admin.wetalksound.co/wp-json/wp/v2/posts?_embed=1' +
    '&_fields=title,slug,categories,date,_links.wp:featuredmedia,_links.author,yoast_head_json.description';

  // const youtubeUrl =
  //   'https://www.googleapis.com/youtube/v3/search?key=' +
  //   process.env.NEXT_PUBLIC_YOUTUBE_API_KEY +
  //   '&channelId=' +
  //   process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID +
  //   '&part=snippet,id&order=date&maxResults=6';

  let [posts, musics, reviews, interviews, culture] = await Promise.all([
    // posts
    fetch(baseUrl).then(res => res.json()),
    // musics
    fetch(`${baseUrl}&per_page=8&categories=${musicCategoryID}`).then(res => res.json()),
    // // videos
    // fetch(youtubeUrl)
    //   .then(res => res.json())
    //   .then(data => data.items),
    //reviews
    fetch(`${baseUrl}&per_page=8&categories=${reviewsCategoryID}`).then(res => res.json()),
    // interviews
    fetch(`${baseUrl}&per_page=8&categories=${interviewsCategoryID}`).then(res => res.json()),
    // culture
    fetch(`${baseUrl}&per_page=8&categories=${cultureCategoryID}`).then(res => res.json())
  ]);

  return {
    props: { posts, musics, reviews, interviews, culture }
  };
}

export default Blog;

interface Props {
  isMobile: boolean;
  deviceWidth: number;
  blogCategories: blogCategoryItemType[];
  posts: blogItemType[];
  musics: blogItemType[];
  interviews: blogItemType[];
  culture: blogItemType[];
  reviews: blogItemType[];
  videos: any[];
}
