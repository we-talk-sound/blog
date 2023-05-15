import React from 'react';
import { ComponentHolder, EventItem } from 'components';

export const LatestReleases: React.FC = ({ }) => {

    const data = [

        {

            image: "assets/releases/show-me-something.png",

            title: "Show Me Something",

            subtitle: "KAEY, VADERTHEWILDCARD & PDSTRN",

            externalLink: "https://onerpm.link/sms"

        },

        { 
            
            image: "assets/releases/ikogosi.png", 
            
            title: "IKOGOSI", 
            
            subtitle: "Rindss & Vader the wildcard",
        
            externalLink: "http://onerpm.lnk.to/Ikogosi"

        },
        
        { 
            
            image: "assets/releases/lofin-again.png", 
            
            title: "LOFN IV", 
            
            subtitle: "WETALKSOUND",
        
            externalLink: "https://onerpm.lnk.to/LOFN4"

        },
        
        { 
            
            image: "assets/releases/lagos-in.png", 
            
            title: "TO BE FRANK (EP)", 
            
            subtitle: "Vader The Wildcard" , 
            
            externalLink: "http://onerpm.lnk.to/ToBeFrank"
        
        },
        
        { 
            
            image: "assets/releases/lagos-december.png", 
            
            title: "LAGOS IN DCMBR", 
            
            subtitle: "Vader The Wildcard & TGM", 
            
            externalLink: " http://fanlink.to/LagosInDCMBR " 
        
        },
        
        { 
            
            image: "assets/releases/lagos.png", 
            
            title: "LAGOS IN JULY (EP)", 
            
            subtitle: "Vader The Wildcard & TGM", 
            
            externalLink: "https://on.soundcloud.com/WME8d" 
        
        },
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

                            button={{ externalLink: item.externalLink }}

                            key={`event-${index}`}

                            {...item}

                        />

                    )}

                </div>

            </div>

        </ComponentHolder >

    );
}

