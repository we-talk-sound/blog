import React from 'react';
import { LandingLayout } from 'layout';
import { useRouter } from 'next/router';
import { LabelsExpanded } from 'common/Labels/expanded/LabelsExpanded';
import { BaseLabels } from 'common/Labels/base/BaseLabels';

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

            {!slug && <BaseLabels

                isMobile={isMobile}

                deviceWidth={deviceWidth}

                activePath={"/labels"}

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
