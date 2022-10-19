import React from 'react';
import { ComponentHolder } from 'components';
import EventItemImage from "assets/png/landing/event-section/event-expanded-image.png";

export const EventSectionExpanded: React.FC = ({ }) => {

    const eventText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Leo quam mauris etiam aliquet nisl porttitor amet malesuada at. Odio enim posuere vivamus id. 
                        Et nec, aliquet augue mattis massa pellentesque aliquet arcu enim. Mattis eget mi lectus vitae malesuada morbi amet. 
                        Pharetra, nisi aenean quis id turpis non pulvinar tellus aliquet. Sit est, in sit suspendisse ipsum ullamcorper eget. 
                        Integer at nec elit sit amet vestibulum enim non. Id sit adipiscing eleifend facilisis in. Consequat amet mauris ornare 
                        malesuada eu. Faucibus leo tellus congue et, nulla malesuada.`;

    return (

        <ComponentHolder

            className='no-border page-events-expanded-body'

            bodyClass='page-zero-content'>

            <div className='page-events-expanded-body-content'>

                <p className='page-events-expanded-body-content-text'>

                    {eventText}

                </p>

                <img src={EventItemImage} alt={"event"} />

            </div>

        </ComponentHolder >

    );
}
