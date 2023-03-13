import React from 'react';
import { ComponentHolder } from 'components';
import { ExpandedButton } from 'components/ExpandButton';
import { ProjectItem } from 'components/Project/ProjectItem';

export const SectionFour: React.FC = () => {

    const data = [
        { image: "/assets/projects/joe-boy.png", text: "Joeboy" },
        { image: "/assets/projects/reminisce.png", text: "Reminisce" },
        { image: "/assets/projects/d-smoke.png", text: "D-SMOKE" },
        { image: "/assets/projects/ria-sean.png", text: "RIA SEAN" }
    ];

    return (

        <ComponentHolder

            bodyClass='no-border page-zero-section-four'

            id={"projects-section"}>

            <div className='page-zero-section-four-body'>

                <div className='page-zero-section-four-projects'>

                    {data.map((item, index) =>

                        <ProjectItem
                            key={`section-landing-blog-data-${index}`}
                            image={item.image}
                            text={item.text}
                        />
                    )}

                </div>

                <ExpandedButton label='See all our projects' textClass='color-white' />

            </div>

        </ComponentHolder >

    );
}
