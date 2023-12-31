import React from "react";
import { Button, ComponentHeader, ComponentHolder, StoryItem } from "components";
import { classnames, transformStory } from "utils";
import { storeInterface } from "types";
import { useSelector } from "react-redux";
import { StoriesItemPlaceHolder } from "common/Placeholders";

export const LatestArticles: React.FC<{}> = ({}) => {

    const { blog: { dashboardBlogs } }: storeInterface = useSelector((store: storeInterface) => store);

    return (

        <>

            <ComponentHolder
                className="no-border"
                bodyClass={classnames("page-blog-latest-articles-holder ")}
            >

                <ComponentHeader

                    title={'Latest Articles'}

                    className={classnames('color-white page-blog-latest-articles-header')}

                    control={<Button label={"View All"} className="no-bg" />}

                />


                {/* eslint-disable-next-line */}{/* @ts-expect-error */}
                <marquee scrollAmount={25}>

                    <div className="page-blog-latest-articles-flex">

                        {(dashboardBlogs?.data || [])?.map((item, index) =>

                            <StoryItem

                                mode={"article"}

                                key={`blog-story-item-${index}`}

                                story={{ ...transformStory(item) }}

                            />

                        )}

                        {(dashboardBlogs?.loader && dashboardBlogs?.data?.length < 1) &&

                            <div className="page-blog-latest-articles-content-loader">

                                <StoriesItemPlaceHolder imageBox={true} length={120} />

                            </div>

                        }

                    </div>

                    {/* @ts-expect-error */}


                </marquee>


            </ComponentHolder>

        </>
    )

}
