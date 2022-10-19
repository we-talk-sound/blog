import React from "react";

export const EventItem:React.FC<Props> = ({

    image,
    title,
    subtitle
        
}) => {

 return (

    <div className="event-item">

        <img src={image} alt={"event"} />

        <h2> {title} </h2>

        <p> {subtitle} </p>

    </div>

 ); 

}

interface Props {

    image: string,

    title: string,

    subtitle: string

}
