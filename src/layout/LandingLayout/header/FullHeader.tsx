import React from 'react';
import Link from 'next/link';
import { rightLinks } from 'constants/index';
import WeTalkSound from 'assets/logo/wts_white.svg';
import { classnames } from 'utils';


export const FullHeader: React.FC<Props> = ({ withFrame , active }): JSX.Element => {

    return (

        <div className={classnames(withFrame && 'landingLayout-header-frame')}>

            <div
                className={classnames('landingLayout-header', 'with-shades')}>

                <div className="landingLayout-header-holder">

                    <div className="landingLayout-header-left">

                        <Link href={"/"}>
                            <img src={WeTalkSound} alt={"We Talk Sound"} />
                        </Link>

                    </div>



                    <div className="landingLayout-header-right">

                        {rightLinks.map((item, index) =>
                            <Link
                                className={classnames(item.class , active === item.link && "active")}
                                key={`landingLayout-header-right-item-${index}`}
                                target={item.link?.includes("http") ? "_blank" : "_self"}
                                href={item.link || ""}>

                                {item.title}

                            </Link>

                        )}

                    </div>


                </div>

            </div>

        </div>
    );
}

interface Props {
    withFrame?: boolean,
    active?: string
}
