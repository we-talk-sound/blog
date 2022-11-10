import * as blogTypes from 'redux/types/blogTypes';
import { blogCategoryItemType, blogEntryTypes, blogPageData, storeBlogEntry } from 'types/storeTypes';
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

    blogCategoryStories: { ...base, categoryData: {} },

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

const dataToStore = (

    state: { categoryData: { [key: string]: blogPageData } },

    data: Array<blogEntryTypes>,

    ref: blogEntryTypes,

    params: { page?: number, category?: string }

) => {

    if (ref === "blogCategoryStories" && params?.category) {

        return ({

            ...((params?.page === 1 || !params?.page) ? { data } : {}),

            categoryData: state?.categoryData?.[params?.category] ?

                ({

                    ...state?.categoryData,

                    [params?.category]: {

                        ...state?.categoryData?.[params?.category],

                        [params?.page || 1]: data

                    }


                }) :

                { [params?.category]: { [params?.page || 1]: data } }

        });

    }

    return ({ data });

}

const blogReducer = (state = initialState, action: { [key: string]: any }) => {

    const ref = action?.payload?.ref as blogEntryTypes;

    const affectedState = state?.[ref as "dashboardBlogs" | "categories" | "blogCategoryStories"];

    switch (action.type) {

        case blogTypes.RETRIEVE_STORIES_START:
        case blogTypes.RETRIEVE_CATEGORIES_START:
        case blogTypes.RETRIEVE_CATEGORY_STORIES_START:

            return {
                ...state,
                [ref]: {

                    ...state[ref],

                    loader: !affectedState?.data?.length || !shallowCompare(affectedState?.queryParam || {}, action?.payload?.queryParam),

                    pageLoader: !shallowCompare(affectedState?.queryParam || {}, action?.payload?.queryParam),

                    queryParam: action?.payload?.queryParam

                }
            };

        case blogTypes.RETRIEVE_STORIES_SUCCESS:
        case blogTypes.RETRIEVE_CATEGORIES_SUCCESS:
        case blogTypes.RETRIEVE_CATEGORY_STORIES_SUCCESS:

            return {
                ...state,
                [ref]: {
                    ...state[ref],
                    loader: false,
                    pageLoader: false,
                    ...(dataToStore(state?.[ref] as any, action.payload.items, ref, affectedState?.queryParam)),
                    ...(ref === "categories" ? { pairs: createCategoryPairs(action?.payload?.items) } : {}),
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

                [ref]: {

                    ...(state?.[ref] || {}),

                    [action?.payload?.items?.[0]?.slug]: action?.payload?.items?.[0]


                }

            }

        default:
            return state;

    }

};

export default blogReducer;
