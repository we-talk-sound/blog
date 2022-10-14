import React from 'react';
import StoryImage from "assets/png/landing/blog-section/story-image.png";
import { ComponentHolder, StoryItem } from 'components';
import { ExpandedButton } from 'components/ExpandButton';

export const SectionFive: React.FC = () => {

    const MarQueeTexts = () => (
        <>
            Blog <span /> Blog <span /> Blog <span /> Blog <span /> Blog <span /> Blog <span /> Blog <span />
        </>
    );

    const blogData = [

        {
            title: "Omah Lay releases his debut album Boy Alone on KeyQaad Records",
            category: "COMMUNITY",
            author: "Moyo Onipede",
            date: "Saturday, September 3, 2022",
            isActive: true

        },

        {

            title: "Potential Record Breakers At The 15th Headies.",
            author: "David Olayiwola",
            category: "MUSIC",
            date: "Saturday, September 3, 2022"

        },

        {

            title: "Potential Record Breakers At The 15th Headies.",
            author: "David Olayiwola",
            category: "Insights",
            date: "Saturday, September 3, 2022"

        }

    ];

    return (

        <ComponentHolder
            className="no-border"
            bodyClass="page-zero-section-five page-zero-section-two page-zero-section-three"
        >

            {/* @ts-expect-error */}
            <marquee scrollAmount={20}  >

                <div>

                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />
                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />
                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />

                </div>

                {/* @ts-expect-error */}
            </marquee>

            <div className='page-zero-section-two-body page-zero-section-five-body'>

                <ComponentHolder

                    title='Latest stories'

                    headerClass='color-white page-zero-section-five-body-header'

                    bodyClass='page-zero-section-five-blog'

                >

                    <div className='page-zero-section-five-blog-stories'>

                        {blogData.map((item) => <StoryItem story={item} key={item.title} />)}

                    </div>

                    <img src={StoryImage} alt={`blog-image-item`} />

                </ComponentHolder>

                <ExpandedButton label='Go to blog' textClass='color-white' />

            </div>

        </ComponentHolder >

    );
}
