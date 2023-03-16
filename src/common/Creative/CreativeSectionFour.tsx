import React from 'react';
import { ComponentHolder } from 'components';
import { PartnerItem } from 'components/Partner/PartnerItem';

export const CreativeSectionFour: React.FC = ({ }) => {

    const partners = [

        { image: "/assets/partners/abeg.svg", alt: "Abeg" },

        { image: "/assets/partners/andela.svg", alt: "Andela" },

        { image: "/assets/projects/teni.png", alt: "Teni" },

        { image: "/assets/projects/joe-boy.png", alt: "Joeboy" },

        { image: "/assets/projects/ria-sean.png", alt: "Ria Sean" },

        { image: "/assets/projects/vader.png", alt: "Vader" },

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
