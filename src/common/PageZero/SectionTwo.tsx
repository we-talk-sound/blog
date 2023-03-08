import React from 'react';
import { ComponentHolder, ViewFormatter } from 'components';

export const SectionTwo: React.FC = () => {

    return (

        <ComponentHolder
            className="no-border"
            bodyClass="page-zero-section-two"
        >

            <div className='page-zero-section-two-body'>

                <ViewFormatter

                    type={"Collapsible"}

                    title={"Who are we"}

                    value={
                        `WeTalkSound (WTS) is a 360 creative company based in Lagos. 
                    We leverage community, content and technology to design digital and in-person experiences 
                    for brands and consumers. We have one of the most powerful voices in the West African 
                    creative and pop-culture space, and we use it to convey strong narratives & amplify 
                    creative brands.`
                    }

                />

                <ViewFormatter

                    type={"Collapsible"}

                    title={"What we do"}

                    value={`
                    We create content, build products and design holistic experiences that help 
                    brands in music, tech and other industries reach, grow and delight their fans and 
                    customers.`
                    }

                />


            </div>

        </ComponentHolder >

    );
}
