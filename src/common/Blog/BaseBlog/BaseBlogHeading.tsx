import { Button } from "components";
import { LinkWrapper } from "components/LinkWrapper";
import React from "react";

export const BaseBlogHeading = () => {

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

    return (
        <div className="page-blog-holder-header">

            <div className="page-blog-holder-header-left">

                <h1> THE BLOG </h1>

                <div className="page-blog-holder-header-left-links">

                    {filters.map((item) =>

                        <LinkWrapper link={`/blog?category=${item.link}`} key={`header-item-${item.title}`}>

                            <span>

                                {item.title}

                            </span>

                        </LinkWrapper>

                    )}

                </div>


            </div>

            <div className="page-blog-holder-header-right">

                <div className="page-blog-holder-header-marquee-block">

                    <span className="page-blog-holder-header-marquee-fade" />

                    {/* @ts-expect-error */}
                    < marquee scrollAmount={3} loop={-1}  >

                        <p> Feel the beat of Nigeria’s Biggest music community </p>

                        {/* @ts-expect-error */}
                    </marquee>

                    <span className="page-blog-holder-header-marquee-fade" />

                </div>

                <Button label="Subscribe" />

            </div>

        </div >

    )

} 