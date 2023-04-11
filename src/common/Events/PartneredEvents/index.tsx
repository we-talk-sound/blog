import React from 'react';
import { ComponentHolder } from 'components';
import { PartnerItem } from 'components/Partner/PartnerItem';

export const PartneredEvents: React.FC = ({ }) => {

    const partners = [

        { image: "/assets/partnered-events/pinewine.png", alt: "Palmwine Festival - 2019" },

        { image: "/assets/partnered-events/z.png", alt: "Z! Fest - 2022" },

        { image: "/assets/partnered-events/island.png", alt: "Island Block Party - DEC 2022" },
        
        { image: "/assets/partnered-events/joe-boy.png", alt: "Joeboy Live - 2021" },

        { image: "/assets/partnered-events/boyalone.png", alt: "Boy Alone (World tour) - 2023" },

        { image: "/assets/partnered-events/henny.png", alt: "Hennesy VS Class viii - 2022" },

    ];

    return (

        <ComponentHolder

            className='no-border page-agency page-agency-section-four'

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
