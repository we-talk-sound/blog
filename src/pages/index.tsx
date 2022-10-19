import React from 'react';
import { LandingLayout } from 'layout';
import { SectionOne } from 'common/PageZero/SectionOne';
import { SectionTwo } from 'common/PageZero/SectionTwo';
import { SectionThree } from 'common/PageZero/SectionThree';
import { SectionFour } from 'common/PageZero/SectionFour';
import { SectionFive } from 'common/PageZero/SectionFive';
import { NewsLetter } from 'common/NewsLetter';

const Home: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <LandingLayout
            headTitle={"WETALKSOUND"}
            isMobile={isMobile}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={false}

        >

            <SectionOne 
                
                isMobile={isMobile} 
                
                deviceWidth={deviceWidth}
                
                controls={{

                    navSwitcher: true,

                    dotSwitcher: true,

                    button: {

                        display: false,
                    
                        title: ""

                    },

                }}
                
            />

            <SectionTwo />

            <SectionThree />

            <SectionFour />

            <SectionFive />

            <NewsLetter />

        </LandingLayout >

    )
}

export default Home;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
