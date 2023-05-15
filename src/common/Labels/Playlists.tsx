import React from 'react';
import { ComponentHolder, EventItem } from 'components';
import { ExpandedButton } from 'components/ExpandButton';

export const Playlists: React.FC<Props> = ({ title }) => {

    const data = { image: "/assets/projects/playlist.png", title: "Naija Afrobeat Jukebox" };

    return (

        <ComponentHolder

            className='page-zero no-border playlists-block'>

            <div className='page-agency-section-three-content-body'>

                <h2 className='playlists-block-header'> {title || "Similar Artists"} </h2>

                <div className='playlists-block-slider'>

                    <EventItem

                        className="playlists-item"

                        {...data}

                        button={{ label: "Listen Now" , externalLink: "https://fanlink.to/AfroJukeBox" }}

                    />

                    <ExpandedButton label='Listen Now' dark={true} externalLink="https://fanlink.to/AfroJukeBox" />

                </div>

            </div>

        </ComponentHolder >

    );
}

interface Props {

    title?: string

}
