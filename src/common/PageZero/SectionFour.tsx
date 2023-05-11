import React from 'react';
import { ComponentHolder } from 'components';
import { ExpandedButton } from 'components/ExpandButton';
import { ProjectItem } from 'components/Project/ProjectItem';
import { Marquee } from 'components/Marquee';
import { ProjectItemMobile } from 'components/Project/ProjectItemMobile';

export const SectionFour: React.FC<Props> = ({ isMobile }) => {

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
            successful singles ‘Body & Soul’, ‘Duffel Bag’ and album ‘Body & Soul'`

        },

        {

            image: "/assets/projects/victoni.png",

            text: "Victony",

            bigText: "Developed and executed an amplification campaign to promote ‘Soweto’ remixes as well as drive conversations on Victony."

        },

        {

            image: "/assets/projects/bolt.png",

            text: "Bolt",

            bigText: `Designed and developed microsites for various "Bolt" campaigns, 
                      including "Bolt Chews Wisely", "#GratefulForEveryMile", "#smarterwithbolt", and "#MYPVCJOURNEY"`

        }

    ];

    return (

        <ComponentHolder

            bodyClass='no-border page-zero-section-four'

            id={"projects-section"}>

            <Marquee text='Projects' />

            <div className='page-zero-section-four-body'>

                {!isMobile &&

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

                }

                {isMobile && <ProjectItemMobile projectItems={data} />}

                <ExpandedButton

                    label='See all our projects'

                    textClass='color-white'

                    link="/creative?entry=projects"

                />

            </div>

        </ComponentHolder >

    );
}

interface Props {

    isMobile: boolean

}
