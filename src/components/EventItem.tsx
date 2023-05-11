import React from "react";
import { classnames } from "utils";
import { Button } from "./Button";
import { Mouse } from "./Assets";

export const EventItem: React.FC<Props> = ({

    image,

    title,

    subtitle,

    className,

    button,

    isReel

}) => {

    return (

        <div className={classnames("event-item", className)}>

            <div className="event-item-body">

                {button &&

                    <div className="event-item-button-wrapper">

                        <Button label={button.label} />

                        {isReel && <div className="event-item-button-wrapper-for-reel">

                            <img src="assets/reel.png" alt="reel" />

                            <span dangerouslySetInnerHTML={{ __html: Mouse }} />

                        </div>
                        }

                    </div>

                }

                <img src={image} alt={"event"} />

            </div>


            <h2> {title} </h2>

            <p> {subtitle} </p>


        </div>

    );

}

interface Props {

    image: string,

    title: string,

    subtitle?: string,

    className?: string,

    button?: { label: string },

    onClick?: () => void,

    isReel?: boolean

}
