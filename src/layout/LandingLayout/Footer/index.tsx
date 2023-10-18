import React from 'react';
import { ViewFormatter } from 'components';
import { LandingFooterServices } from 'constants/index';
import LandingLayoutFooterCr from '../LandingLayoutFooterCr';
import { classnames } from 'utils';

const LandingLayoutFooter: React.FC<{ footerClass?: string; footerId?: string }> = ({ footerClass, footerId }) => {
  return (
    <div {...(footerId ? { id: footerId } : {})} className={classnames('landingLayout-footer footer', footerClass)}>
      <div className="landingLayout-footer-holder">
        <div className="landingLayout-footer-holder-tabs">
          {LandingFooterServices.map((item, index) => (
            <div className="landingLayout-footer-tab landingLayout-footer-tab-contact" key={`footer-contact-${index}`}>
              <ViewFormatter {...item} />
            </div>
          ))}
        </div>

        <LandingLayoutFooterCr />
      </div>
    </div>
  );
};

export default LandingLayoutFooter;
