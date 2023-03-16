import React from 'react';
import { classnames } from 'utils';

export const StudioContentItem: React.FC<Props> = ({ image, title, className }) => {

    return (

        <div

            className={classnames('studio-content-item', className)}>

            <div className='studio-content-item-image'>

                <img src={image} className='studio-content-item-image-img' alt={title} />

                <div className='studio-content-item-image-play'>

                    <img src={"assets/content/play-vector.png"} alt={"Click to play"} />

                </div>

            </div>

            <p> {title} </p>

        </div>

    );
}

interface Props {
    title: string,
    image: string,
    className?: string,
}
