import React from 'react';
import { ProjectItemIndicator } from './ProjectItemIndicator';
import { classnames } from 'utils';

export const ProjectItem: React.FC<Props> = ({ image, text, bigText, indicator, hidden }) => {

    const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Eget sed diam purus sagittis mi. 
                        Ornare neque, est diam sed augue at nascetur et.`;
    return (

        <div className={classnames('project-item', hidden && "project-item-hidden")}>

            {indicator?.show &&

                <ProjectItemIndicator

                    active={indicator.index}

                    numberOfItems={indicator.numberOfItems}

                />

            }

            <img src={image} alt={`project-item-image`} />

            <div className='project-item-overlay'>

                <h4> {text} </h4>

                <p> {bigText || paragraph} </p>

            </div>

        </div>


    );
}

interface Props {

    image: string,

    text: string,

    bigText?: string,

    onClick?: () => void,

    showIndicator?: boolean,

    hidden?: boolean,

    indicator?: {

        show: boolean,

        numberOfItems : number,

        index: number

    }

}
