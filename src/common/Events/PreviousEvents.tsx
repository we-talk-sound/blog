import React from 'react';
import { ComponentHolder, EventItem } from 'components';

export const PreviousEvents: React.FC = ({ }) => {

    const data = [
        { image: "/assets/events/event-davido.png", title: "Insert Nights 6.0", subtitle: "06/05/2023" },
        { image: "/assets/events/big-wiz-event.jpg", title: "Insert Nights 5.0", subtitle: "16/12/2022" },
        { image: "/assets/events/street-pop.jpg", title: "Insert Nights 4.0", subtitle: "27/10/2022" },
        { image: "/assets/projects/event-item.png", title: "Insert Nights 3.0", subtitle: "01/07/2022" },
        { image: "/assets/events/theme-hiphop.webp", title: "Insert Nights 2.0", subtitle: "27/05/2022" },
        { image: "/assets/events/insert-night.webp", title: "Insert Nights 1.0", subtitle: "31/03/2022" }
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

                            button={{ label: "View Reels" }}

                            key={`event-${index}`}

                            {...item}

                        />

                    )}

                </div>

            </div>




        </ComponentHolder >

    );
}

