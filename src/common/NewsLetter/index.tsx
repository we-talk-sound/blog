import { ComponentHolder, FormField } from 'components';
import { ExpandedButton } from 'components/ExpandButton';
import React from 'react';

export const NewsLetter = () => {

    return (

        <ComponentHolder bodyClass='newsletter'>

            <div className='newsletter-body'>

                <p className='newsletter-header'> NEVER MISS AN UPDATE FROM US </p>

                <div className='newsletter-form-box'>

                    <FormField

                        type='plain'

                        label='Enter your'

                        placeHolder={"email address"}

                    />

                    <ExpandedButton />

                </div>

                <h1> to sign up for our newsletter </h1>

            </div>

        </ComponentHolder>

    )

}

