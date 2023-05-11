import React from 'react';
import { ProjectItem } from './ProjectItem';

export const ProjectItemMobile: React.FC<Props> = ({ projectItems }) => {

    return (

        <div className='project-item-mobile-holder'>

            <div className='project-item-mobile'>

                {projectItems.map((item, index) =>

                    <ProjectItem

                        key={`project-item-mobile-${index}`}

                        indicator={{ show: true, numberOfItems : projectItems.length , index }}

                        {...item}

                    />

                )}

            </div>

        </div>

    );
}

interface Props {

    projectItems: {

        image: string,

        text: string,

        bigText?: string,

        onClick?: () => void

    }[]

}
