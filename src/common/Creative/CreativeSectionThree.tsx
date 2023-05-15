import React, { useState } from 'react';
import { Button, ComponentHolder } from 'components';
import { ProjectItem } from 'components/Project/ProjectItem';
import { ProjectItemMobile } from 'components/Project/ProjectItemMobile';

export const CreativeSectionThree: React.FC<{ withHeader?: boolean, isMobile: boolean }> = ({ withHeader, isMobile }) => {

    const [showAll, setShowAll] = useState(false);

    const data = [

        {

            image: "/assets/projects/davido.png",

            text: "DMW 2.0",

            bigText: `We handle PR and amplification for the rebranded Davido Music Worldwide label - housing superstar 
                      Davido and signees Logos Olori and Morravey.`

        },

        {

            image: "/assets/projects/joe-boy.png",

            text: "Joeboy",

            bigText: `Developed and executed a holistic marketing campaign for his 2023 run including 
                      successful singles ‘Body & Soul’, ‘Duffel Bag’ and album ‘Body & Soul”`

        },

        {

            image: "/assets/projects/victoni.png",

            text: "Victony",

            bigText: "Developed and executed an amplification campaign to promote ‘Soweto’ remixes as well as drive conversations on Victony."

        },

        {

            image: "/assets/projects/bolt.png",

            text: "Bolt",

            bigText: `Designed and developed microsites for various "Bolt" campaigns, including "Bolt Chews Wisely", "#GratefulForEveryMile", 
            "#smarterwithbolt", and "#MYPVCJOURNEY"`

        },

        {

            image: "/assets/projects/teni.png",

            text: "Teni",

            bigText: `Developed a game based on the concept of "Who Wants to Be a Billionaire" 
            and launched a fan engagement campaign to promote Teni's "Billionaire" single.`

        },

        {
            image: "/assets/projects/reminisce.png",

            text: "Reminisce",

            bigText: `Developed the social media & promotional campaign for his 'Vibes & Insha Allah' EP. 
            Helped Reminisce achieve penetration into the millennial and gen-z demographic of music consumers.`

        },

        {

            image: "/assets/projects/ria-sean.png",

            text: "RIA SEAN",

            bigText: `Developed the campaign that launched her into the Nigerian market. Managed marketing & PR for 
                      her debut EP 'Fluid' that has earned millions of streams. Ria was listed by Spotify as one of 
                    the 'Top 10 emerging artists in 2021`

        },

        {

            image: "/assets/projects/basket.png",

            text: "Basketmouth",

            bigText: `Developed and executed a social media and promotional campaign to amplify the release of the 'Horoscope' music album.`

        },

        {

            image: "/assets/projects/Badboytimz.png",

            text: "Bad Boy Timz",

            bigText: `Developed an executed an amplification campaign to drive conversations about him and promote his single ‘I Salute’ with Zlatan.`

        },

        {

            image: "/assets/projects/cheque.png",

            text: "Cheque",

            bigText: `Developed an executed an amplification campaign to drive conversations about him and his music.`

        },

        {

            image: "/assets/projects/Tempoe.png",

            text: "Tempoe",

            bigText: "Created a logo and visual identity for one of Afrobeats’ biggest producers, who created ‘Love Nwantiti’ and ‘Soweto’"

        },

        {

            image: "/assets/projects/rotimi.png",

            text: "Rotimi",

            bigText: `Developed an executed an amplification campaign to drive conversations about him and his music.`

        }

    ];

    return (

        <ComponentHolder

            className='page-zero no-border page-agency-section-three'

            bodyClass='page-zero-content'

            id='creative-projects'

        >

            <div className='page-agency-section-three-content-body'>

                {withHeader && <h1 className='page-agency-section-three-header'> Our Projects </h1>}

                {!isMobile &&

                    <>

                        <div className='page-zero-section-four-projects'>

                            <div className='page-zero-section-four-projects-block'>

                                <ProjectItem {...data[0]} />

                                <ProjectItem {...data[1]} />

                            </div>

                            <div className='page-zero-section-four-projects-block'>

                                <ProjectItem {...data[2]} />

                                <ProjectItem {...data[3]} />

                            </div>

                        </div>


                        <div className='page-zero-section-four-projects'>

                            <div className='page-zero-section-four-projects-block'>

                                <ProjectItem {...data[4]} />

                                <ProjectItem {...data[5]} />

                            </div>

                            <div className='page-zero-section-four-projects-block'>

                                <ProjectItem {...data[6]} />

                                <ProjectItem {...data[7]} />

                            </div>

                        </div>

                        <div className='page-zero-section-four-projects'>

                            <div className='page-zero-section-four-projects-block'>

                                <ProjectItem {...data[8]} hidden={showAll === false} />

                                <ProjectItem {...data[9]} hidden={showAll === false} />

                            </div>

                            <div className='page-zero-section-four-projects-block'>

                                <ProjectItem {...data[10]} hidden={showAll === false} />

                                <ProjectItem {...data[11]} hidden={showAll === false} />

                            </div>

                        </div>

                    </>

                }

                {isMobile && <ProjectItemMobile projectItems={[data[0], data[1], data[2], data[3]]} />}

                {isMobile && <ProjectItemMobile projectItems={[data[4], data[5], data[6], data[7]]} />}

                {isMobile && <ProjectItemMobile projectItems={[data[8], data[9], data[10], data[11]]} hidden={showAll === false} />}

                <Button

                    className={"no-bg"}

                    label={showAll ? "Show Less" : "Show More"}

                    onClick={() => setShowAll((prevState) => !prevState)}

                />

            </div>

        </ComponentHolder >

    );
}

