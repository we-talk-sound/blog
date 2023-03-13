import React, { useEffect, useState } from 'react';
import { ComponentHolder, GradientCircle, MissionCircle, MissionInnerCircle } from 'components';
import { Header } from 'layout/LandingLayout/header';
import { classnames } from 'utils';

export const SectionOneRevamp: React.FC<Props> = ({

    isMobile,

    deviceWidth,

    className

}) => {

    const [hasFontLoaded, setHasFontLoaded] = useState(false);

    useEffect(() => {

        if (document) {

            // are you even looking for user-agent
            // console.log(navigator.userAgent);

            document.fonts.ready.then(()=> {

                setHasFontLoaded(true);

            });

        }

        // eslint-disable-next-line
    }, [window === undefined]);

    return (

        <ComponentHolder

            className={classnames('page-zero page-zero-revamp-hero no-border', className)}

            bodyClass='page-zero-content'>

            <Header withFrame={true} isMobile={isMobile} deviceWidth={deviceWidth} />

            <div className='page-zero-revamp-content'>

                <h1>

                    We are a

                    <span>

                        <h1 className={classnames(hasFontLoaded ? 'invincible-text' : "pre-visible-text")}> 360 </h1>

                        {hasFontLoaded &&

                            <>

                                <div className='visible-text-block'>

                                    <h1 className='visible-text'> 360  </h1>

                                </div>

                                <span className='bubble' dangerouslySetInnerHTML={{ __html: GradientCircle }} />

                            </>

                        }

                    </span>

                    creative company leveraging technology, community & content to design delightful experiences.

                </h1>

                <div className='page-zero-revamp-bottom'>

                    <p> SCROLL FOR MORE </p>

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
