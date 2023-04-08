import React from 'react';
import { LandingLayout } from 'layout';
import { NewsLetter } from 'common/NewsLetter';
import { CreativeSectionOne } from 'common/Creative';
import { CreativeSectionThree } from 'common/Creative/CreativeSectionThree';
import { CreativeSectionFour } from 'common/Creative/CreativeSectionFour';

const Home: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <LandingLayout
            headTitle={"WETALKSOUND | CREATIVE AGENCY"}
            isMobile={isMobile}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={false}

        >

            <CreativeSectionOne isMobile={isMobile} deviceWidth={deviceWidth} />

            <CreativeSectionThree withHeader={true} isMobile={isMobile} />

            <CreativeSectionFour />

            <NewsLetter />

        </LandingLayout >

    )
}

export default Home;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
