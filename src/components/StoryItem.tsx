import React from "react";
import { classnames } from "utils";
import { Button } from "./Button";
import { LinkWrapper } from "./LinkWrapper";
import * as He from "he";
import { useDispatch } from "react-redux";

export const StoryItem: React.FC<Props> = ({ story, mode, viewButton }) => {

    const dispatch = useDispatch();

    return (

        <LinkWrapper

            className={classnames("story-item", story.isActive && "story-item-active", mode && `story-item-${mode}`)}

            link={story?.link}

            preClick={() => {

                story?.item && dispatch({

                    type: "RETRIEVE_STORY_SUCCESS",

                    payload: {

                        ref: "blogSingleStories",

                        items: [story?.item]

                    }

                })

            }}

        >

            <>

                {mode && story?.image && <img src={story.image} alt={`story-image`} />}

                <div className="story-item-body">

                    <div className="story-item-heading">

                        <span className="story-item-category">

                            {story?.category}

                        </span>

                        <p className="story-item-date"> {story?.date} </p>

                    </div>

                    <p className="story-item-author"> BY {story?.author} </p>

                    <h3 className="story-item-title"> {He.unescape(story.title)} </h3>

                    {story.sub && mode && <p className="story-item-sub" dangerouslySetInnerHTML={{ __html : story.sub }} />}

                    {viewButton && <Button label="Read More" className="no-bg" />}

                </div>

            </>

        </LinkWrapper>
    );

}

interface Props {

    mode?: "article" | "category",

    viewButton?: boolean,

    story: {

        category: string,
        date: string,
        author: string,
        title: string,
        image?: string,
        isActive?: boolean,
        sub?: string,
        link?: string,
        item?: any

    }

}
