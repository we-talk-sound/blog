import React from 'react';
import { SectionOne } from 'common/PageZero/SectionOne';
import { LabelsExpandedContent } from './LabelsExpandedContent';
import { Discography } from '../Discography';
import { Playlists } from '../Playlists';

export const LabelsExpanded: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <>

            <SectionOne

                isMobile={isMobile}

                deviceWidth={deviceWidth}

                className={"page-events page-events-expanded page-labels-expanded-hero"}

                controls={{

                    navSwitcher: false,

                    dotSwitcher: false,

                    button: {

                        display: false,
                    
                        title: ""

                    },

                }}

                title={"Viveeyan"}

                text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet placerat interdum 
                pellentesque elit. Enim lorem ut duis nisl morbi vitae pellentesque.eget accumsan a a.`}



            />

            <LabelsExpandedContent />

            <Discography />

            <Playlists />

        </ >

    )
}

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
