import React, { useState } from 'react';
import { LandingLayout } from 'layout';
import { BlogPageBanner } from 'common/Blog/BlogPageBanner';
import { BlogCategories } from 'common/Blog/BaseBlog/BlogCategories';
import { NewsLetter } from 'common/NewsLetter';
import { ComponentHolder } from 'components';
import BlogCardGrid from 'common/Blog/BlogCardGrid';
import { blogCategoryItemType, blogItemType } from 'types';
import { useRouter } from 'next/router';

const BlogCategoryPage: React.FC<Props> = ({ isMobile, deviceWidth, blogCategories, category, categoryObject, posts, page }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleNextPage = async () => {
    try {
      setLoading(true);
      await router.push(`/blog/${category}?page=${+page + 1}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <LandingLayout
      headTitle={`${categoryObject.name} - Blog | WETALKSOUND`}
      // headImage={seoData.seoImage}
      headDescription={categoryObject.description}
      isMobile={isMobile}
      deviceWidth={deviceWidth}
      showFooter={true}
      showHeader={false}
    >
      <BlogPageBanner
        isMobile={isMobile}
        deviceWidth={deviceWidth}
        items={posts.slice(0, 6) || []}
        category={category}
        allCategories={blogCategories}
        categoryDescription={categoryObject.description || 'how are you'}
      />

      <ComponentHolder className="no-border page-events-expanded-body" bodyClass="page-zero-content">
        <div className="page-events-expanded-body-content">
          <BlogCardGrid
            items={posts.slice(6) || []}
            allCategories={blogCategories}
            action={handleNextPage}
            showAction={posts.length > 17}
            actionText={loading ? 'Loading...' : `Show more ${category}`}
          />
        </div>
      </ComponentHolder>

      <BlogCategories categories={blogCategories} />
      <NewsLetter />
    </LandingLayout>
  );
};

export async function getServerSideProps({ params, query }: { params: { category: string }; query: { page: any } }) {
  const { category } = params;
  // fetch category details from category slug
  let categoryObject: any = await fetch(
    `https://blog-admin.wetalksound.co/wp-json/wp/v2/categories?slug=${category}&_fields=id,name,slug,description`
  );

  categoryObject = await categoryObject.json();
  categoryObject = categoryObject[0];

  // redirect to blog page if no category
  if (!categoryObject || !categoryObject.id) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false
      }
    };
  }

  let { page } = query;
  page = Number(page) ? page : 1;

  // fetch categories post
  const POSTS_API_URL =
    'https://blog-admin.wetalksound.co/wp-json/wp/v2/posts?per_page=18&_embed=1' +
    '&_fields=title,slug,categories,date,_links.wp:featuredmedia,_links.author,yoast_head_json.description';

  let posts: any = [];
  posts = await fetch(`${POSTS_API_URL}&categories=${categoryObject.id}&page=${page}`);
  posts = await posts.json();

  posts = Array.isArray(posts) ? posts : [];

  return {
    props: { category, categoryObject, posts, page }
  };
}

export default BlogCategoryPage;

type CategoryObj = { id: number; name: string; slug: string; description: string };
interface Props {
  isMobile: boolean;
  deviceWidth: number;
  posts: blogItemType[];
  category: string;
  blogCategories: blogCategoryItemType[];
  categoryObject: CategoryObj;
  page: string;
}
