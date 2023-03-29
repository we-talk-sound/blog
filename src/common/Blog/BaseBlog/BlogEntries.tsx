import React from 'react';
import { Button, ComponentHolder, StoryItem } from 'components';
import { useSelector } from 'react-redux';
import { storeInterface } from 'types';
import { transformStory } from 'utils';
import { useRouter } from 'next/router';
import { StoryLoaderItem } from 'common/Placeholders';

export const BlogEntries: React.FC<{ category: string }> = ({ category }) => {

    const router = useRouter();

    const { blog: { blogCategoryStories , categories  } }: storeInterface = useSelector((store: storeInterface) => store);

    const usableCategory = categories?.slugPairs?.[category?.toLowerCase()];

    const storyList = blogCategoryStories?.categoryData?.[category] || {};

    const categoryPages = Object.keys(storyList);

    const latestPage = categoryPages?.[categoryPages?.length - 1] || "1";

    return (

        <>

            <ComponentHolder

                className="no-border page-blog-active-category-holder"

                headerClass='page-blog-active-category-header'

                bodyClass="page-blog-active-category-body"

                title={ (usableCategory?.name || "").toUpperCase() }

                subtitle={ (usableCategory?.description || "")?.toUpperCase() }

                align={true}
            >


                <div className="page-blog-latest-articles-flex page-blog-active-category-flex">

                    {categoryPages.map((item, index) =>

                        <React.Fragment key={`${category}-page-${index}`}>

                            {storyList?.[item].map((story, storyIndex) =>

                                <StoryItem

                                    key={`${category}-page-${index}-${storyIndex}`}

                                    story={transformStory(story)}

                                    mode={"story"}


                                />

                            )}

                        </React.Fragment>

                    )}


                    {blogCategoryStories.loader &&

                        ([...Array(9)].map((item, index) =>

                            <StoryLoaderItem

                                imageBox={true}

                                length={6}

                                key={`story-loader-placeholder-${index}`}

                            />


                        ))
                        
                    }

                </div>

               { <Button

                    label={"Show Older Articles"}

                    className={"no-bg page-blog-active-category-next"}

                    onClick={() =>

                        router.push(

                            `/blog?category=${category}&page=${Number(latestPage) + 1}`,

                            undefined,

                            { shallow: true }

                        )

                    }

                />}

            </ComponentHolder>

        </>
    )
}

