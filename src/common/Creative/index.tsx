import React from 'react';
import { ComponentHolder, ViewFormatter } from 'components';
import { Header } from 'layout/LandingLayout/header';

export const CreativeSectionOne: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <ComponentHolder

            className='page-zero no-border page-agency'

            bodyClass='page-zero-content'>

            <Header withFrame={true} isMobile={isMobile} deviceWidth={deviceWidth} />

            <ViewFormatter 
            
                title={'THE CREATIVE AGENCY'}
                
                value={"Welcome to WeTalkSound."}
                
                extraValue={"We are Nigeria's biggest music community. With over a thousand creative members spanning across the country."}
                
            />

        </ComponentHolder >

    );
}

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
