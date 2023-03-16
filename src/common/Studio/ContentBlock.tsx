import React from 'react';
import { ComponentHolder } from 'components';
import { StudioContentItem } from './StudioContentItem';

export const ContentBlock: React.FC<Props> = ({ }) => {

    const items = [

        {

            image: 'assets/content/content-1.png',
            title: 'WeTalkSound Dissects: Escapade EP with Novemba'

        },

        {

            image: 'assets/content/content-2.png',
            title: '14 Questions Joeboy'

        },

        {

            image: 'assets/content/content-3.png',
            title: 'Show Me Something. (Official Visualizer)'

        },

        {

            image: 'assets/content/content-4.png',
            title: 'Camp Nova 1.0 (Documentary)'

        },

    ];

    return (

        <ComponentHolder

            className='no-border studio-content'

            bodyClass='page-zero-content'>

            <div className='studio-content-block'>

                <h2 className='studio-content-block-header'> Our Contents </h2>

            </div>

            <div className='studio-content-items'>

                {items.map((item, index) =>

                    <StudioContentItem

                        key={`content-item-${index}`}

                        image={item.image}

                        title={item.title}

                    />

                )}

            </div>

        </ComponentHolder>

    );
}

interface Props {
    title?: string,
    text?: string,
    className?: string,
}
