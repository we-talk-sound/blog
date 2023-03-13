import { ExpandedButton } from 'components/ExpandButton';
import React from 'react';

export const EventsBannerRightContent: React.FC<Props> = ({ }) => {

    const TimeItem: React.FC<{ digit: string, title: string }> = ({ digit, title }) => (

        <div className='events-banner-right-time-item'>

            <h1> {digit} </h1>

            <p> {title} </p>

        </div>

    );

    return (

        <div className='events-banner-right'>

            <div className='events-banner-right-time'>

                <TimeItem

                    digit={"40"}

                    title={"DAYS"}

                />

                <TimeItem

                    digit={"22"}

                    title={"HOURS"}

                />

                <TimeItem

                    digit={"45"}

                    title={"MINUTES"}

                />

                <TimeItem

                    digit={"22"}

                    title={"SECONDS"}

                />


            </div>

            <ExpandedButton label='RSVP HERE' />


        </div>

    );
}

interface Props { }
