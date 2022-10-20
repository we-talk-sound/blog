import React from 'react';
import { ComponentHolder, EventItem } from 'components';
import ArtistOne from "assets/png/landing/artists/artist-one.png";
import ArtistTwo from "assets/png/landing/artists/artist-two.png";
import ArtistThree from "assets/png/landing/artists/artist-three.png";
import ArtistFour from "assets/png/landing/artists/artist-four.png";
import ArtistFive from "assets/png/landing/artists/artist-five.png";
import ArtistSix from "assets/png/landing/artists/artist-six.png";
import ArtistSeven from "assets/png/landing/artists/artist-seven.png";
import ArtistEight from "assets/png/landing/artists/artist-eight.png";
import ArtistNine from "assets/png/landing/artists/artist-nine.png";
import ArtistTen from "assets/png/landing/artists/artist-ten.png";
import ArtistEleven from "assets/png/landing/artists/artist-eleven.png";
import ArtistTwelve from "assets/png/landing/artists/artist-twelve.png";

export const Artists:React.FC<Props> = ({ title }) => {

    const data = [
        { image: ArtistOne, title: "Vader" },
        { image: ArtistTwo, title: "Deziire" },
        { image: ArtistThree, title: "RINDSS" },
        { image: ArtistFour, title: "PDSTRN" },
        { image: ArtistFive, title: "Meji" },
        { image: ArtistSix, title: "Kemena" },
        { image: ArtistSeven, title: "Jola Bello" },
        { image: ArtistEight, title: "Samvsthekids" },
        { image: ArtistNine, title: "Viveeyan" },
        { image: ArtistTen, title: "Ignis Brothers" },
        { image: ArtistEleven, title: "Ihcego" },
        { image: ArtistTwelve, title: "Naya Akanji" },
    ];

    return (

        <ComponentHolder

            className='page-zero no-border discography-block artists-block'>

            <div className='page-agency-section-three-content-body'>

                <h2 className='artists-block-header'> { title || "Similar Artists"} </h2>

                <div className='discography-block-slider'>

                    {data.map((item, index) =>

                        <EventItem

                            className="artist-item"

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
