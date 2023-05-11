import React from 'react';
import { ComponentHolder, ViewFormatter } from 'components';
import { Header } from 'layout/LandingLayout/header';

export const CreativeSectionOne: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <ComponentHolder

            className='page-zero no-border page-agency'

            style={{ backgroundImage: `url(assets/background/new-creative.png)` }}

            bodyClass='page-agency-caption'>

            <Header

                withFrame={true}

                isMobile={isMobile}

                deviceWidth={deviceWidth}

                active={"/creative"}

            />

            <div className='page-agency-flex'>

                <ViewFormatter

                    title={'The Creative Agency'}

                    value={`
                    Tapping into our pool of expertise across design, strategy, media and technology, 
                    we work with clients in various industries to achieve their marketing and brand 
                    goals.`}

                />

                <div

                    className='page-agency-flex-image'

                >

                    <div

                        style={{ backgroundImage: "url(assets/background/creative-agency-frame.png)" }}

                    />

                </div>

            </div>


        </ComponentHolder >

    );
}

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
