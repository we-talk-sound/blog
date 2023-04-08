import React, { useState } from 'react';
import { ComponentHolder, Modal } from 'components';
import { StudioContentItem } from './StudioContentItem';

export const ContentBlock: React.FC<Props> = ({ }) => {

    const [playVideo, setPlayVideo] = useState<{ video?: string, visibility: boolean }>({

        video: undefined,

        visibility: false

    });

    const items = [

        {

            image: 'assets/content/content-1.png',
            title: 'WeTalkSound Dissects: Escapade EP with Novemba',
            link: 'https://www.youtube.com/embed/ahnThzQwVBE?autoplay=1&mute=1&controls=0'

        },

        {

            image: 'assets/content/content-2.png',
            title: '14 Questions Joeboy',
            link: 'https://www.youtube.com/embed/6sMgypOZ2nE?autoplay=1&mute=1&controls=0'

        },

        {

            image: 'assets/content/content-3.png',
            title: 'Show Me Something. (Official Visualizer)',
            link: 'https://www.youtube.com/embed/_eDvqWkEFbY?autoplay=1&mute=1&controls=0'


        },

        {

            image: 'assets/content/content-4.png',
            title: 'Camp Nova 1.0 (Documentary)',
            link: 'https://www.youtube.com/embed/V8Z1d9ddNIg?autoplay=1&mute=1&controls=0'

        },

    ];

    return (

        <ComponentHolder

            className='no-border studio-content'

        >

            <Modal

                noObviousExit={true}

                visibility={playVideo.visibility}

                toggleOut={() => setPlayVideo({ video: undefined, visibility: false })}

            >

                <iframe src={playVideo.video} width={"100%"} height={"100%"} />

            </Modal>

            <div className='studio-content-block'>

                <h2 className='studio-content-block-header'> Our Contents </h2>

            </div>

            <div className='studio-content-items'>

                {items.map((item, index) =>

                    <StudioContentItem

                        onClick={() => setPlayVideo(({ video: item.link, visibility: true }))}

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
