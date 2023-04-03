import React, { useEffect, useState } from 'react';
import WtsSoundGlow from 'assets/logo/wts_glow.svg';

export const LayoutLoader: React.FC<Props> = ({ removeLoader }) => {

    const [state, setState] = useState<{

        completion: boolean,

        font: boolean,

        proceed: boolean

    }>({

        completion: false,

        font: false,

        proceed: false

    });

    const updateValue = () => {

        setState((prevState) => {

            if (prevState.completion && prevState.font) {

                return { completion: true, font: true, proceed: true };

            };

            if (!prevState.completion) {

                return { ...prevState, completion: true };

            };

            return { ...prevState, completion: false };

        })

    }

    useEffect(() => {

        if (document) {

            document.fonts.onloadingdone = () =>  setState((prevState)=> ({ ...prevState , font : true }));

        }

        // eslint-disable-next-line
    }, [window === undefined]);

    useEffect(() => {

        const continuousEvent = setInterval(() => updateValue(), 3000);

        return (() => {

            clearInterval(continuousEvent);

        });

    }, []);

    useEffect(() => {

        if (state.completion === true && state.font) {

            removeLoader();

        }

        // eslint-disable-next-line
    }, [state.completion]);

    return (

        <>

            {(!state.completion || !state.font || !state.proceed) &&

                <div className='landingLayout-loader'>

                    <div className='landingLayout-loader-body'>

                        <div className='landingLayout-loader-body-image'>

                            <img

                                src={WtsSoundGlow}

                                alt={"WETALKSOUND"}

                                className={"landingLayout-loader-image"}

                            />

                            <span />

                        </div>

                    </div>

                </div>

            }
        </>

    );
}

interface Props {

    removeLoader(): void

}
