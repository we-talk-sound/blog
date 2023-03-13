import React from 'react';
import { ComponentHolder } from 'components';
import { PartnerItem } from 'components/Partner/PartnerItem';

export const PartneredEvents: React.FC = ({ }) => {

    const partners = [

        { image: "/assets/partners/abeg.svg", alt: "Palmwine Festival - 2019" },

        { image: "/assets/partners/andela.svg", alt: "Z! Fest - 2022" },

        { image: "/assets/projects/teni.png", alt: "Island Block Party - DEC 2022" },

        { image: "/assets/projects/joe-boy.png", alt: "Joeboy Live - 2021" },

        { image: "/assets/projects/ria-sean.png", alt: "Boy Alone (World tour) - 2023" },

        { image: "/assets/projects/vader.png", alt: "Hennesy VS Class viii - 2022" },

    ];

    return (

        <ComponentHolder

            className='page-zero no-border page-agency page-agency-section-four'

            bodyClass='page-zero-content'>

            <div className='page-agency-section-four-content-body'>

                <h1 className='page-agency-section-three-header'> Events we partnered </h1>

                <div className='page-agency-section-four-partner-holder'>

                    {partners.map((item, index) =>

                        <PartnerItem

                            key={`partner-block-${index}`}

                            image={item.image}

                            text={item.alt}

                        />
                    )}

                </div>

            </div>

        </ComponentHolder >

    );
}
