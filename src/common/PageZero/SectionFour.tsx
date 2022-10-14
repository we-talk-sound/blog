import React from 'react';
import { Button, ComponentHolder } from 'components';
import ArtistOne from "assets/png/landing/blog-section/artist-one.png";
import ArtistTwo from "assets/png/landing/blog-section/artist-two.png";
import ArtistThree from "assets/png/landing/blog-section/artist-three.png";
import ArtistFour from "assets/png/landing/blog-section/artist-four.png";
import { ExpandedButton } from 'components/ExpandButton';

export const SectionFour: React.FC = () => {

    const MarQueeTexts = () => (
        <>
            Projects <span /> Projects <span /> Projects <span /> Projects <span /> Projects <span /> Projects <span /> Projects <span />
        </>
    );

    const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Eget sed diam purus sagittis mi. 
                        Ornare neque, est diam sed augue at nascetur et.`;

    const data = [
        { image: ArtistOne, text: "LOR IPSUM", paragraph },
        { image: ArtistTwo, text: "LOR IPSUM", paragraph },
        { image: ArtistThree, text: "LOR IPSUM", paragraph },
        { image: ArtistFour, text: "LOR IPSUM", paragraph }
    ];

    return (

        <ComponentHolder bodyClass='no-border page-zero-section-two page-zero-section-four'>

            {/* @ts-expect-error */}
            <marquee scrollAmount={20}  >

                <div>

                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />
                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />
                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />

                </div>

                {/* @ts-expect-error */}
            </marquee>

            <div className='page-zero-section-two-body page-zero-section-four-body'>

                <div className='page-zero-section-four-blog'>

                    {data.map((item, index) =>

                        <div
                            className='page-zero-section-four-blog-item'
                            key={`section-landing-blog-data-${index}`}
                        >

                            <img src={item.image} alt={`blog-image`} />


                            <div className='page-zero-section-four-blog-item-overlay'>

                                <h4> {item.text} </h4>

                                <p> {item.paragraph} </p>

                                <Button label='Read More' className='no-bg' />

                            </div>

                        </div>

                    )}

                </div>

                <ExpandedButton label='See all our projects' textClass='color-white' />

            </div>

        </ComponentHolder >

    );
}
