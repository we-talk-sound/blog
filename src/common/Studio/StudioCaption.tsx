import React, { useState } from 'react';
import { Button, ComponentHolder } from 'components';
import { Header } from 'layout/LandingLayout/header';
import { classnames } from 'utils';
import YouTube from 'react-youtube';

export const StudioCaption: React.FC<Props> = ({

    isMobile,

    deviceWidth,

    className

}) => {

    const [controls, setControls] = useState({ unMute: () => null, mute: () => null, isMuted: false, canInteract: false });

    return (

        <ComponentHolder

            className={classnames('page-zero no-border studio-caption', className)}

            bodyClass='page-zero-content'>

            <Header withFrame={true} isMobile={isMobile} deviceWidth={deviceWidth} active="/studio" />

            <div className='studio-caption-video'>

                <div

                    tabIndex={0}

                    role="button"

                    className='studio-caption-video-top'

                    onClick={() => {

                        if (!controls.canInteract) return;

                        setControls((prevState) => ({ ...prevState, isMuted: !controls?.isMuted }))

                        controls?.isMuted ? controls.unMute() : controls.mute();

                    }}

                />

                <YouTube

                    className='studio-caption-video-div'

                    videoId={"F9yn3S_HZ4w"}

                    opts={{ playerVars: { autoplay: 1, controls: 0, loop: 1 } }}

                    onReady={(e) => {

                        e?.target?.mute();

                        e?.target?.playVideo();

                        e?.target?.hideVideoInfo();

                        setControls({ unMute: () => e?.target?.unMute(), mute: () => e?.target?.mute(), isMuted: true, canInteract: true });

                    }}

                />

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
