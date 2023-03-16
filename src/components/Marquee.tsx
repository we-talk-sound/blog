import React from 'react';
import { Ellipse } from "components";

export const Marquee: React.FC<Props> = ({ text }) => {

    const MarqueeItem = () => <span>

        <span> {text} </span>

        <span dangerouslySetInnerHTML={{ __html: Ellipse }} />

    </span>;

    return (

        <div className='marquee-holder'>

            <div
                className='marquee'>

                <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem />

                <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem />

                <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem />

                <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem />

                <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem />

                <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem />

            </div>

        </div>

    );
}

interface Props {
    text: string
}
