import React from 'react';
import { SectionOne } from 'common/PageZero/SectionOne';
import { Discography } from '../Discography';
import { Artists } from '../Artists';
import { NewsLetter } from 'common/NewsLetter';
import { LatestReleases } from '../LatestReleases';

export const BaseLabels: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <>

            <SectionOne

                isMobile={isMobile}

                deviceWidth={deviceWidth}

                className={"page-labels-base-hero"}

                controls={{

                    navSwitcher: true,

                    dotSwitcher: true,

                    button: {

                        display: true,
                    
                        title: "Listen Now"

                    },

                }}

                dangerousTitle={`<span>  <span class='color-primary'> ‘LOFN IV’  </span>  IS OUT NOW </span>`}

                text={`WETALKSOUND COLLECTIVE`}



            />

            <LatestReleases />

            <Artists title={"WTS Artists"} />

            <NewsLetter />

        </ >

    )
}

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
