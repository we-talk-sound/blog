import React from 'react';
import { Button } from 'components';

export const ProjectItem: React.FC<Props> = ({ onClick, image, text, bigText }) => {

    const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Eget sed diam purus sagittis mi. 
                        Ornare neque, est diam sed augue at nascetur et.`;
    return (

        <div className='project-item'>

            <img src={image} alt={`project-item-image`} />

            <div className='project-item-overlay'>

                <h4> {text} </h4>

                <p> {bigText || paragraph} </p>

                <Button

                    label='Read More'

                    className='no-bg'

                    onClick={() => onClick ? onClick() : null}

                />

            </div>

        </div>


    );
}

interface Props {

    image: string,

    text: string,

    bigText?: string,

    onClick?: () => void

}
