import React, { useEffect, useState } from 'react';
// import StoryImage from "assets/png/landing/blog-section/story-image.png";
import { ComponentHolder, StoryItem } from 'components';
import { classnames } from 'utils';
import { blogItemType } from 'types';
import { transformStory } from 'utils/blog';
import { StoriesItemPlaceHolder } from 'common/Placeholders';

export const BlogBannerArticles: React.FC<Props> = ({

    bannerMode,

    withoutArticles,

    dataSource,

    image,

    dataSourceLoader,

    slug

}) => {

    const blogData = (dataSource || []).map((item) => transformStory(item));

    const [focus, setFocus] = useState(0);

    useEffect(() => {

        if (blogData.length) {

            const maxLength = blogData.length - 1;

            const nextStopToFocus = focus === maxLength ? 0 : focus + 1;

            setTimeout(() => setFocus(nextStopToFocus), 15000);

        }

    }, [focus, blogData.length]);

    return (

        <ComponentHolder

            title={bannerMode ? undefined : 'Latest stories'}

            className={"blog-banner-articles-holder"}

            headerClass={classnames('color-white blog-banner-body-header')}

            bodyClass={classnames('blog-banner-blog', bannerMode && "page-blog-banner-flex", slug && "page-blog-banner-active-story")}

        >

            {(withoutArticles !== true) &&

                <div className='page-zero-blog-banner-blog-stories'>

                    {(blogData || []).map((item, index) =>

                        <StoryItem

                            mode="banner-feed"

                            story={item}

                            key={item.title}

                            isActive={blogData.length > 0 && focus === index}

                        />

                    )}

                    {(dataSourceLoader && blogData?.length < 1) && <StoriesItemPlaceHolder />}

                </div>

            }

            {(slug ? image !== undefined : true) &&

                <div

                    className='blog-banner-articles-image'

                    style={{ backgroundImage: `url(${image || (blogData?.[focus]?.image)})` }}

                />

            }

            {slug && !image && <div className='content-loader-image content-loader-blog-image' />}

        </ComponentHolder>

    );
}

interface Props {

    bannerMode?: boolean,

    withoutArticles?: boolean,

    dataSource?: blogItemType[],

    image?: string,

    dataSourceLoader?: boolean,

    slug?: string

}
