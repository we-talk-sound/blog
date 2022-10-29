import React from "react";
import { Button, ComponentHolder, ViewFormatter } from "components";

export const BlogCategories = () => {

    const filters = [
        {
            title: "Community",
            value: "We are stronger together on our own"
        },
        {
            title: "Conversations",
            value: "we talk to different guests and unearth their wisdom"
        },
        {
            title: "Insights",
            value: "DATA DEEP DIVES AND INTROSPECTIVE THOUGHT PIECES"
        },
        {
            title: "Music",
            value: "EXPERIENCE THE BEST MUSIC FROM OUR COMMUNITY AND MORE"
        },
    ];

    return (
        <ComponentHolder

            className="no-border page-blog-category-holder"

            headerClass="page-blog-category-header"

            title={'THE CATEGORIES'}

        >

            {filters.map((item, index) =>

                <div

                    key={`category-item-${item.title}-${index}`}

                    className="page-blog-category-item"

                >

                    <ViewFormatter {...item} />

                    <Button className="no-bg max" label="See all Articles" />

                </div>

            )}

        </ComponentHolder>

    )

} 