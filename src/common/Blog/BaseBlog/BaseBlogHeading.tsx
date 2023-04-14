import { Button } from "components";
import { LinkWrapper } from "components/LinkWrapper";
import { Marquee } from "components/Marquee";
import React from "react";
import { classnames } from "utils";

export const BaseBlogHeading: React.FC<{ category?: string }> = ({ category }) => {

    const filters = [
        {
            title: "ALL POSTS",
            link: "all"
        },
        {
            title: "COMMUNITY",
            link: "community"
        },
        {
            title: "CONVERSATIONS",
            link: "conversations"
        },
        {
            title: "INSIGHTS",
            link: "insights"
        },
        {
            title: "MUSIC",
            link: "music"
        }
    ];

    const blogBody = document.getElementsByClassName("page-blog-active-category-holder");

    return (

        <div className="page-blog-holder-header">

            <div className="page-blog-holder-header-left">

                <h1> THE BLOG </h1>

                <div className="page-blog-holder-header-left-links">

                    {filters.map((item) =>

                        <LinkWrapper

                            link={`/blog?category=${item.link}`} key={`header-item-${item.title}`}

                            scroll={false}

                            preClick={() => {

                                blogBody?.[0]?.scrollIntoView?.({ behavior: "smooth", block: "nearest", inline: "nearest" });

                            }}>

                            <span className={classnames(item.link === category?.toLowerCase() ? "color-primary" : "")}>

                                {item.title}

                            </span>

                        </LinkWrapper>

                    )}

                </div>


            </div>

            <div className="page-blog-holder-header-right">

                <Marquee text="FEEL THE BEAT OF NIGERIA'S BIGGEST MUSIC COMMUNITY" />

                <Button label="Subscribe" />

            </div>

        </div >

    )

}
