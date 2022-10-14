import React from 'react';
import { FullHeader } from './FullHeader';
import { MobileHeader } from './MobileHeader';

export const Header: React.FC<Props> = ({ isMobile , withFrame }): JSX.Element => {

    return (
        <>

            {(isMobile) ?
                <MobileHeader /> :
                <FullHeader withFrame={withFrame} />
            }

        </>
    )
}
interface Props {
    isMobile: boolean,
    deviceWidth: number,
    withFrame?: boolean
}
