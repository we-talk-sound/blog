import React from 'react';
import { LandingLayout } from 'layout';
import { useRouter } from 'next/router';
import { BlogBaseCategory } from 'common/Blog/BaseBlog/BlogBaseCategory';
import { NewsLetter } from 'common/NewsLetter';
import { BlogPageBanner } from 'common/Blog/BlogPageBanner';
import { useFetching } from 'hooks/useFetching';
import { blogProcess } from 'redux/actions/BlogActions';
import { useDispatch } from 'react-redux';
import { BlogStory } from 'common/Blog/BlogStory';
import { storeInterface } from 'types';
import { useSelector } from 'react-redux';
import * as He from "he";

const Blog: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const router = useRouter();

    const dispatch = useDispatch();

    const {

        blog: {

            blogSingleStories,

            dashboardBlogs,

            blogCategoryStories,

            categories
        }

    } : storeInterface = useSelector((store: storeInterface) => store);

    let { category, slug } = router.query;

    category = category || "music";

    const safeParams = ["slug", "category", "page"];

    type determineFetchTypes = [

        "retrieve" | "retrieve-story" | "retrieve-category-stories",

        "blogSingleStories" | "blogCategoryStories" | "dashboardBlogs",

        any
    ];

    const determineFetch = (e: { slug: string, category: string, page: string }): determineFetchTypes => {

        if (e?.slug) return ([

            "retrieve-story",

            "blogSingleStories",

            { slug: e.slug }

        ]);

        return ([

            "retrieve-category-stories",

            "blogCategoryStories",

            {

                category: e.category || "music",

                per_page: 9,

                // default music - category id is 4

                categories: categories?.slugPairs?.[e.category]?.id || 4,

                // if page one exists , proceed to page requested from url , else, go to page 1

                page: blogCategoryStories?.categoryData?.[e?.category || "music"]?.["1"] ? (e?.page || 1) : 1

            }

        ]);

    };

    const story = blogSingleStories?.[String(slug || "")];

    const storyTitle = story?.title?.rendered ? He.unescape(story.title.rendered) : "";

    const blogBannerDataSource = () => {

        if (category && categories?.slugPairs?.[String(category)]) {

            return ({

                source: blogCategoryStories?.categoryData?.[String(category)]?.[1],

                loader: blogCategoryStories?.categoryData?.[String(category)]?.[1] === undefined

            })

        }

        return ({

            source: dashboardBlogs?.data || [],

            loader: dashboardBlogs.loader

        });

    };

    useFetching({

        dispatcher: (arg: any) => {

            const arguments_ = determineFetch(arg);

            dispatch(blogProcess(arguments_[0], arguments_[1], arguments_[2]));

        },

        safeParams,

    });

    return (

        <LandingLayout
            headTitle={String(storyTitle || `WETALKSOUND`)}
            isMobile={isMobile}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={false}

        >

            <BlogPageBanner

                isMobile={isMobile}

                deviceWidth={deviceWidth}

                story={blogSingleStories?.[String(slug || "")]}

                dataSource={(blogBannerDataSource().source || []).filter((item, index) => index < 3)}

                dataSourceLoader={blogBannerDataSource().loader}

            />

            {!slug && <BlogBaseCategory category={String(category)} />}

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
