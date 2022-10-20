import React from 'react';
import { ComponentHolder } from 'components';
import { Header } from 'layout/LandingLayout/header';
import { ExpandedButton } from 'components/ExpandButton';
import { classnames } from 'utils';

export const SectionOne: React.FC<Props> = ({

    dangerousTitle,

    isMobile,

    deviceWidth,

    title,

    text,

    className,

    controls

}) => {

    return (

        <ComponentHolder

            className={classnames('page-zero no-border', className)}

            bodyClass='page-zero-content'>

            <Header withFrame={true} isMobile={isMobile} deviceWidth={deviceWidth} />

            <div className='page-zero-caption'>

                {dangerousTitle &&

                    <h1 className='color-white' dangerouslySetInnerHTML={{ __html: dangerousTitle }} />

                }

                {!dangerousTitle &&

                    <h1 className='color-white'>

                        {!title ?

                            <>

                                Elevate your

                                <span className='color-primary'> career </span>

                            </>

                            :

                            title

                        }

                    </h1>}

                <p>
                    {text || `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiaum lorem.
                    Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.`}
                </p>

                {
                    controls?.button &&
                    controls?.button?.title &&

                    <ExpandedButton

                        label={controls?.button?.title}

                    />

                }

            </div>

            {(controls?.navSwitcher || controls?.navSwitcher) &&

                <div className='page-zero-switcher-holder'>

                    {controls?.navSwitcher &&

                        <div className='page-zero-navigation'>

                            <ExpandedButton />

                            <ExpandedButton />

                        </div>

                    }

                    {controls?.dotSwitcher &&

                        <div className='page-zero-progression'>

                            <span />

                            <span className='page-zero-progression-active' />

                            <span />

                            <span />

                        </div>
                    }

                </div>

            }

        </ComponentHolder >

    );
}

interface Props {
    isMobile: boolean,
    deviceWidth: number,
    title?: string,
    text?: string,
    className?: string,
    dangerousTitle?: any,
    controls?: {

        navSwitcher: boolean,

        dotSwitcher: boolean,

        button: {

            display: boolean

            title: string

        },

    }
}
