import React from 'react';
import { SectionOne } from 'common/PageZero/SectionOne';
import { EventSectionExpanded } from '../EventSectionExpanded';

export const ExpandedEvent: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <>

            <SectionOne

                isMobile={isMobile}

                deviceWidth={deviceWidth}

                className={"page-events page-events-expanded"}

                title={"<Insert Nights>"}

                text={"OCT 21, 2022"}

                controls={{

                    navSwitcher: false,

                    dotSwitcher: false,

                    button: {

                        display: false,
                    
                        title: "Register Here"

                    },

                }}

            />

            <EventSectionExpanded />

        </ >

    )
}

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
