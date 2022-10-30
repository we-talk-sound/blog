import React from 'react';
import StoryImage from "assets/png/landing/blog-section/story-image.png";
import { ComponentHolder, StoryItem } from 'components';
import { classnames } from 'utils';
import { blogItemType } from 'types';
import { transformStory } from 'utils/blog';

export const BlogBannerArticles: React.FC<Props> = ({ bannerMode, withoutArticles, dataSource }) => {

    const blogData = (dataSource || []).map((item) => transformStory(item));

    return (

        <ComponentHolder

            title={bannerMode ? undefined : 'Latest stories'}

            className={"blog-banner-articles-holder"}

            headerClass={classnames('color-white blog-banner-body-header')}

            bodyClass={classnames('blog-banner-blog', bannerMode && "page-blog-banner-flex")}

        >

            {(withoutArticles !== true) &&

                <div className='page-zero-blog-banner-blog-stories'>

                    {blogData.map((item) =>

                        <StoryItem

                            story={item} 
                            
                            key={item.title}

                        />

                    )}

                </div>

            }

            <img src={StoryImage || blogData?.[0]?.image} alt={`blog-image-item`} />

        </ComponentHolder>

    );
}

interface Props {

    bannerMode?: boolean,

    withoutArticles?: boolean,

    dataSource?: blogItemType[]

}
