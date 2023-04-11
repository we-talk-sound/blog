import React from 'react';
import { ComponentHolder, EventItem } from 'components';

export const LatestReleases: React.FC = ({ }) => {

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

            className='no-border discography-block'

            bodyClass='page-zero-content'>

            <div className='page-agency-section-three-content-body'>

                <h2 className='artists-block-header pl-0 mb-5 pb-5'> Latest Releases </h2>

                <div className='latest-releases-block'>

                    {data.map((item, index) =>

                        <EventItem

                            className="discography-item latest-release-item"

                            key={`event-${index}`}

                            {...item}

                        />

                    )}

                </div>

            </div>




        </ComponentHolder >

    );
}

