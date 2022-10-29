import React from 'react';
import { LandingLayout } from 'layout';
import { useRouter } from 'next/router';
import { BaseBlog } from 'common/Blog/BaseBlog';
import { BlogBaseCategory } from 'common/Blog/BaseBlog/BlogBaseCategory';
import { NewsLetter } from 'common/NewsLetter';
import { BlogPageBanner } from 'common/Blog/BlogPageBanner';
import { useFetching } from 'hooks/useFetching';
import { blogProcess } from 'redux/actions/BlogActions';
import { useDispatch } from 'react-redux';
import { BlogStory } from 'common/Blog/BlogStory';
import { storeInterface } from 'types';
import { useSelector } from 'react-redux';

const Blog: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const router = useRouter();

    const dispatch = useDispatch();

    const { blog : { blogSingleStories , dashboardBlogs } } : storeInterface = useSelector((store : storeInterface) => store);

    const { category, slug } = router.query;

    const safeParams = ["slug", "category", "page"];

    type determineFetchTypes = [

        "retrieve" | "retrieve-story" | "retrieve-category-stories",

        "blogSingleStories" | "blogCategoryStories" | "dashboardBlogs",

        any
    ];

    const determineFetch = (e : { slug : string , category : string }): determineFetchTypes => {

        if ( e?.slug ) return ([

            "retrieve-story",

            "blogSingleStories",

            { slug : e.slug }

        ]);

        if ( e?.category ) return ([

            "retrieve-category-stories",

            "blogCategoryStories",

            { category : e.category, per_page: 15 }

        ]);

        return ["retrieve", "dashboardBlogs", { per_page: 40 }]

    };

    useFetching({

        dispatcher: ( arg : any ) =>  { 

            const arguments_ = determineFetch(arg);

            dispatch(blogProcess(arguments_[0], arguments_[1], arguments_[2]));
            
        },

        safeParams,

    });

    return (

        <LandingLayout
            headTitle={"WETALKSOUND | BLOG"}
            isMobile={isMobile}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={false}

        >

            <BlogPageBanner

                isMobile={isMobile}

                deviceWidth={deviceWidth}

                story={blogSingleStories?.[String(slug || "")]}

                dataSource={(dashboardBlogs?.data || []).filter((item, index) => index < 3)}

            />

            {!category && !slug && <BaseBlog />}

            {category && !slug && <BlogBaseCategory />}

            {slug && <BlogStory story={blogSingleStories?.[String(slug || "")]} />}

            <NewsLetter />

        </LandingLayout >

    )
}

export default Blog;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
