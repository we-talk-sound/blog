import React from 'react';
import { ComponentHolder } from 'components';
import { ExpandedButton } from 'components/ExpandButton';
import { ProjectItem } from 'components/Project/ProjectItem';
import { Marquee } from 'components/Marquee';
import { ProjectItemMobile } from 'components/Project/ProjectItemMobile';

export const SectionFour: React.FC<Props> = ({ isMobile }) => {

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

                {isMobile && <ProjectItemMobile projectItems={data} /> }

                <ExpandedButton label='See all our projects' textClass='color-white' />

            </div>

        </ComponentHolder >

    );
}

interface Props {

    isMobile: boolean

}
