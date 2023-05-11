import { ExpandedButton } from 'components/ExpandButton';
import React from 'react';

export const EventsBannerRightContent: React.FC<Props> = ({ }) => {

    return (

        <div className='events-banner-right'>

            <ExpandedButton label='RSVP HERE' />

        </div>

    );
}

interface Props { }
