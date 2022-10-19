import React from 'react';
import { LandingLayout } from 'layout';
import { EventsEntry } from 'common/Events/structure/EventsEntry';
import { useRouter } from 'next/router';
import { ExpandedEvent } from 'common/Events/structure/ExpandedEvent';

const Home: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const router = useRouter();

    const { slug } = router.query;

    return (

        <LandingLayout
            headTitle={"WETALKSOUND | EVENTS"}
            isMobile={isMobile}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={false}

        >

            {!slug && <EventsEntry

                isMobile={isMobile}

                deviceWidth={deviceWidth}

            />}

            {slug &&

                <ExpandedEvent

                    isMobile={isMobile}

                    deviceWidth={deviceWidth}

                />

            }


        </LandingLayout >

    )
}

export default Home;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
