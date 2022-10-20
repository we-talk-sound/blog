import React from 'react';
import { ComponentHolder, EventItem } from 'components';
import DiscographyOne from "assets/png/landing/discography/discography-image-one.png";
import DiscographyTwo from "assets/png/landing/discography/discography-image-two.png";
import DiscographyThree from "assets/png/landing/discography/discography-image-three.png";
import DiscographyFour from "assets/png/landing/discography/discography-image-four.png";
import DiscographyFive from "assets/png/landing/discography/discography-image-five.png";
import DiscographySix from "assets/png/landing/discography/discography-image-six.png";

export const Discography: React.FC = ({}) => {

    const data = [
        { image: DiscographyOne, title: "LOFN IV", subtitle: "WETALKSOUND" },
        { image: DiscographyTwo, title: "IKOGOSI", subtitle: "WETALKSOUND" },
        { image: DiscographyThree, title: "LAGOS IN DCMBR", subtitle: "WETALKSOUND" },
        { image: DiscographyFour, title: "LOFN IV", subtitle: "WETALKSOUND" },
        { image: DiscographyFive, title: "LAGOS IN JULY (EP)", subtitle: "Vader The Wildcard & TGM" },
        { image: DiscographySix, title: "TO BE FRANK (EP)", subtitle: "WETALKSOUND" }
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

