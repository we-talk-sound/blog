import React, { useEffect, useState } from 'react';
import { ComponentHolder, FormField } from 'components';
import { ExpandedButton } from 'components/ExpandButton';
import { subscribe } from 'service/subscribe';
import { change, getPredefinedErrors, quickValidation } from 'utils';
import { quickToast } from 'redux/store';

export const NewsLetter = () => {

    const initialState: { [key: string]: any } = {
        email: "",
        error: getPredefinedErrors(["email"]),
        loading: false,
        attempt: 0,
        success: undefined
    };

    const [state, setState] = useState(initialState);

    const onChanged = (e: any, field: string) => {

        e = String(e).trim();

        const validation = quickValidation(field, e, state);

        setState((prevState) => ({ ...prevState, [field]: e, error: validation, success: undefined }));

    }

    const formError = Object.values(state.error || {}).map(item => item).filter((item) => Array.isArray(item)).length > 0;

    const formErrors = Object.values(state.error || {}).map(item => item).filter((item) => Array.isArray(item) ? item[0] : false) as string[];

    const disabled = () => {

        if (state.attempt > 0) return formError;

        return false;

    }

    const subscribeEmail = async () => {

        quickToast({ text: "Please wait ..." });

        change(true, "loading", setState);

        const response: any = await subscribe({
            email: state.email,
        });

        quickToast({

            text: response === true ? "Your email was added successfully" : response,

            actionType: response === true ? "success" : "caution"

        });

        setState((prevState) => ({ ...prevState, success: response, loading: false }));

    };

    const preProcess = () => {

        if (state.success === true) return;

        setState((prevState) => ({ ...prevState, success: undefined, attempt: prevState.attempt + 1 }))

        if (!state?.email || state.loading) return;

        if (formError) {

            quickToast({ text: formErrors[0], actionType: "error" });

            return

        };

        subscribeEmail();
    }

    const keyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            preProcess();
        }
    }

    useEffect(() => {

        if (state.success === true) {

            setTimeout(() => {

                setState(initialState);

            }, 5000);

        }

        // eslint-disable-next-line
    }, [state.success]);

    return (

        <ComponentHolder bodyClass='newsletter'>

            <div className='newsletter-body'>

                <p className='newsletter-header'> NEVER MISS AN UPDATE FROM US </p>

                <div className='newsletter-form-box'>

                    <FormField

                        type='plain'

                        label='Enter your'

                        onKeyDown={keyDown}

                        value={state.email}

                        onChange={(e) => onChanged(e, "email")}

                        placeHolder={"email address"}

                    />

                    <ExpandedButton disabled={disabled()} onClick={() => preProcess()} />

                </div>

                <h1> to sign up for our newsletter </h1>

            </div>

        </ComponentHolder>

    )

}

