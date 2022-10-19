import React from 'react';
import { LandingLayout } from 'layout';
import { useRouter } from 'next/router';
import { LabelsExpanded } from 'common/Labels/expanded/LabelsExpanded';

const Labels: React.FC<Props> = ({ isMobile, deviceWidth }) => {

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

            {!slug && <React.Fragment

                // isMobile={isMobile}

                // deviceWidth={deviceWidth}

            />}

            {slug &&

                <LabelsExpanded

                    isMobile={isMobile}

                    deviceWidth={deviceWidth}

                />

            }


        </LandingLayout >

    )
}

export default Labels;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
