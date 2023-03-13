import React from 'react';
import { ComponentHolder, EventItem } from 'components';

export const PreviousEvents: React.FC = ({}) => {

    const data = [
        { image: "/assets/projects/event-item.png", title: "Insert Nights", subtitle: "02/08/2021" },
        { image: "/assets/projects/event-item.png", title: "Insert Nights", subtitle: "02/08/2021" },
        { image: "/assets/projects/event-item.png", title: "Insert Nights", subtitle: "02/08/2021" },
        { image: "/assets/projects/event-item.png", title: "Insert Nights", subtitle: "02/08/2021" },
        { image: "/assets/projects/event-item.png", title: "Insert Nights", subtitle: "02/08/2021" },
        { image: "/assets/projects/event-item.png", title: "Insert Nights", subtitle: "02/08/2021" }
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

                            key={`event-${index}`}

                            {...item}

                        />

                    )}

                </div>

            </div>




        </ComponentHolder >

    );
}

