import React, { FunctionComponent } from 'react';
import Twitter from 'assets/svg/social/twitter.svg';
import Instagram from 'assets/svg/social/instagram.svg';
import LinkedIn from 'assets/svg/social/linkedin.svg';
import TikTok from 'assets/svg/social/tiktok.svg';
import { FooterIconSet } from 'components';

const LandingLayoutFooterCr: FunctionComponent = () => {

    return (
        <div className="landingLayout-footer-cr footer">

            <div className="landingLayout-footer-cr-holder">

                <p> © {new Date().getFullYear()} Wetalksound. </p>

                <FooterIconSet icons={[ LinkedIn , Instagram, TikTok , Twitter]} />


            </div>

        </div>
    );
}

export default LandingLayoutFooterCr;