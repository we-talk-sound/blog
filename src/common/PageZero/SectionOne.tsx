import React from 'react';
import { ComponentHolder } from 'components';
import { Header } from 'layout/LandingLayout/header';
import { ExpandedButton } from 'components/ExpandButton';

export const SectionOne: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <ComponentHolder

            className='page-zero no-border'

            bodyClass='page-zero-content'>

            <Header withFrame={true} isMobile={isMobile} deviceWidth={deviceWidth} />

            <div className='page-zero-caption'>

                <h1 className='color-white'>

                    Elevate your

                    <span className='color-primary'> career </span>

                </h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiaum lorem.
                    Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>

            </div>

            <div className='page-zero-navigation'>

                <ExpandedButton />

                <ExpandedButton />

            </div>

            <div className='page-zero-progression'>

                <span />

                <span className='page-zero-progression-active' />

                <span />

                <span />

            </div>

        </ComponentHolder >

    );
}

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
