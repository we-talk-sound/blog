import React from 'react';
import { LandingLayout } from 'layout';
import { SectionThree } from 'common/PageZero/SectionThree';
import { SectionFour } from 'common/PageZero/SectionFour';
import { BlogBanner } from 'common/PageZero/BlogBanner';
import { NewsLetter } from 'common/NewsLetter';
// import { useDispatch } from 'react-redux';
import { blogCategoryItemType, blogItemType /*, storeBlogEntry, storeInterface */ } from 'types';
// import { useSelector } from 'react-redux';
// import { useFetching } from 'hooks/useFetching';
// import { blogProcess } from 'redux/actions/BlogActions';
import { SectionOneRevamp } from 'common/PageZero/SectionOneRevamp';

const Home: React.FC<Props> = ({ isMobile, deviceWidth, blogPosts, blogCategories }) => {
  // const dispatch = useDispatch();

  // const { dashboardBlogs, categories }: storeBlogEntry = useSelector((store: storeInterface) => store.blog);

  // const safeParams = ['page', 'category', 'per_page'];

  // useFetching({
  //   dispatcher: () =>
  //     Promise.all([
  //       dashboardBlogs?.data?.length < 1 && dispatch(blogProcess('retrieve', 'dashboardBlogs', { per_page: 3 })),

  //       categories?.data?.length < 1 && dispatch(blogProcess('retrieve-categories', 'categories'))
  //     ]),

  //   safeParams
  // });

  return (
    <LandingLayout
      headTitle={'WETALKSOUND'}
      isMobile={isMobile}
      deviceWidth={deviceWidth}
      showFooter={true}
      showHeader={false}
      footerId={'page-zero-hidden-section-footer'}
      bodyClass="strickFadeIn"
    >
      <SectionOneRevamp isMobile={isMobile} deviceWidth={deviceWidth} />

      <SectionThree />

      <SectionFour isMobile={isMobile} />

      <BlogBanner
        sliderMode={true}
        dataSource={blogPosts || []}
        dataSourceLoader={false}
        allCategories={blogCategories}
      />

      <NewsLetter />
    </LandingLayout>
  );
};

export async function getServerSideProps() {
  const baseUrl =
    'https://blog-admin.wetalksound.co/wp-json/wp/v2/posts?_embed=1&per_page=3' +
    '&_fields=title,slug,categories,date,_links.wp:featuredmedia,_links.author,yoast_head_json.description';

  const [blogPosts] = await Promise.all([fetch(baseUrl).then(res => res.json())]);

  return {
    props: { blogPosts }
  };
}

export default Home;

interface Props {
  isMobile: boolean;
  deviceWidth: number;
  blogPosts: blogItemType[];
  blogCategories: blogCategoryItemType[];
}
