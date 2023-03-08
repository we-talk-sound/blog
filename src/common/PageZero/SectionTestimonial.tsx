import React, { useState } from 'react';
import { ComponentHeader, ComponentHolder } from 'components';
import { DotAndNavSwitcher } from './SectionOne';

export const SectionTestimonial: React.FC = () => {

    const [testimonial,] = useState(0);

    const testimonials = [

        {
            image: "assets/background/testimonial.png",
            text: `“Lorem ipsum dolor sit amet consectetur. Tempus scelerisque a morbi vitae at porta. 
                    Nunc habitasse neque pulvinar libero massa ac pellentesque consequat. Orci “`,
            author: "SHOW DEM CAMP, RAP DUO",

        }

    ];

    return (

        <ComponentHolder
            className="no-border"
            bodyClass="page-zero-section-testimonial"
        >

            <ComponentHeader subtitle='WHAT OUR CLIENTS SAY' title='Testimonials' />

            <div className='page-zero-section-testimonial-body'>

                <div className='testimonial-entry'>

                    <div className='testimonial-entry-img'>

                        <img src={testimonials[testimonial].image} alt={"testimonial-image"} />

                    </div>

                    <div className='testimonial-entry-texts'>

                        <h2> {testimonials[testimonial].text} </h2>

                        <small> {testimonials[testimonial].author} </small>

                        <DotAndNavSwitcher

                            controls={{

                                navSwitcher: true,

                                dotSwitcher: true

                            }}

                        />

                    </div>

                </div>


            </div>

        </ComponentHolder >

    );
}
