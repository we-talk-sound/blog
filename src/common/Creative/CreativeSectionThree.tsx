import React from 'react';
import { ComponentHolder } from 'components';
import { ProjectItem } from 'components/Project/ProjectItem';

export const CreativeSectionThree: React.FC<{ withHeader?: boolean }> = ({ withHeader }) => {

    const data = [
        [
            { image: "/assets/projects/joe-boy.png", text: "Joeboy" },
            { image: "/assets/projects/reminisce.png", text: "Reminisce" },
            { image: "/assets/projects/d-smoke.png", text: "D-SMOKE" },
            { image: "/assets/projects/ria-sean.png", text: "RIA SEAN" }
        ],

        [
            { image: "/assets/projects/joe-boy.png", text: "Joeboy" },
            { image: "/assets/projects/reminisce.png", text: "Reminisce" },
            { image: "/assets/projects/d-smoke.png", text: "D-SMOKE" },
            { image: "/assets/projects/ria-sean.png", text: "RIA SEAN" }
        ],
    ];

    return (

        <ComponentHolder

            className='page-zero no-border page-agency-section-three'

            bodyClass='page-zero-content'>

            <div className='page-agency-section-three-content-body'>

                {withHeader && <h1 className='page-agency-section-three-header'> Our Projects </h1>}

                {data.map((data_, index) =>

                    <div

                        key={`project-section-${index}`}

                        className='page-zero-section-four-projects'

                    >

                        {data_.map((item, index) =>

                            <ProjectItem
                                key={`section-landing-blog-data-${index}`}
                                image={item.image}
                                text={item.text}
                            />

                        )}

                    </div>

                )}

            </div>

        </ComponentHolder >

    );
}

