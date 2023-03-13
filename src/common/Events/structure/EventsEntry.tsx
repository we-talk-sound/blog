import React from 'react';
import { NewsLetter } from 'common/NewsLetter';
import { PreviousEvents } from 'common/Events/PreviousEvents';
import { EventsBanner } from '../EventsBanner';
import { PartneredEvents } from '../PartneredEvents';

export const EventsEntry: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const eventHeroText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiaum lorem. 
    Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.`;

    return (

        <>

            <EventsBanner

                isMobile={isMobile}

                deviceWidth={deviceWidth}

                className={"page-events"}

                title={"Our Events"}

                text={eventHeroText}

                controls={{

                    navSwitcher: true,

                    dotSwitcher: true,

                    button: {

                        display: false,
                    
                        title: ""

                    },

                }}

            />

            <PreviousEvents />

            <PartneredEvents />

            <NewsLetter />

        </ >

    )
}

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
