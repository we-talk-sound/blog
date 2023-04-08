import React from 'react';
import { ComponentHolder } from 'components';
import { Header } from 'layout/LandingLayout/header';
import { classnames } from 'utils';

export const StudioCaption: React.FC<Props> = ({

    isMobile,

    deviceWidth,

    className

}) => {

    return (

        <ComponentHolder

            className={classnames('page-zero no-border studio-caption', className)}

            bodyClass='page-zero-content'>

            <Header withFrame={true} isMobile={isMobile} deviceWidth={deviceWidth} active="/studio" />

            <div className='studio-caption-video'>

                <div className='studio-caption-video-top'/>

                <iframe src="https://www.youtube.com/embed/F9yn3S_HZ4w?autoplay=1&mute=1&controls=0&loop=1" id="player"> </iframe>

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
}
