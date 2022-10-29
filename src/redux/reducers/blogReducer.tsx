import * as blogTypes from 'redux/types/blogTypes';
import { blogCategoryItemType, blogEntryTypes, storeBlogEntry } from 'types/storeTypes';
import { shallowCompare } from 'utils';

const base = {
    data: [],
    page: 1,
    perPage: 20,
    pageCount: 1,
    loader: false,
    queryParam: {},
    error: false
};

const initialState: storeBlogEntry = {
    
    dashboardBlogs: base,

    blogCategoryStories: base,

    categories: {
        data: [],
        pairs: {},
        page: 1,
        perPage: 20,
        pageCount: 1,
        loader: false,
        queryParam: {},
        error: false
    },

    blogSingleStories: {}
};

const createCategoryPairs = (categories: blogCategoryItemType[]) => {

    const categoryPairs: { [key: string | number]: blogCategoryItemType } = {};

    categories.forEach(item => (categoryPairs[item.id] = item));

    return categoryPairs;

}

const blogReducer = (state = initialState, action: { [key: string]: any }) => {

    const ref = action?.payload?.ref as blogEntryTypes;

    const affectedState = state?.[ref as "dashboardBlogs" |  "categories" |  "blogCategoryStories"];

    switch (action.type) {

        case blogTypes.RETRIEVE_STORIES_START:
        case blogTypes.RETRIEVE_CATEGORIES_START:

            return {
                ...state,
                [ref]: {
                    ...state[ref],
                    loader: !affectedState?.data?.length || !shallowCompare(affectedState?.queryParam || {}, action?.payload?.queryParam),
                    queryParam: action?.payload?.queryParam
                }
            };

        case blogTypes.RETRIEVE_STORIES_SUCCESS:
        case blogTypes.RETRIEVE_CATEGORIES_SUCCESS:

            return {
                ...state,
                [ref]: {
                    ...state[ref],
                    loader: false,
                    data: action.payload.items,
                    ...(ref === "categories" ? {

                        pairs: createCategoryPairs(action?.payload?.items)

                    } :

                        {}

                    )
                }
            };

        case blogTypes.RETRIEVE_STORIES_FAILURE:
        case blogTypes.RETRIEVE_CATEGORIES_FAILURE:

            return {
                ...state,
                [ref]: {
                    ...state[ref],
                    loader: false,
                    error: true
                }
            };

        case blogTypes.RETRIEVE_STORY_SUCCESS:

            return {

                ...state,
                
                [ref] : {
                    
                    ...(state?.[ref] || {}),

                    [action?.payload?.items?.[0]?.slug] : action?.payload?.items?.[0]


                }

            }

        default:
            return state;

    }

};

export default blogReducer;
