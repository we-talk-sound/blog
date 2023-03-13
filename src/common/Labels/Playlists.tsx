import React from 'react';
import { ComponentHolder, EventItem } from 'components';

export const Playlists:React.FC<Props> = ({ title }) => {

    const data = [
        { image: "/assets/projects/playlist.png", title: "Naija Afrobeat Jukebox" },
        { image: "/assets/projects/playlist.png", title: "Naija Afrobeat Jukebox" },
        { image: "/assets/projects/playlist.png", title: "Naija Afrobeat Jukebox" },
        { image: "/assets/projects/playlist.png", title: "Naija Afrobeat Jukebox" },
        { image: "/assets/projects/playlist.png", title: "Naija Afrobeat Jukebox" },
        { image: "/assets/projects/playlist.png", title: "Naija Afrobeat Jukebox" },
    ];

    return (

        <ComponentHolder

            className='page-zero no-border playlists-block'>

            <div className='page-agency-section-three-content-body'>

                <h2 className='playlists-block-header'> { title || "Similar Artists"} </h2>

                <div className='playlists-block-slider'>

                    {data.map((item, index) =>

                        <EventItem

                            className="playlists-item"

                            key={`event-${index}`}

                            {...item}

                        />

                    )}

                </div>

            </div>

        </ComponentHolder >

    );
}

interface Props {

    title?: string

}
