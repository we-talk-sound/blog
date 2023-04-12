import React from 'react';
import { ComponentHolder } from 'components';
import { ProjectItem } from 'components/Project/ProjectItem';
import { ProjectItemMobile } from 'components/Project/ProjectItemMobile';

export const CreativeSectionThree: React.FC<{ withHeader?: boolean, isMobile: boolean }> = ({ withHeader, isMobile }) => {

    const data = [

        {

            image: "/assets/projects/joe-boy.png",

            text: "Joeboy",

            bigText: `Developed a campaign to consolidate his efforts at establishing a fanbase in the Nigerian market by securing 
            placements on key media platforms and harnessing PR opportunities.`

        },

        {
            image: "/assets/projects/reminisce.png",

            text: "Reminisce",

            bigText: `Developed the social media & promotional campaign for his 'Vibes & Insha Allah' EP. 
            Helped Reminisce achieve penetration into the millennial and gen-z demographic of music consumers.`

        },

        {

            image: "/assets/projects/d-smoke.png",

            text: "D-SMOKE",

            bigText: `Developed a campaign to consolidate his efforts at establishing a fanbase in the Nigerian market 
            by securing placements on key media platforms and harnessing PR opportunities.`

        },

        {

            image: "/assets/projects/ria-sean.png",

            text: "RIA SEAN",

            bigText: `Developed a campaign to consolidate his efforts at establishing a fanbase in the 
            Nigerian market by securing placements on key media platforms and harnessing PR opportunities.`

        },

        {

            image: "/assets/projects/teni.png",

            text: "Teni",

            bigText: `Developed a game based on the concept of "Who Wants to Be a Billionaire" 
            and launched a fan engagement campaign to promote Teni's "Billionaire" single.`

        },

        {

            image: "/assets/projects/sdc.png",

            text: "SDC",

            bigText: `Developed and executed a social media and promotional campaign to amplify the release of the 'Clone Wars 4' music album `

        },

        {

            image: "/assets/projects/bolt.png",

            text: "Bolt",

            bigText: `Designed and developed microsites for various "Bolt" campaigns, including "Bolt Chews Wisely", "#GratefulForEveryMile", 
            "#smarterwithbolt", and "#MYPVCJOURNEY"`

        },

        {

            image: "/assets/projects/basket.png",

            text: "Basketmouth",

            bigText: `Developed and executed a social media and promotional campaign to amplify the release of the 'Horoscope' music album.`

        },

        {

            image: "/assets/projects/juju-boy.png",

            text: "Jujuboy",

            bigText: `Developed a comprehensive campaign strategy and provided PR services. Helped with Jujuboy Announcement Rollout.`

        },

        {

            image: "/assets/projects/aristokrat.png",

            text: "Aristokrat Records",

            bigText: `Created a voting site for Aritokrat's "In Harmony Challenge" Season 1.`

        },

        {

            image: "/assets/projects/dice.png",

            text: "Dice Ailes",

            bigText: `The Money Mob web development and "Money Dance" single roll out `

        },


        {

            image: "/assets/projects/timaya.png",

            text: "Timaya",

            bigText: `Developed and executed a social media and promotional campaign to amplify the release of the 'Gratitude' music album.`

        },

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

                                <ProjectItem {...data[8]} />

                                <ProjectItem {...data[9]} />

                            </div>

                            <div className='page-zero-section-four-projects-block'>

                                <ProjectItem {...data[10]} />

                                <ProjectItem {...data[11]} />

                            </div>

                        </div>

                    </>

                }

                {isMobile && <ProjectItemMobile projectItems={[data[0], data[1] , data[2], data[3]]} />}

                {isMobile && <ProjectItemMobile projectItems={[data[4], data[5] , data[6], data[7]]} />}

                {isMobile && <ProjectItemMobile projectItems={[data[8], data[9] , data[10], data[11]]} />}

            </div>

        </ComponentHolder >

    );
}

