import React from 'react';
import Link from 'next/link';
import { rightLinks } from 'constants/index';
import WeTalkSound from 'assets/logo/wts_white.png';
import { classnames } from 'utils';


export const FullHeader: React.FC<Props> = ({ withFrame }): JSX.Element => {

    return (

        <div className={classnames( withFrame && 'landingLayout-header-frame')}>

            <div
                className={classnames('landingLayout-header', 'with-shades')}>

                <div className="landingLayout-header-holder">

                    <div className="landingLayout-header-left">

                        <Link href={"/"}>
                            <a>
                                <img src={WeTalkSound} alt={"We Talk Sound"} />
                            </a>
                        </Link>

                    </div>



                    <div className="landingLayout-header-right">

                        {rightLinks.map((item, index) =>
                            <Link
                                key={`landingLayout-header-right-item-${index}`}
                                href={item.link || ""}>
                                <a className={item.class}>
                                    {item.title}
                                </a>
                            </Link>

                        )}

                    </div>


                </div>

            </div>

        </div>
    );
}

interface Props { 
    withFrame?: boolean
}
