import React from 'react';
import { ComponentHolder, EventItem } from 'components';

export const PreviousEvents: React.FC = ({ }) => {

    const data = [
        {
            image: "/assets/events/event-davido.png",
            title: "Insert Nights 6.0",
            subtitle: "06/05/2023",
            externalLink: "https://www.instagram.com/p/CrtPrGtss6M/"
        },
        {
            image: "/assets/events/big-wiz-event.jpg",
            title: "Insert Nights 5.0",
            subtitle: "16/12/2022",
            externalLink: "https://www.instagram.com/p/CmO1_fmu1CP/"
        },
        {
            image: "/assets/events/theme-hiphop.webp",
            title: "Insert Nights 2.0",
            subtitle: "27/05/2022",
            externalLink: "https://www.instagram.com/p/CfZQHd0FRtz/"
        },
        {
            image: "/assets/events/insert-night.webp",
            title: "Insert Nights 1.0",
            subtitle: "31/03/2022",
            externalLink: "https://www.instagram.com/p/CeB8XNOFydF/"
        }
    ];

    return (

        <ComponentHolder

            className='no-border page-events-previous-block'

            bodyClass='page-event-previous-content'

        >

            <div className='page-agency-section-three-content-body'>

                <h1 className='page-events-previous-content-header'> Previous Events </h1>

                <div className='page-events-previous-block-flex'>

                    {data.map((item, index) =>

                        <EventItem

                            isReel={true}

                            button={{ label: "View Reels", externalLink: item.externalLink }}

                            key={`event-${index}`}

                            {...item}

                        />

                    )}

                </div>

            </div>




        </ComponentHolder >

    );
}

