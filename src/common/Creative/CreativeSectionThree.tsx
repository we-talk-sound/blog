import React from 'react';
import { Button, ComponentHolder } from 'components';
import ArtistOne from "assets/png/landing/blog-section/artist-one.png";
import ArtistTwo from "assets/png/landing/blog-section/artist-two.png";
import ArtistThree from "assets/png/landing/blog-section/artist-three.png";
import ArtistFour from "assets/png/landing/blog-section/artist-four.png";

export const CreativeSectionThree: React.FC<{ withHeader?: boolean }> = ({ withHeader }) => {

    const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Eget sed diam purus sagittis mi. 
    Ornare neque, est diam sed augue at nascetur et.`;

    const data = [
        [
            { image: ArtistOne, text: "LOR IPSUM", paragraph },
            { image: ArtistTwo, text: "LOR IPSUM", paragraph },
            { image: ArtistThree, text: "LOR IPSUM", paragraph },
            { image: ArtistFour, text: "LOR IPSUM", paragraph }
        ],

        [
            { image: ArtistOne, text: "LOR IPSUM", paragraph },
            { image: ArtistTwo, text: "LOR IPSUM", paragraph },
            { image: ArtistThree, text: "LOR IPSUM", paragraph },
            { image: ArtistFour, text: "LOR IPSUM", paragraph }
        ]
    ];

    return (

        <ComponentHolder

            className='page-zero no-border page-agency-section-three'

            bodyClass='page-zero-content'>

            <div className='page-agency-section-three-content-body'>

                {withHeader && <h1 className='page-agency-section-three-header'> Our Projects </h1>}

                {data.map((data_, index) =>

                    <div

                        key={`project-section-${index}`}

                        className='page-zero-section-four-blog'

                    >

                        {data_.map((item, index) =>

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

                )}

            </div>

        </ComponentHolder >

    );
}

