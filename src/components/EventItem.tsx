import React from "react";
import { classnames } from "utils";

export const EventItem:React.FC<Props> = ({

    image,
    title,
    subtitle,
    className
        
}) => {

 return (

    <div className={classnames("event-item", className)}>

        <img src={image} alt={"event"} />

        <h2> {title} </h2>

        <p> {subtitle} </p>

    </div>

 ); 

}

interface Props {

    image: string,

    title: string,

    subtitle?: string,

    className?: string

}
