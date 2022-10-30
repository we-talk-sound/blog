import React from "react";
import { ComponentHolder, StoryItem } from "components";
import { storeInterface } from "types";
import { useSelector } from "react-redux";
import { transformStory } from "utils";

export const TopReads = () => {

    const { blog : { dashboardBlogs } } : storeInterface = useSelector((store: storeInterface) => store);

    return (

        <>

            <ComponentHolder

                className="no-border page-blog-latest-articles-holder"
                
                bodyClass="page-blog-top-reads"
                
                headerClass="page-blog-top-reads-header"

                title={'TOP READS'}

                align={true}
            >

                
                    <div className="page-blog-top-reads-flex page-blog-latest-articles-flex">

                        {(dashboardBlogs?.data || []).filter((item , index) => index < 7 ).map((item, index) =>

                            <StoryItem

                                mode={"article"}

                                viewButton={true}

                                key={`blog-top-read-item-${index}`}

                                story={{ ...transformStory(item) }}

                            />

                        )}

                    </div>

            </ComponentHolder>

        </>
    )

}
