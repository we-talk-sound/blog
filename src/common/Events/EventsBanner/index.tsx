import React from 'react';
import { ComponentHolder } from 'components';
import { Header } from 'layout/LandingLayout/header';
import { classnames } from 'utils';
import { EventsBannerLeftContent } from './EventsBannerLeftContent';
import { EventsBannerRightContent } from './EventsBannerRightContent';

export const EventsBanner: React.FC<Props> = ({

    isMobile,

    deviceWidth,

    className,

}) => {

    return (

        <ComponentHolder

            className={classnames('page-zero no-border', className)}

            bodyClass='page-zero-content'>

            <Header withFrame={true} isMobile={isMobile} deviceWidth={deviceWidth} active="/events" />

            <div className='events-banner-body'>

                <EventsBannerLeftContent />

                <EventsBannerRightContent />

            </div>

        </ComponentHolder >

    );
}

interface Props {
    isMobile: boolean,
    deviceWidth: number,
    title?: string,
    text?: string,
    className?: string,
    dangerousTitle?: any,
    controls?: {

        navSwitcher: boolean,

        dotSwitcher: boolean,

        button: {

            display: boolean

            title: string

        },

    }
}
