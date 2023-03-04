import React from 'react';
import { ComponentHolder, ViewFormatter } from 'components';

export const SectionTwo: React.FC = () => {

    const MarQueeTexts = () => (
        <>
            ABOUT <span className='marquee-span' /> ABOUT <span className='marquee-span' />
            ABOUT <span className='marquee-span' /> ABOUT <span className='marquee-span' />
            ABOUT <span className='marquee-span' /> ABOUT <span className='marquee-span' />
            ABOUT <span className='marquee-span' />
        </>
    );

    return (

        <ComponentHolder
            className="no-border"
            bodyClass="page-zero-section-two"
        >

            {/* @ts-expect-error */}
            <marquee scrollAmount={20} loop={-1} >

                <div className='marquee-div' >

                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />
                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />
                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />

                </div>

                {/* @ts-expect-error */}
            </marquee>

            <div className='page-zero-section-two-body'>

                <ViewFormatter

                    type={"Collapsible"}

                    title={"Who are we"}

                    value={
                        `WeTalkSound (WTS) is a 360 creative company based in Lagos. 
                    We leverage community, content and technology to design digital and in-person experiences 
                    for brands and consumers. We have one of the most powerful voices in the West African 
                    creative and pop-culture space, and we use it to convey strong narratives & amplify 
                    creative brands.`
                    }

                />

                <ViewFormatter

                    type={"Collapsible"}

                    title={"What we do"}

                    value={`
                    We create content, build products and design holistic experiences that help 
                    brands in music, tech and other industries reach, grow and delight their fans and 
                    customers.`
                    }

                />


            </div>

        </ComponentHolder >

    );
}
