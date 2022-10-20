import React, { FunctionComponent } from 'react';
import { FooterLogoField, ViewFormatter } from 'components';
import { FooterAddress, FooterLogo, LandingFooterServices } from 'constants/index';
import LandingLayoutFooterCr from '../LandingLayoutFooterCr';

const LandingLayoutFooter: FunctionComponent = () => {

    return (

        <div className="landingLayout-footer footer">

            <div className="landingLayout-footer-holder">

                <div className='landingLayout-footer-holder-tabs'>

                    <div className="landingLayout-footer-tab">

                        <FooterLogoField logo={FooterLogo} alt={"stellas"} />

                    </div>

                    <div className="landingLayout-footer-tab">

                        <ViewFormatter {...FooterAddress} wrapperClass={"landingLayout-footer-tab-address"} />

                    </div>

                    {LandingFooterServices.map((item, index) =>

                        <div

                            className="landingLayout-footer-tab landingLayout-footer-tab-contact"

                            key={`footer-contact-${index}`}

                        >

                            <ViewFormatter withButton={true} {...item} />

                        </div>

                    )}

                </div>

                <LandingLayoutFooterCr />

            </div>

        </div>

    );
}

export default LandingLayoutFooter;
