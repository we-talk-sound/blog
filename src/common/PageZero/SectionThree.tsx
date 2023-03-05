import React, { useEffect, useState } from 'react';
import { ComponentHolder, Table } from 'components';
import { classnames } from 'utils';

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

    const [triggerScrollOut, setTriggerScrollOut] = useState<{
        previousBlock: boolean,
        nextBlock: boolean,
        canSnap?: boolean
    }>({

        previousBlock: false,

        nextBlock: false,

        canSnap: undefined

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

        const scrollParent = document.getElementById("scroll-parent");

        const scrollingElement = document.getElementById("scroll-child");

        const hiddenSectionUp = document.getElementById("page-zero-hidden-section-up");

        const hiddenSectionDown = document.getElementById("page-zero-hidden-section-down");

        // const nextSectionElement = document.getElementById("projects-section");

        // const scrollParent = document;

        // console.log(scrollParent)

        // const scrollElementHeight = (containerElement?.scrollHeight || 0) / data.length;

        const scrollFunction = () => {

            if (scrollParent && hiddenSectionUp && scrollingElement && hiddenSectionDown) {

                console.log(window.scrollY, scrollParent.offsetTop, (scrollParent.offsetTop + scrollParent.offsetHeight));

                if (window.scrollY < scrollParent.offsetTop) {

                    setTriggerScrollOut((prevState) => ({

                        ...prevState,

                        canSnap: false

                    }));

                    if (!hiddenSectionDown.classList.contains("hide-display")) {

                        hiddenSectionDown.classList.add("hide-display");

                    }

                }


                if (window.scrollY >= (scrollParent.offsetTop - 100) && window.scrollY <= (scrollParent.offsetTop + 200)) {

                    setTriggerScrollOut((prevState) => ({

                        ...prevState,

                        canSnap: true

                    }));

                    console.log(" we in the bitch ", window.scrollY, (scrollParent.offsetTop - 150));

                }

                if (window.scrollY > (scrollParent.offsetTop + scrollParent.offsetHeight)) {

                    console.log("this guy is one")

                    scrollingElement.classList.add("hide-me");

                    setTriggerScrollOut((prevState) => ({

                        ...prevState,

                        canSnap: false

                    }));

                    if (!hiddenSectionUp.classList.contains("hide-display")) {

                        hiddenSectionUp.classList.add("hide-display");

                    }

                }

            }

        }

        const containerScrollingFunction = (e: Event) => {

            const scrollParent = document.getElementById("scroll-parent");

            let previousScrollGap: number | undefined = immutableScrollGap.immutable;

            const event = e as { target: { scrollTop?: number, clientHeight?: number } };

            console.log(
                
                event.target.scrollTop, " they beat my ex " , 
                
                event.target.clientHeight , " - ",
                
                immutableScrollHeight.immutable, "the scroll height" 
                
            );

            if (previousScrollGap === undefined && scrollParent?.scrollHeight !== undefined) {

                immutableScrollGap.setImmutability(event?.target?.scrollTop as number);

            };

            if (previousScrollGap !== undefined && !triggerScrollOut.canSnap ) {

                if (!immutableScrollHeight.immutable) {

                    const firstScrollFrameHeight = previousScrollGap + (scrollParent?.clientHeight || 0);

                    const scrollHeight = firstScrollFrameHeight + ((scrollParent?.clientHeight || 0.0) * (data.length - 2));

                    immutableScrollHeight.setImmutability(scrollHeight);

                }

                const errorMargin = immutableScrollHeight.immutable as number;

                if (!event?.target?.scrollTop) return;

                if (event?.target?.scrollTop < previousScrollGap) {

                    setTriggerScrollOut((prevState) => ({

                        ...prevState,

                        previousBlock: true,

                    }));

                    // hiddenSectionUp.classList.remove("hide-display");

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

            scrollParent?.addEventListener("scroll", containerScrollingFunction, true);

            window.addEventListener("scroll", scrollFunction, true);

        }

        // eslint-disable-next-line
    }, [window === undefined]);

    useEffect(() => {

        const containerElement = document.getElementById("scroll-parent");

        const scrollParent = document.getElementById("scroll-child");

        if (triggerScrollOut.canSnap && containerElement && scrollParent) {

            // document.body.classList.add("hide-me");

            setTimeout(() => {

                // window.scrollTo({

                //     top: containerElement.offsetTop,

                //     left: 0,

                //     behavior: "smooth"

                // });

                // document.body.classList.remove("hide-me");

                scrollParent.classList.remove("hide-me");

                // setTriggerScrollOut((prevState) => ({ ...prevState, canSnap: false }))

            }, 100);

        }


    }, [triggerScrollOut.canSnap]);

    useEffect(() => {

        const hiddenSection = document.getElementById("page-zero-hidden-section-down");

        const containerElement = document.getElementById("scroll-child");

        if (hiddenSection && (!immutableScrollEnabled.immutable) && triggerScrollOut.nextBlock ) {

            console.log("this guy is two")

            containerElement?.classList.add("hide-me");

            hiddenSection.classList.remove("hide-display");

            document.getElementsByTagName("body")[0].focus();

            immutableScrollEnabled.setImmutability(1);

            setTriggerScrollOut((prevState) => ({ ...prevState, previousBlock: false, nextBlock: false }));

            setTimeout(() => {

                setTriggerScrollOut((prevState) => ({ ...prevState, previousBlock: false, nextBlock: false }));

                immutableScrollEnabled.setImmutability(0);

                containerElement?.classList.remove("hide-me");

                containerElement?.scrollBy({

                //     // behavior: "smooth",

                    top: -100

                });

                // containerElement?.;

            }, 1000);

        } else {

            // console.log("deferred");

        }

        // eslint-disable-next-line
    }, [triggerScrollOut.nextBlock]);

    useEffect(() => {

        const hiddenSection = document.getElementById("page-zero-hidden-section-up");

        const containerElement = document.getElementById("scroll-child");

        if (hiddenSection && (!immutableScrollEnabled.immutable) && triggerScrollOut.previousBlock) {

            console.log("this guy is three")

            containerElement?.classList.add("hide-me");

            hiddenSection.classList.remove("hide-display");

            containerElement?.scrollIntoView({

                behavior: "auto",

            });

            document.getElementsByTagName("body")[0].focus();

            immutableScrollEnabled.setImmutability(1);

            setTriggerScrollOut((prevState) => ({ ...prevState, previousBlock: false, nextBlock: false }));

            setTimeout(() => {

                setTriggerScrollOut((prevState) => ({ ...prevState, previousBlock: false, nextBlock: false }));

                immutableScrollEnabled.setImmutability(0);

                containerElement?.classList.remove("hide-me");

                containerElement?.scrollBy({

                    top: immutableScrollEnabled.immutable

                });

            }, 1000);

        } else {

        }

        // eslint-disable-next-line
    }, [triggerScrollOut.previousBlock]);

    return (

        <ComponentHolder

            bodyClass={classnames('no-border page-zero-section-three hide-me')}

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
