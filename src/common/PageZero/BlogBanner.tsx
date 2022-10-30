import React from 'react';
import { ComponentHolder, StoryItem } from 'components';
import { ExpandedButton } from 'components/ExpandButton';
import { classnames } from 'utils';
import { BlogMarquee } from 'common/Blog/BlogPageBanner/BlogMarquee';
import { BlogBannerArticles } from 'common/Blog/BlogPageBanner/BlogBannerArticles';
import { blogItemType } from 'types';

export const BlogBanner: React.FC<Props> = ({ bannerMode, story, dataSource }) => {
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

                classnames('blog-banner-body', bannerMode && "page-blog-banner-holder", story && "page-blog-banner-holder-with-story")

            }>

                {story && <StoryItem story={{ ...story, image: undefined }} mode={"story"} />}

                <BlogBannerArticles

                    bannerMode={bannerMode}

                    withoutArticles={story !== undefined}

                    dataSource={dataSource || []}

                />

                {!bannerMode && <ExpandedButton label='Go to blog' textClass='color-white' link={"/blog"} />}

            </div>

        </ComponentHolder >

    );
}

interface Props {

    dataSource?: Array<blogItemType>,

    bannerMode?: boolean,

    story?: {

        title: string,

        category: string,

        author: string,

        date: string,

        image: string

    }

}
