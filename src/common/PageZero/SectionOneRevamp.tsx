import React from 'react';
import { ComponentHolder, MissionCircle, MissionInnerCircle } from 'components';
import { Header } from 'layout/LandingLayout/header';
import { classnames } from 'utils';

export const SectionOneRevamp: React.FC<Props> = ({

    isMobile,

    deviceWidth,

    className

}) => {

    return (

        <ComponentHolder

            className={classnames('page-zero page-zero-revamp-hero no-border', className)}

            bodyClass='page-zero-content'>

            <Header withFrame={true} isMobile={isMobile} deviceWidth={deviceWidth} />

            <div className='page-zero-revamp-content'>

                <div className='page-zero-revamp-top'>

                    <h1> Elevate Your Brand </h1>

                    <p> We are a  360  creative company leveraging
                        <span> technology, community </span> &
                        <span> content </span> to design delightful experiences.
                    </p>

                </div>

                <div className='page-zero-revamp-bottom'>

                    <div className='page-zero-revamp-bottom-circle'>

                        <span dangerouslySetInnerHTML={{ __html: MissionCircle }} />

                        <span dangerouslySetInnerHTML={{ __html: MissionInnerCircle }} />

                    </div>

                </div>

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
