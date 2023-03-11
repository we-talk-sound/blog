import React from 'react';
import { ComponentHolder, ViewFormatter } from 'components';
import { Header } from 'layout/LandingLayout/header';

export const CreativeSectionOne: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <ComponentHolder

            className='page-zero no-border page-agency'

            bodyClass='page-agency-caption'>

            <Header withFrame={true} isMobile={isMobile} deviceWidth={deviceWidth} />

            <div className='page-agency-flex'>

                <ViewFormatter

                    title={'THE CREATIVE AGENCY'}

                    value={`
                We help create new brands from scratch as well as re-position existing brands to reach new audiences. 
                With a combination of design, illustrations, animations, photography, videography and other visual elements, 
                we develop concepts into aesthetically pleasing assets and elements that can be used digitally and physically.
                `}

                />

                <div className='page-agency-flex-image'>

                    <img src="assets/background/creative-agency-frame.png" alt={"creative-agency"} />

                </div>

            </div>



        </ComponentHolder >

    );
}

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
