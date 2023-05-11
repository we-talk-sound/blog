import React from 'react';
import { ComponentHolder } from 'components';
import { PartnerItem } from 'components/Partner/PartnerItem';

export const PartneredEvents: React.FC = ({ }) => {

    const partners = [

        { image: "/assets/partnered-events/pinewine.png", alt: "Palmwine Festival - 2019" },

        { image: "/assets/partnered-events/fest.jpeg", alt: "ISL Fest - 2022" },

        { image: "/assets/partnered-events/bella.jpeg", alt: "Bella Shmurda Live in Ibadan - 2022" },

        { image: "/assets/partnered-events/activity.jpeg", alt: "Activity Fest - 2022" },

    ];

    return (

        <ComponentHolder

            className='no-border page-agency page-agency-section-four page-events-partnered-block'

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
