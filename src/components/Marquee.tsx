import React from 'react';

export const Marquee: React.FC<Props> = ({ text }) => {

    const MarqueeItem = () => <span> {text} </span>;

    return (

        <div
            className='marquee'>

            <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem />

            <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem />

            <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem />

            <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem />

            <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem />

            <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem /> <MarqueeItem />

        </div>

    );
}

interface Props {
    text: string
}
