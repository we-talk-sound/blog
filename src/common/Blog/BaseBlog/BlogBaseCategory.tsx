import React from 'react';
import { ComponentHolder, StoryItem } from 'components';
import BlogImage from "assets/png/landing/blog-section/blog-image.png";

export const BlogBaseCategory: React.FC = ({ }) => {

    const story = {

        title: "Lojay Delivers Long-Awaited Single & Music Video “Leader!”",
        author: "David Olayiwola",
        category: "Insights",
        date: "Saturday, September 3, 2022",
        image: BlogImage,
        sub:  `Showing no signs of slowing down, Lojay’s new single, “Leader!” adds yet another string to his bow.`

    };

    return (

        <>

            <ComponentHolder

                className="no-border page-blog-active-category-holder"

                headerClass='page-blog-active-category-header'

                bodyClass="page-blog-active-category-body"

                title={'MUSIC'}

                subtitle={'RELEASES, REVIEWS AND MORE. EXPERIENCE THE BEST MUSIC FROM OUR COMMUNITY AND BEYOND.'}

                align={true}
            >


                <div className="page-blog-latest-articles-flex page-blog-active-category-flex">

                    {[...Array(9)].map((item, index) =>

                        <StoryItem

                            mode={"article"}

                            key={`blog-story-item-${index}`}

                            story={story}

                        />

                    )}

                </div>

            </ComponentHolder>

        </>
    )
}

