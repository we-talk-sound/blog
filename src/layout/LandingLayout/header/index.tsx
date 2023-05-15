import React from 'react';
import { FullHeader } from './FullHeader';
import { MobileHeader } from './MobileHeader';

export const Header: React.FC<Props> = ({ isMobile, deviceWidth, withFrame, active }): JSX.Element => {

    return (
        <>

            {(isMobile || deviceWidth < 801) ?
                <MobileHeader /> :
                <FullHeader withFrame={withFrame} active={active} />
            }

        </>
    )
}
interface Props {
    isMobile: boolean,
    deviceWidth: number,
    withFrame?: boolean,
    active?: string
}
