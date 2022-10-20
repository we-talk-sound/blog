import React from 'react';
import { ComponentHolder, EventItem } from 'components';
import EventItemImage from "assets/png/landing/event-section/event-item-image.png";

export const EventsSectionTwo: React.FC = ({}) => {

    const data = [
        { image: EventItemImage, title: "Insert Nights", subtitle: "WETALKSOUND" },
        { image: EventItemImage, title: "Insert Nights", subtitle: "WETALKSOUND" },
        { image: EventItemImage, title: "Insert Nights", subtitle: "WETALKSOUND" }
    ];

    return (

        <ComponentHolder

            className='page-zero no-border page-agency-section-three'

            bodyClass='page-zero-content'>

            <div className='page-agency-section-three-content-body'>

                <h1 className='page-agency-section-three-header page-events-section-two-header'> Upcoming Events </h1>

                <div className='page-zero-section-four-blog'>

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

