import React from 'react';
import { EventsDate, EventsLocation, EventsTime } from 'components';

export const EventsBannerLeftContent: React.FC<Props> = ({ }) => {

    const LocationItem: React.FC<{ icon: string, text: string }> = ({ icon, text }) => (

        <div className='events-banner-location-item'>

            <span dangerouslySetInnerHTML={{ __html: icon }} />

            <p> {text} </p>

        </div>

    );

    return (

        <div className='events-banner-left'>

            <p className='events-banner-left-header'> Upcoming Events </p>

            <h2 className='events-banner-left-title'> Insert Nights </h2>

            <div className='events-banner-location'>

                <LocationItem

                    icon={EventsLocation}

                    text={"The Lennox Mall, Admiralty Way, Lekki Phase I 106104, Lagos"}

                />

                <LocationItem

                    icon={EventsDate}

                    text={"3 MAR, 2023"}

                />

                <LocationItem

                    icon={EventsTime}

                    text={"7:00PM"}

                />

            </div>


        </div>

    );
}

interface Props { }
