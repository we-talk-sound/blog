import React, { useState } from 'react';
import { Header } from './header';
import { HtmlHead } from 'components/Head';
import { classnames } from 'utils';
import LandingLayoutFooter from './Footer';
import { routeType } from 'types';
import { LayoutLoader } from './LayoutLoader';
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
    activePath,
    withFrame,
    ...props
}) => {

    const initialLoaderDisplay = (store.getState()?.route as routeType)?.visitationTrack?.length === 0;

    const [showLoader, setShowLoader] = useState({

        display: initialLoaderDisplay,

        key: initialLoaderDisplay ? "landing-layout-body" : "landing-layout-body-rerender"

    });

    return (
        <>

            <HtmlHead
                title={headTitle}
            />

            <div className='body-background' />

            {showLoader.display &&

                <LayoutLoader

                    removeLoader={() => setShowLoader({

                        display: false,

                        key: "landing-layout-body-rerender"

                    })}

                />

            }

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
                        active={activePath}
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
    bodyClass?: string,
    footerId?: string,
    activePath?: string
}

