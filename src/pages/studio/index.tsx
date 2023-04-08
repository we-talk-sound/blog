import React from 'react';
import { LandingLayout } from 'layout';
import { StudioCaption } from 'common/Studio/StudioCaption';
import { NewsLetter } from 'common/NewsLetter';
import { StudioInfo } from 'common/Studio/StudioInfo';
import { ContentBlock } from 'common/Studio/ContentBlock';

const Studio: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <LandingLayout
            headTitle={"WETALKSOUND | STUDIO"}
            isMobile={isMobile}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={false}
        >

            <StudioCaption

                isMobile={isMobile}

                deviceWidth={deviceWidth}

            />

            <StudioInfo />

            <ContentBlock />

            <NewsLetter />

        </LandingLayout >

    )
}

export default Studio;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
