import React from 'react';
import { ComponentHolder, EventItem } from 'components';

export const Discography: React.FC = ({}) => {

    const data = [
        { image: "assets/releases/lofin4.png", title: "LOFN IV", subtitle: "WETALKSOUND" },
        { image: "assets/releases/ikogosi.png", title: "IKOGOSI", subtitle: "WETALKSOUND" },
        { image: "assets/releases/lagos-december.png", title: "LAGOS IN DCMBR", subtitle: "WETALKSOUND" },
        { image: "assets/releases/lofin-again.png", title: "LOFN IV", subtitle: "WETALKSOUND" },
        { image: "assets/releases/lagos.png", title: "LAGOS IN JULY (EP)", subtitle: "Vader The Wildcard & TGM" },
        { image: "assets/releases/lagos-in.png", title: "TO BE FRANK (EP)", subtitle: "WETALKSOUND" }
    ];

    return (

        <ComponentHolder

            className='page-zero no-border discography-block'

            bodyClass='page-zero-content'>

            <div className='page-agency-section-three-content-body'>

                <h1 className='page-agency-section-three-header page-events-section-two-header'> Discography </h1>

                <div className='discography-block-slider'>

                    {data.map((item, index) =>

                        <EventItem

                            className="discography-item"

                            key={`event-${index}`}

                            {...item}

                        />

                    )}

                </div>

            </div>




        </ComponentHolder >

    );
}

