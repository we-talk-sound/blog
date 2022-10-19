import React from 'react';
import { ComponentHolder, ViewFormatter } from 'components';

export const CreativeSectionTwo: React.FC = ({ }) => {

    return (

        <ComponentHolder

            className='page-zero no-border page-agency page-agency-section-two'

            bodyClass='page-zero-content'>

            <ViewFormatter

                value={'Who are we?'}

                title={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet urna at ridiculus libero, 
                dictumst consequat ipsum, auctor vel. In viverra volutpat vel ullamcorprmentum mauris nutis suspendisse. 
                Ultricies morbi tortor, amet id nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet urna 
                at ridiculus libero, dictumst consequat ipsum, auctor vel. In viverra volutpat vel ullamcorprmentum mauris 
                nutis suspendisse. Ultricies morbi tortor,`
                }


            />

        </ComponentHolder >

    );
}

