import React, { useEffect, useState } from 'react';
import { ComponentHolder, Table } from 'components';

class ImmutableNumber {

    immutable?: number;

    setOnce?: boolean;

    constructor(placeholder: undefined, setOnce?: boolean) {

        this.immutable = placeholder;

        this.setOnce = setOnce;

    }

    setImmutability(immutableNumber: number) {

        if (this.immutable !== undefined && this.setOnce === true) return;

        this.immutable = immutableNumber;

    }

    getImmutableVariable() {

        return this.immutable;

    }

};

export const SectionThree: React.FC = () => {

    const [triggerScrollOut, setTriggerScrollOut] = useState({

        previousBlock: false,

        nextBlock: false

    });

    const [immutableScrollGap] = useState(() => new ImmutableNumber(undefined, true));

    const [immutableScrollEnabled] = useState(() => new ImmutableNumber(undefined));

    const [immutableScrollHeight] = useState(() => new ImmutableNumber(undefined, true));

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
                value: `We help our clients delight current audiences, and expand their reach to new 
                audiences across the region, and the world through a holistic marketing campaigns covering:`

            }
        ],

        [
            "03",
            "Talent Accelerator & Label services",
            {
                type: "repeated-data",
                value: `We discover and partner with emerging talent to create, distribute and market 
                their music through our recording camp (Camp Nova), our collaborative album series 
                (LOFN) and other initiatives. We can collaborate with The Orchard to develop emerging 
                talent, execute recording camps & distribute music projects by talented emerging acts.`

            }
        ],

        [
            "04",
            "Creative Direction & Design",
            {
                type: "repeated-data",
                value: `We help create new brands from scratch as well as re-position existing brands to
                 reach new audiences. With a combination of design, illustrations, animations, photography, 
                 videography and other visual elements, we develop concepts into aesthetically pleasing 
                 assets and elements that can be used digitally and physically.`

            }
        ],

        [
            "05",
            "Web & Product Development",
            {
                type: "repeated-data",
                value: `We design and develop artist & brand websites, online-based games, online merch stores, mobile apps and more.`

            }
        ],

        [
            "06",
            "Events and live",
            {
                type: "repeated-data",
                value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet urna at ridiculus
                 liberoorper ridiculus aenean quam arcu. Nunc, enim cras fermentum mauris nunc libero libero 
                 lobortis suspendisse. Ultricies morbi tortor, amet id nibh.`

            }
        ],

    ];

    useEffect(() => {

        const containerElement = document.getElementById("scroll-parent");

        // const nextSectionElement = document.getElementById("projects-section");

        // const scrollParent = document;

        // console.log(scrollParent)

        // const scrollElementHeight = (containerElement?.scrollHeight || 0) / data.length;

        // const scrollFunction = (e?: React.UIEvent<HTMLDivElement, UIEvent>) => {

        //     console.log(window.scrollY, document.body.scrollHeight, containerElement?.offsetTop);

        //     if (containerElement?.offsetTop && (window.scrollY >= (containerElement?.offsetTop))) {

        //         console.log("we in", containerElement?.offsetHeight,);

        //     }

        // }

        const containerScrollingFunction = (e: Event) => {

            const containerElement = document.getElementById("scroll-parent");

            let previousScrollGap: number | undefined = immutableScrollGap.immutable;

            const event = e as { target: { scrollTop?: number, clientHeight?: number } };

            if (previousScrollGap === undefined && containerElement?.scrollHeight !== undefined) {

                immutableScrollGap.setImmutability(event?.target?.scrollTop as number);

            };

            if (previousScrollGap !== undefined) {

                if (!immutableScrollHeight.immutable) {

                    const firstScrollFrameHeight = previousScrollGap + (containerElement?.clientHeight || 0);

                    const scrollHeight = firstScrollFrameHeight + ((containerElement?.clientHeight || 0.0) * (data.length - 2));

                    immutableScrollHeight.setImmutability(scrollHeight);

                }

                const errorMargin = immutableScrollHeight.immutable as number;

                if (!event?.target?.scrollTop) return;

                if (event?.target?.scrollTop < previousScrollGap) {

                    // console.log("leave that part");

                }

                if ((event?.target?.scrollTop > errorMargin) && !immutableScrollEnabled.immutable) {

                    setTriggerScrollOut((prevState) => ({

                        ...prevState,

                        nextBlock: true,

                    }));

                }

            }

            // console.log(e.target?.scrollTop , containerElement?.clientHeight, containerElement?.scrollHeight );

        }

        if (document) {

            containerElement?.addEventListener("scroll", containerScrollingFunction, true);

        }

        // eslint-disable-next-line
    }, [window === undefined]);

    useEffect(() => {

        const nextSectionElement = document.getElementById("projects-section");

        const containerElement = document.getElementById("scroll-child");

        if (nextSectionElement && (!immutableScrollEnabled.immutable) && triggerScrollOut.nextBlock) {

            containerElement?.classList.add("hide-me");

            immutableScrollEnabled.setImmutability(1);

            setTriggerScrollOut({ previousBlock: false, nextBlock: false });

            setTimeout(() => {

                setTriggerScrollOut({ previousBlock: false, nextBlock: false });

                immutableScrollEnabled.setImmutability(0);

                containerElement?.classList.remove("hide-me");

                containerElement?.scrollBy({

                    behavior: "smooth",
    
                    top: -100
    
                });

                // containerElement?.;

            }, 400);

        } else {

            // console.log("deferred");

        }

        // eslint-disable-next-line
    }, [triggerScrollOut.nextBlock]);

    return (

        <ComponentHolder

            bodyClass='no-border page-zero-section-three'

            id={"scroll-parent"}

            childId={"scroll-child"}

        >

            {data.map((item) =>

                <div
                    className='page-zero-section-two-body page-zero-section-three-body'
                    key={`service-item-${item[1]}`}
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
