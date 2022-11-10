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

                    value={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Amet urna at ridiculus libero, dictumst consequat ipsum, auctor vel. 
                    In viverra volutpat vel ullamcorper ridiculus aenean quam arcu. Nunc, enim cras fermentum mauris 
                    nunc libero libero lobortis suspendisse. Ultricies morbi tortor, amet id nibh.`}

                />

                <ViewFormatter

                    type={"Collapsible"}

                    title={"What we do"}

                    value={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Amet urna at ridiculus libero, dictumst consequat ipsum, auctor vel. 
                            In viverra volutpat vel ullamcorper ridiculus aenean quam arcu. Nunc, enim cras fermentum mauris 
                            nunc libero libero lobortis suspendisse. Ultricies morbi tortor, amet id nibh.`}

                />


            </div>

        </ComponentHolder >

    );
}
