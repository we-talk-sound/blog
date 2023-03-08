import React from 'react';
import { LandingLayout } from 'layout';
import { SectionTwo } from 'common/PageZero/SectionTwo';
import { SectionThree } from 'common/PageZero/SectionThree';
import { SectionFour } from 'common/PageZero/SectionFour';
import { BlogBanner } from 'common/PageZero/BlogBanner';
import { NewsLetter } from 'common/NewsLetter';
import { useDispatch } from 'react-redux';
import { storeInterface } from 'types';
import { useSelector } from 'react-redux';
import { useFetching } from 'hooks/useFetching';
import { blogProcess } from 'redux/actions/BlogActions';
import { SectionOneRevamp } from 'common/PageZero/SectionOneRevamp';
import { SectionTestimonial } from 'common/PageZero/SectionTestimonial';

const Home: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const dispatch = useDispatch();

    const { blog: { dashboardBlogs, categories } }: storeInterface = useSelector((store: storeInterface) => store);

    const safeParams = ["page", "category", "per_page"];

    useFetching({

        dispatcher: () =>

            Promise.all([

                dashboardBlogs?.data?.length < 1 &&

                dispatch(blogProcess(

                    "retrieve", "dashboardBlogs", { per_page: 3 }

                )),

                categories?.data?.length < 1 && dispatch(blogProcess("retrieve-categories", "categories"))

            ]),

        safeParams,

    });

    return (

        <LandingLayout
            headTitle={"WETALKSOUND"}
            isMobile={isMobile}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={false}
            footerId={"page-zero-hidden-section-footer"}
            footerClass={'hide-display'}
        >

            <div

                id={"page-zero-hidden-section-up"}

            >

                <SectionOneRevamp

                    isMobile={isMobile}

                    deviceWidth={deviceWidth}

                />

                <SectionTwo />

            </div>

            <SectionThree />

            <div

                id={"page-zero-hidden-section-down"}

                className='hide-display'

            >

                <SectionFour />

                <BlogBanner

                    dataSource={dashboardBlogs?.data.filter((item, index) => index < 3) || []}

                    dataSourceLoader={dashboardBlogs.loader}

                />

                <SectionTestimonial />

                <NewsLetter />

            </div>



        </LandingLayout >

    )
}

export default Home;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
