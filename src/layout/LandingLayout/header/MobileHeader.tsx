import React, { useState } from 'react';
import { MobileHeaderToggler, FooterIconSet } from 'components';
import { leftLinks, rightLinks } from 'constants/index';
import Twitter from 'assets/svg/social/twitter.svg';
import Instagram from 'assets/svg/social/instagram.svg';
import LinkedIn from 'assets/svg/social/linkedin.svg';
import router from 'next/router';
import { classnames } from 'utils';

export const MobileHeader = ({ }): JSX.Element => {

    const [isExpanded, setIsExpanded] = useState(false);

    const links = [...leftLinks, ...rightLinks];

    return (
        <div className={classnames("landingLayout-header-mobile", isExpanded && "header-expanded")}>

            <MobileHeaderToggler setExpansion={setIsExpanded} isExpanded={isExpanded} />

            <div 
            
                className={`landingLayout-header-mobile-exp ${isExpanded ? "expanded" : ""}`}
                
                style={{ backgroundImage: "url(assets/background/mobile-menu-bg.png)"}}
                
                >

                <MobileHeaderToggler setExpansion={setIsExpanded} isExpanded={isExpanded} />

                <div className="landingLayout-header-mobile-bottom">

                    <div className="landingLayout-header-mobile-links">

                        {links.map((item, index) =>

                            <a
                                href={item.link || ""}
                                key={`landingLayout-header-left-item-${index}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsExpanded(false);
                                    setTimeout(() => router.push(item.link || "/"), 300);
                                }}>
                                {item.title}
                            </a>

                        )}

                    </div>

                    <p className='landingLayout-header-mobile-address'> 16 ABUDU STREER, OSAPA LEKKI, LAGOS NIGERIA  </p>

                    <FooterIconSet icons={[Twitter, Instagram, LinkedIn]} />

                </div>

            </div>

        </div>
    );
}
