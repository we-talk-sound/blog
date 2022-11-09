import React from 'react';
import { ComponentHolder, StoryItem } from 'components';
import { ExpandedButton } from 'components/ExpandButton';
import { classnames } from 'utils';
import { BlogMarquee } from 'common/Blog/BlogPageBanner/BlogMarquee';
import { BlogBannerArticles } from 'common/Blog/BlogPageBanner/BlogBannerArticles';
import { blogItemType } from 'types';
import { StoriesItemPlaceHolder } from 'common/Placeholders';

export const BlogBanner: React.FC<Props> = ({ bannerMode, story, dataSource, dataSourceLoader, slug }) => {

    return (

        <ComponentHolder
            className="no-border"
            bodyClass={classnames(

                "blog-banner-background",

                bannerMode && "page-blog-banner-parent",

                !bannerMode && "page-zero-blog-banner"

            )}
        >

            {!bannerMode && <BlogMarquee />}

            <div className={

                classnames('blog-banner-body', bannerMode && "page-blog-banner-holder", (story || slug) && "page-blog-banner-holder-with-story")

            }>

                {(story && slug) && <StoryItem story={{ ...story, image: undefined }} mode={"story"} />}

                {(!story && slug) &&

                    <StoriesItemPlaceHolder

                        length={1}

                        holderClass={"page-blog-story-loader"}

                        extraTitle={true} />

                }

                {/* The blog image is contained in the BlogBannerArticles Component */}

                <BlogBannerArticles

                    bannerMode={bannerMode}

                    withoutArticles={story !== undefined}

                    dataSource={dataSource || []}

                    dataSourceLoader={dataSourceLoader}

                    image={story?.image}

                    slug={slug}

                />

                {!bannerMode && <ExpandedButton label='Go to blog' textClass='color-white' link={"/blog"} />}

            </div>

        </ComponentHolder >

    );
}

interface Props {

    dataSource?: Array<blogItemType>,

    dataSourceLoader?: boolean,

    bannerMode?: boolean,

    slug?: string,

    story?: {

        title: string,

        category: string,

        author: string,

        date: string,

        image: string

    }

}
