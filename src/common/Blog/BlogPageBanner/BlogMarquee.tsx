import React from 'react';

export const BlogMarquee: React.FC = ({ }) => {

    const MarQueeTexts = () => (
        <>
            Blog <span /> Blog <span /> Blog <span /> Blog <span /> Blog <span /> Blog <span /> Blog <span />
        </>
    );

    return (

        <>

            {/* @ts-expect-error */}
            <marquee scrollAmount={20}  >

                <div>

                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />
                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />
                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />

                </div>

                {/* @ts-expect-error */}


            </marquee>

        </>

    );
}
