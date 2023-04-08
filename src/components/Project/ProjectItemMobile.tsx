import React, { useEffect, useState } from 'react';
import { classnames } from 'utils';
import { ProjectItem } from './ProjectItem';

export const ProjectItemMobile: React.FC<Props> = ({ projectItems }) => {

    const [uniqueId] = useState("modal-" + Math.random().toString(36).substring(2, 5));

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {

        const scrollParent = document.getElementById(uniqueId);

        const scrollChild = document.getElementsByClassName('project-item');

        const width = scrollChild?.[0]?.getBoundingClientRect()?.width || 1;

        const scrollFunction = () => {

            setActiveIndex(Number(((scrollParent?.scrollLeft || 0) / width).toFixed()));

        }

        if (scrollParent && scrollChild?.[0]) {

            scrollParent.addEventListener("scroll", () => scrollFunction(), false);

            return (() => {

                scrollParent.removeEventListener("scroll", () => scrollFunction(), false);

            })

        }

        // eslint-disable-next-line
    }, [document]);

    return (

        <div className='project-item-mobile-holder'>

            <div className='project-item-mobile-indicator'>

                {projectItems.map((item, index) =>

                    <span

                        key={`project-item-indicator-${index}`}

                        className={classnames(

                            'project-item-mobile-indicator-dot',

                            activeIndex === index && "active"

                        )}

                    />

                )}

            </div>

            <div className='project-item-mobile' id={uniqueId}>

                {projectItems.map((item, index) =>

                    <ProjectItem

                        key={`project-item-mobile-${index}`}

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
