import React from "react";
import { classnames } from "utils";
import { Button } from "./Button";
import { LinkWrapper } from "./LinkWrapper";
import * as He from "he";
import { useDispatch } from "react-redux";

export const StoryItem: React.FC<Props> = ({ story, mode, viewButton, isActive }) => {

    const dispatch = useDispatch();

    const subCondition = mode !== "story" && mode !== "banner-feed" && mode;

    const storyImageCondition = story?.image;

    const bannerImageCondition = mode === "banner-feed";

    return (

        <LinkWrapper

            className={classnames("story-item", isActive && "story-item-active", mode && `story-item-${mode}`)}

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

                {storyImageCondition && !bannerImageCondition &&

                    <img

                        src={story.image}

                        alt={`story-image`}

                    />
                }

                <span className="story-item-focuser" />

                <div className="story-item-body">

                    <div className="story-item-heading">

                        <span className="story-item-category">

                            {story?.category}

                        </span>

                        <p className="story-item-date"> {story?.date} </p>

                    </div>

                    <p className="story-item-author"> BY {story?.author} </p>

                    <h3 className="story-item-title"> {He.unescape(story.title)} </h3>

                    {subCondition && story.sub && <div className="story-item-sub" dangerouslySetInnerHTML={{ __html: story.sub }} />}

                    {viewButton && <Button label="Read More" className="no-bg" />}


                </div>

                {storyImageCondition && bannerImageCondition &&

                    <img

                        src={story.image}

                        alt={`story-image`}

                    />

                }

            </>

        </LinkWrapper>
    );

}

interface Props {

    isActive?: boolean,

    mode?: "article" | "category" | "story" | "banner-feed",

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
