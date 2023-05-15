import React from 'react';
import { ProjectItem } from './ProjectItem';
import { classnames } from 'utils';

export const ProjectItemMobile: React.FC<Props> = ({ projectItems , hidden }) => {

    return (

        <div className={classnames('project-item-mobile-holder', hidden && "project-item-mobile-hidden")}>

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

    hidden?: boolean,

    projectItems: {

        image: string,

        text: string,

        bigText?: string,

        onClick?: () => void

    }[]

}
