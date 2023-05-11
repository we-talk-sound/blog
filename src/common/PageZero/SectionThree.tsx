import React, { useEffect } from 'react';
import { ComponentHolder, Table } from 'components';
import { classnames } from 'utils';
import { Marquee } from 'components/Marquee';


export const SectionThree: React.FC = () => {

    const data = [

        [
            "01",
            "Content Production",
            {
                type: "repeated-data",
                value: `We create original content for our own platforms as well as for clients across different industries. 
                        We deeply understand our clients goals, design holistic content & storytelling strategies, and execute.`

            }
        ],

        [
            "02",
            "Marketing & PR",
            {
                type: "repeated-data",
                value: `We help our clients delight current audiences, and expand their reach to new audiences across
                        the region, and the world through holistic marketing campaigns.`

            }
        ],

        [
            "03",
            "Talent Accelerator & Label services",
            {
                type: "repeated-data",
                value: `We discover and partner with emerging talent to create, distribute and market their 
                        music through our recording bootcamp (Camp Nova), our collaborative album series (LOFN) and other initiatives.`

            }
        ],

        [
            "04",
            "Creative Direction & Design",
            {
                type: "repeated-data",
                value: `We develop original visual content from design, photography, animations, documentaries, 
                        music videos, short films and more for clients across industries.`

            }
        ],

        [
            "05",
            "Emerging Technology",
            {
                type: "repeated-data",
                value: `We help our clients understand the best way to leverage new technologies to reach and excite their audiences.`

            }
        ],

        [
            "06",
            "Events and live",
            {
                type: "repeated-data",
                value: `We design and execute live experiences such as mixers, concerts, conferences and offline activations for clients.`

            }
        ],

    ];

    const opacityCalculator = (startPoint: number, element: Element, spasm?: number) => {

        if (window.pageYOffset > startPoint) {

            const holder = element;

            let offset = window.pageYOffset - startPoint;

            offset = offset / 10;

            if (offset > (spasm || 80)) {

                const maxOffset = 100;

                const calculation = ((offset - (spasm || 80)) / maxOffset) * 100;

                const opacity = calculation / 100;

                holder.setAttribute(

                    "style",

                    `opacity : ${1 - opacity};transform: translate(0, ${-offset}px);`

                );

            } else {

                if (spasm) {

                    const max = spasm;

                    const reversedOpacity = (((offset - max) / max) * 100) / 100;

                    holder.setAttribute(
                        "style",
                        `transform: translate(0, ${-offset}px);opacity: ${1 + reversedOpacity
                        }`
                    );

                } else {

                    holder.setAttribute("style", `transform: translate(0, ${-offset}px)`);

                }

            }

        }

    };

    useEffect(() => {

        const scrollFunction = () => {

            const madScroll = document.getElementById("scroll-child");
            const scrollBaby = document.getElementById("scroll-baby-0");
            const scrollBabyOne = document.getElementById("scroll-baby-1");
            const scrollBabyTwo = document.getElementById("scroll-baby-2");
            const scrollBabyThree = document.getElementById("scroll-baby-3");
            const scrollBabyFour = document.getElementById("scroll-baby-4");
            const scrollBabyFive = document.getElementById("scroll-baby-5");

            if (!madScroll || !scrollBaby || !scrollBabyOne || !scrollBabyTwo || !scrollBabyThree || !scrollBabyFour || !scrollBabyFive) return;

            if ((document?.body?.clientWidth || 0) < 600) {

                scrollBaby.setAttribute("style", "opacity: 1; position: relative;");
                scrollBabyOne.setAttribute("style", "opacity: 1; position: relative;");
                scrollBabyTwo.setAttribute("style", "opacity: 1; position: relative;");
                scrollBabyThree.setAttribute("style", "opacity: 1; position: relative;");
                scrollBabyFour.setAttribute("style", "opacity: 1; position: relative;");
                scrollBabyFive.setAttribute("style", "opacity: 1; position: relative;");

                return;

            }

            const startPoint = madScroll?.offsetTop || 2000;

            const windowOffsetY = window.pageYOffset;

            const brake = 178 * 10 + startPoint;
            const brakePointTwo = 178 * 10 + brake;
            const brakePointThree = 178 * 10 + brakePointTwo;
            const brakePointFour = 178 * 10 + brakePointThree;
            const brakePointFive = 178 * 10 + brakePointFour;
            const brakePointSix = 178 * 10 + brakePointFive;

            if (windowOffsetY > startPoint) {

                if (windowOffsetY < brake) {
                    opacityCalculator(startPoint, scrollBaby);
                    scrollBabyOne.setAttribute("style", `opacity : 0`);
                    scrollBabyTwo.setAttribute("style", `opacity : 0`);
                    scrollBabyThree.setAttribute("style", `opacity : 0`);
                    scrollBabyFour.setAttribute("style", `opacity : 0`);
                    scrollBabyFive.setAttribute("style", `opacity : 0`);
                }

                if (windowOffsetY > brake && windowOffsetY < brakePointTwo) {
                    opacityCalculator(brake, scrollBabyOne, 160);
                    scrollBaby.setAttribute("style", `opacity : 0`);
                    scrollBabyTwo.setAttribute("style", `opacity : 0`);
                    scrollBabyThree.setAttribute("style", `opacity : 0`);
                    scrollBabyFour.setAttribute("style", `opacity : 0`);
                    scrollBabyFive.setAttribute("style", `opacity : 0`);
                }

                if (windowOffsetY > brakePointTwo && windowOffsetY < brakePointThree) {
                    opacityCalculator(brakePointTwo, scrollBabyTwo, 160);
                    scrollBaby.setAttribute("style", `opacity : 0`);
                    scrollBabyOne.setAttribute("style", `opacity : 0`);
                    scrollBabyThree.setAttribute("style", `opacity : 0`);
                    scrollBabyFour.setAttribute("style", `opacity : 0`);
                    scrollBabyFive.setAttribute("style", `opacity : 0`);
                }

                if (windowOffsetY > brakePointThree && windowOffsetY < brakePointFour) {
                    opacityCalculator(brakePointThree, scrollBabyThree, 160);
                    scrollBaby.setAttribute("style", `opacity : 0`);
                    scrollBabyOne.setAttribute("style", `opacity : 0`);
                    scrollBabyTwo.setAttribute("style", `opacity : 0`);
                    scrollBabyFour.setAttribute("style", `opacity : 0`);
                    scrollBabyFive.setAttribute("style", `opacity : 0`);
                }

                if (windowOffsetY > brakePointFour && windowOffsetY < brakePointFive) {
                    opacityCalculator(brakePointFour, scrollBabyFour, 160);
                    scrollBaby.setAttribute("style", `opacity : 0`);
                    scrollBabyOne.setAttribute("style", `opacity : 0`);
                    scrollBabyTwo.setAttribute("style", `opacity : 0`);
                    scrollBabyThree.setAttribute("style", `opacity : 0`);
                    scrollBabyFive.setAttribute("style", `opacity : 0`);
                }

                if (windowOffsetY > brakePointFive && windowOffsetY < brakePointSix) {
                    opacityCalculator(brakePointFive, scrollBabyFive, 160);
                    scrollBaby.setAttribute("style", `opacity : 0`);
                    scrollBabyOne.setAttribute("style", `opacity : 0`);
                    scrollBabyTwo.setAttribute("style", `opacity : 0`);
                    scrollBabyThree.setAttribute("style", `opacity : 0`);
                    scrollBabyFour.setAttribute("style", `opacity : 0`);
                }

            }

        };

        if (document) {

            window.addEventListener("scroll", scrollFunction, true);

            return (() => {

                window.removeEventListener("scroll", scrollFunction, true);

            });

        }

        // eslint-disable-next-line
    }, [window === undefined]);

    return (

        <ComponentHolder

            bodyClass={classnames('no-border page-zero-section-three')}

            className={"scroll-parent"}

            childId={"scroll-child"}

        >

            <div className='marquee-snap page-zero-section-three-body'>

                <Marquee text='Services' />

            </div>

            {data.map((item, index) =>

                <div
                    className='page-zero-section-three-body'
                    key={`service-item-${item[1]}`}
                    id={`scroll-baby-${index}`}
                >

                    <Table
                        heading={["", "", ""]}
                        data={[item]}
                    />

                </div>

            )}


        </ComponentHolder >

    );
}
