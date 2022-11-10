import React from 'react';

export const BlogMarquee: React.FC = ({ }) => {

    const MarQueeTexts = () => (
        <>
            Blog <span className='marquee-span' /> Blog <span className='marquee-span' /> 
            Blog <span className='marquee-span' /> Blog <span className='marquee-span' /> 
            Blog <span className='marquee-span' /> Blog <span className='marquee-span' /> 
            Blog <span className='marquee-span' />
        </>
    );

    return (

        <>

            {/* @ts-expect-error */}
            <marquee scrollAmount={20} loop={-1} >

                <div className='marquee-div'>

                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />
                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />
                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />

                </div>

                {/* @ts-expect-error */}


            </marquee>

        </>

    );
}
