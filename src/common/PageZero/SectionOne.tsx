import React from 'react';
import { ComponentHolder } from 'components';
import { Header } from 'layout/LandingLayout/header';
import { ExpandedButton } from 'components/ExpandButton';
import { classnames } from 'utils';

export const SectionOne: React.FC<Props> = ({

    isMobile,

    deviceWidth,

    title,

    text,

    className,

    buttonInfo

}) => {

    return (

        <ComponentHolder

            className={classnames('page-zero no-border', className)}

            bodyClass='page-zero-content'>

            <Header withFrame={true} isMobile={isMobile} deviceWidth={deviceWidth} />

            <div className='page-zero-caption'>

                <h1 className='color-white'>

                    {!title ?

                        <>

                            Elevate your

                            <span className='color-primary'> career </span>

                        </>

                        :

                        title

                    }

                </h1>

                <p>
                    {text || `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiaum lorem.
                    Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.`}
                </p>

                {buttonInfo && <ExpandedButton label={buttonInfo.title} /> }

            </div>

            {!buttonInfo &&

                <div className='page-zero-navigation'>

                    <ExpandedButton />

                    <ExpandedButton />

                </div>

            }

            {!buttonInfo &&

                <div className='page-zero-progression'>

                    <span />

                    <span className='page-zero-progression-active' />

                    <span />

                    <span />

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
    buttonInfo?: {
        title?: string
    }
}
