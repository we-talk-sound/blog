import React, { useState } from 'react';
import { Header } from './header';
import { HtmlHead } from 'components';
import { classnames } from 'utils';
import LandingLayoutFooter from './Footer';
import { routeType } from 'types';
// import { LayoutLoader } from './LayoutLoader';
import { store } from 'redux/store';

export const LandingLayout: React.FC<Props> = ({
    headTitle,
    isMobile,
    footerId,
    footerClass,
    deviceWidth,
    showFooter = true,
    showHeader = false,
    className = "",
    bodyClass,
    bodyAlignment,
    withFrame,
    ...props
}) => {

    const [showLoader, ] = useState({

        display: (store.getState()?.route as routeType)?.visitationTrack?.length === 0,

        key: "landing-layout-body"

    });

    return (
        <>
            <HtmlHead
                title={headTitle}
            />

            <div className='body-background' />

            {/* {showLoader.display &&

                <LayoutLoader

                    removeLoader={() => setShowLoader({

                        display: false,

                        key: "landing-layout-body-rerender"

                    })}

                />

            } */}

            <div

                className={classnames('landingLayout', className)}

                key={showLoader.key}

            >

                {
                    showHeader &&

                    <Header
                        isMobile={isMobile}
                        withFrame={withFrame}
                        deviceWidth={deviceWidth}
                    />
                    
                }

                <div
                    className={classnames("landingLayout-body", bodyAlignment === false && "default", bodyClass && bodyClass)}
                    id={"landing-layout-body"}
                >
                    {props.children}

                    {showFooter &&

                        <LandingLayoutFooter

                            footerId={footerId}

                            footerClass={footerClass}

                        />

                    }

                </div>

            </div>
        </>
    );
}

interface Props {
    headTitle: string,
    isMobile: boolean,
    deviceWidth: number,
    shadyHeader?: boolean,
    className?: string,
    showFooter?: boolean,
    footerClass?: string,
    showHeader?: boolean,
    bodyAlignment?: boolean,
    withFrame?: boolean,
    bodyClass?: string
    footerId?: string
}

