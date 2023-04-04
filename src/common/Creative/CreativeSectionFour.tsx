import React, { useState } from 'react';
import { Button, ComponentHolder } from 'components';
import { PartnerItem } from 'components/Partner/PartnerItem';

export const CreativeSectionFour: React.FC = ({ }) => {

    const [showAll, setShowAll] = useState(false);

    const partners = [

        { image: "/assets/partners/bolt.jpg", alt: "Bolt" },

        { image: "/assets/partners/def-jam.jpg", alt: "Def Jam" },

        { image: "/assets/partners/empire.jpg", alt: "Empire" },

        { image: "/assets/partners/boomplay.png", alt: "Boomplay" },

        { image: "/assets/partners/onerpm.png", alt: "One RPM" },

        { image: "/assets/partners/49th.jpeg", alt: "49th street" },

        { image: "/assets/partners/the_aristokrat_group.png", alt: "Aristokrat Group" },

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

                            hidden={showAll ? false : index > 5}

                        />
                    )}

                </div>

                <Button

                    className={"no-bg"}

                    label={showAll ? "Show Less" : "Show More"}

                    onClick={() => setShowAll((prevState) => !prevState)}

                />

            </div>

        </ComponentHolder >

    );
}
