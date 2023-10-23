import React from 'react';
import { LandingLayout } from 'layout';
import { SectionThree } from 'common/PageZero/SectionThree';
import { SectionFour } from 'common/PageZero/SectionFour';
import { BlogBanner } from 'common/PageZero/BlogBanner';
import { NewsLetter } from 'common/NewsLetter';
import { useDispatch } from 'react-redux';
import { storeBlogEntry, storeInterface } from 'types';
import { useSelector } from 'react-redux';
import { useFetching } from 'hooks/useFetching';
import { blogProcess } from 'redux/actions/BlogActions';
import { SectionOneRevamp } from 'common/PageZero/SectionOneRevamp';

const Home: React.FC<Props> = ({ isMobile, deviceWidth }) => {
  const dispatch = useDispatch();

  const { dashboardBlogs, categories }: storeBlogEntry = useSelector((store: storeInterface) => store.blog);

  const safeParams = ['page', 'category', 'per_page'];

  useFetching({
    dispatcher: () =>
      Promise.all([
        dashboardBlogs?.data?.length < 1 && dispatch(blogProcess('retrieve', 'dashboardBlogs', { per_page: 3 })),

        categories?.data?.length < 1 && dispatch(blogProcess('retrieve-categories', 'categories'))
      ]),

    safeParams
  });

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
        dataSource={dashboardBlogs?.data.filter((item, index) => index < 3) || []}
        dataSourceLoader={dashboardBlogs.loader}
      />

      <NewsLetter />
    </LandingLayout>
  );
};

export default Home;

interface Props {
  isMobile: boolean;
  deviceWidth: number;
}
