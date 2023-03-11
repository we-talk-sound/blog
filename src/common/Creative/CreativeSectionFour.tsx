import React from 'react';
import { ComponentHolder } from 'components';
import Abeg from "assets/svg/partners/abeg.svg";
import Andela from "assets/svg/partners/andela.svg";

export const CreativeSectionFour: React.FC = ({ }) => {

    const partners = [

        { image: Abeg, alt: "Abeg" },

        { image: Andela, alt: "Andela" },

        { image: Abeg, alt: "Abeg" },

        { image: Andela, alt: "Andela" },

        { image: Abeg, alt: "Abeg" },

        { image: Andela, alt: "Andela" },

    ];

    return (

        <ComponentHolder

            className='page-zero no-border page-agency page-agency-section-four'

            bodyClass='page-zero-content'>

            <div className='page-agency-section-four-content-body'>

                <h1 className='page-agency-section-three-header'> Our Clients </h1>

                <div className='page-agency-section-four-partner-holder'>

                    {partners.map((item, index) =>

                        <div

                            key={`partner-block-${index}`}

                            className='page-agency-section-four-partner-box'>

                            <div className='page-agency-section-four-partner-box-image'>

                                <img

                                    src={item.image}

                                    alt={item.alt}

                                />

                            </div>

                            <p> {item.alt} </p>

                        </div>
                    )}

                </div>

            </div>

        </ComponentHolder >

    );
}
