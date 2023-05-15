import React from 'react';
import { SectionOne } from 'common/PageZero/SectionOne';
import { Playlists } from '../Playlists';
import { NewsLetter } from 'common/NewsLetter';
import { LatestReleases } from '../LatestReleases';
import { LabelsVideo } from '../LabelsVideo';

export const BaseLabels: React.FC<Props> = ({ isMobile, deviceWidth , activePath }) => {

    return (

        <>

            <SectionOne

                isMobile={isMobile}

                deviceWidth={deviceWidth}

                activePath={activePath}

                className={"page-labels-base-hero"}

                controls={{

                    button: {

                        display: true,
                    
                        title: "Listen Now",

                        externalLink: "https://onerpm.link/sms"

                    },

                }}

                dangerousTitle={`<span>  <span class='color-primary'> ‘Show Me Something’  </span>  Is out now </span>`}

                text={`KAEY, VADERTHEWILDCARD & PDSTRN`}



            />

            <LatestReleases />

            <Playlists title={"Listen to our Playlists"} />

            <LabelsVideo />

            <NewsLetter />

        </ >

    )
}

interface Props {
    isMobile: boolean,
    deviceWidth: number,
    activePath?: string
}
