import React from 'react';
import { useRouter } from 'next/router';
import { ComponentHolder } from 'components';
import { Header } from 'layout/LandingLayout/header';
import { BaseBlogHeading } from 'common/Blog/BaseBlog/BaseBlogHeading';
import { BlogBanner } from 'common/PageZero/BlogBanner';
import { transformStory } from 'utils/blog';
import { blogItemType } from 'types';

export const BlogPageBanner: React.FC<Props> = ({ isMobile, deviceWidth, story, dataSource, dataSourceLoader }) => {

    const router = useRouter();

    const { slug, category } = router.query;

    const story_ = story ? { ...transformStory(story, false) } : undefined;

    return (

        <ComponentHolder

            className='no-border page-blog'

            bodyClass='page-zero-content'

        >

            <Header withFrame={true} isMobile={isMobile} deviceWidth={deviceWidth} active={"/blog"} />

            {(!slug && !story_) && <BaseBlogHeading category={String(category)} />}

            <BlogBanner

                bannerMode={true}

                story={story_}

                slug={slug ? String(slug) : undefined}

                dataSource={dataSource}

                dataSourceLoader={dataSourceLoader}

            />

        </ComponentHolder >

    )
}



interface Props {
    isMobile: boolean,
    deviceWidth: number,
    story: blogItemType,
    dataSource: blogItemType[],
    dataSourceLoader?: boolean
}
