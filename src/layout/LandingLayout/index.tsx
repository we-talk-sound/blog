import React from 'react';
import { Header } from './header';
import { HtmlHead } from 'components';
import { classnames } from 'utils';
import LandingLayoutFooter from './Footer';

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
    return (
        <>
            <HtmlHead
                title={headTitle}
            />
            <div className='body-background' />
            <div className={`landingLayout ${className}`}>

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

