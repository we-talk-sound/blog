import React from 'react';
import { LandingLayout } from 'layout';
import { SectionOne } from 'common/PageZero/SectionOne';
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

const Home: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const dispatch = useDispatch();

    const { blog: { dashboardBlogs , categories } }: storeInterface = useSelector((store: storeInterface) => store);

    const safeParams = ["page", "category", "per_page"];

    useFetching({

        dispatcher: () =>

            Promise.all([

                dashboardBlogs?.data?.length < 1 && dispatch(blogProcess("retrieve", "dashboardBlogs", { per_page: 3 })),

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

        >

            <SectionOne

                isMobile={isMobile}

                deviceWidth={deviceWidth}

                controls={{

                    navSwitcher: true,

                    dotSwitcher: true,

                    button: {

                        display: false,

                        title: ""

                    },

                }}

            />

            <SectionTwo />

            <SectionThree />

            <SectionFour />

            <BlogBanner dataSource={dashboardBlogs?.data.filter((item , index )=> index < 3) || []} />

            <NewsLetter />

        </LandingLayout >

    )
}

export default Home;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
