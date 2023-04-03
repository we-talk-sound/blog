import React from 'react';
import { ComponentHolder } from 'components';
import { PartnerItem } from 'components/Partner/PartnerItem';

export const CreativeSectionFour: React.FC = ({ }) => {

    const partners = [

        { image: "/assets/partners/bolt.jpg", alt: "Bolt" },

        { image: "/assets/partners/def-jam.jpg", alt: "Def Jam" },

        { image: "/assets/partners/empire.jpg", alt: "Empire" },

        { image: "/assets/partners/boomplay.png", alt: "Boomplay" },

        { image: "/assets/partners/onerpm.png", alt: "One RPM" },

    ];

    return (

        <ComponentHolder

            className='no-border page-agency page-agency-section-four'

            bodyClass='page-zero-content'>

            <div className='page-agency-section-four-content-body'>

                <h1 className='page-agency-section-three-header'> Our Clients </h1>

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
