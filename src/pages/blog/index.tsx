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
import * as He from "he";

const Blog: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const router = useRouter();

    const dispatch = useDispatch();

    const { blog: { blogSingleStories, dashboardBlogs, blogCategoryStories } }: storeInterface = useSelector((store: storeInterface) => store);

    const { category, slug } = router.query;

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

        if (e?.category) return ([

            "retrieve-category-stories",

            "blogCategoryStories",

            {

                category: e.category,

                per_page: 9,

                // if page one exists , proceed to page requested from url , else, go to page 1

                page: blogCategoryStories?.categoryData?.[e?.category]?.["1"] ? e?.page : 1

            }

        ]);

        return ["retrieve", "dashboardBlogs", { per_page: 9 }]

    };

    useFetching({

        dispatcher: (arg: any) => {

            const arguments_ = determineFetch(arg);

            dispatch(blogProcess(arguments_[0], arguments_[1], arguments_[2] ));

        },

        safeParams,

    });

    const story = blogSingleStories?.[String(slug || "")];

    const storyTitle = story?.title?.rendered ? He.unescape(story.title.rendered) : "";

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

                dataSource={(dashboardBlogs?.data || []).filter((item, index) => index < 3)}

                dataSourceLoader={dashboardBlogs.loader}

            />

            {!category && !slug && <BaseBlog />}

            {category && !slug && <BlogBaseCategory category={String(category || "")} />}

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
