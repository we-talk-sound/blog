import React, { FunctionComponent } from 'react';
import { FooterLogoField, ViewFormatter } from 'components';
import { FooterAddress, FooterLogo, LandingFooterLinks, LandingFooterServices } from 'constants/index';
import { LinkWrapper } from 'components/LinkWrapper';
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

                <div className='landingLayout-footer-links'>

                    {LandingFooterLinks.map((item, index) =>

                        <LinkWrapper link={item.link} key={`footer-link-${index}`}>


                            <h1> {item.title} </h1>

                        </LinkWrapper>


                    )}

                </div>

                <LandingLayoutFooterCr />

            </div>

        </div>

    );
}

export default LandingLayoutFooter;
