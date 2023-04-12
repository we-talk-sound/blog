import React, { useState } from 'react';
import { ComponentHolder, ViewFormatter } from 'components';
import { Marquee } from 'components/Marquee';
import { useInView } from "react-cool-inview";
import { classnames } from 'utils';

export const SectionTwo: React.FC = () => {

    const [presence, setPresence] = useState<boolean | "complete">(false);

    const { observe } = useInView({

        threshold: 0.08, // Default is 0

        onEnter: ({ unobserve }) => {

            setPresence(true);

            unobserve();

        },

        // More useful options...
    });

    return (

        <ComponentHolder
            Ref={observe}
            className="no-border"
            bodyClass={classnames("page-zero-section-two" , presence && 'page-zero-section-two-show')}
        >

            <Marquee text='About' />

            <div

                className={'page-zero-section-two-body'}

            >

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
