import React from 'react';
import { ComponentHolder } from 'components';
import Abeg from "assets/svg/partners/abeg.svg";
import AltSchool from "assets/svg/partners/alt-school.svg";
import Ariga from "assets/svg/partners/ariga.svg";
import Andela from "assets/svg/partners/andela.svg";

export const CreativeSectionFour: React.FC = ({ }) => {

    const data = [

        { image: Abeg, alt: "abeg" },

        { image: AltSchool, alt: "AltSchool" },

        { image: Ariga, alt: "Ariga" },

        { image: Andela, alt: "Andela" },

    ];

    const partners = [data, data, data];

    return (

        <ComponentHolder

            className='page-zero no-border page-agency page-agency-section-four'

            bodyClass='page-zero-content'>

            <div className='page-agency-section-four-content-body'>

                <h1 className='page-agency-section-three-header'> Our Clients </h1>

                {partners.map((item, index) =>

                    <div

                        key={`partner-block-${index}`}

                        className='page-agency-section-four-partner-box'>

                        {item.map((partner, index_) => <img src={partner.image} alt={partner.alt} key={`partner-${index}-${index_}`} />)}


                    </div>
                )}

            </div>

        </ComponentHolder >

    );
}
