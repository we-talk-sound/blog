import React from "react";
import { classnames } from "utils";

export const StoryItem: React.FC<Props> = ({ story }) => {

    return (
        <div 
        
            className={classnames("story-item", story.isActive && "story-item-active")}
            tabIndex={0}
            role={"button"}
        >

            <div className="story-item-heading">

                <span className="story-item-category">

                    {story?.category}

                </span>

                <p className="story-item-date"> {story?.date} </p>

            </div>

            <p className="story-item-author"> BY {story?.author} </p>

            <h3 className="story-item-title"> {story.title} </h3>

        </div>
    );

}

interface Props {

    story: {

        category: string,
        date: string,
        author: string,
        title: string,
        image?: string,
        isActive?: boolean

    }

}
