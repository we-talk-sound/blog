import { typeOfDispatch } from "redux/store";
import axios from 'service/axios';
import * as BlogTypes from "redux/types/blogTypes";
import { blogEntryTypes } from "types";

const dispatchActions = (
    type?: "retrieve" | "retrieve-categories" | "retrieve-story" | "retrieve-category-stories",
) => {

    switch (type) {

        case "retrieve":

            return ({
                start: BlogTypes.RETRIEVE_STORIES_START,
                success: BlogTypes.RETRIEVE_STORIES_SUCCESS,
                failure: BlogTypes.RETRIEVE_STORIES_FAILURE,
            });

        case "retrieve-categories":

            return ({
                start: BlogTypes.RETRIEVE_CATEGORIES_START,
                success: BlogTypes.RETRIEVE_CATEGORIES_SUCCESS,
                failure: BlogTypes.RETRIEVE_CATEGORIES_FAILURE,
            });

        case "retrieve-story":

            return ({
                start: BlogTypes.RETRIEVE_STORY_START,
                success: BlogTypes.RETRIEVE_STORY_SUCCESS,
                failure: BlogTypes.RETRIEVE_STORY_FAILURE,
            });

        case "retrieve-category-stories":

            return ({
                start: BlogTypes.RETRIEVE_CATEGORY_STORIES_START,
                success: BlogTypes.RETRIEVE_CATEGORY_STORIES_SUCCESS,
                failure: BlogTypes.RETRIEVE_CATEGORY_STORIES_FAILURE
            });

        default:

            return ({
                start: BlogTypes.RETRIEVE_STORIES_START,
                success: BlogTypes.RETRIEVE_STORIES_SUCCESS,
                failure: BlogTypes.RETRIEVE_STORIES_FAILURE,
            });

    }

}

export const blogProcess = (
    type: "retrieve" | "retrieve-categories" | "retrieve-story" | "retrieve-category-stories" = "retrieve",
    ref: blogEntryTypes = "dashboardBlogs",
    queryParam: {
        per_page?: number,
        page?: number,
        search?: string,
        slug?: string,
        tags?: string,
        category?: number,
        _fields?: string,
        order?: "desc" | "asc"
    } = {},
) =>
    async (dispatch: typeOfDispatch) => {

        const param = queryParam ? new URLSearchParams(Object(queryParam)).toString() : "";

        try {

            dispatch({
                type: dispatchActions(type).start,
                payload: { ref, queryParam }
            });

            const { data } = await axios.post('/api/blog', { authType: type, param });

            const items = data?.data || data;

            dispatch({
                type: dispatchActions(type).success,
                payload: { ref, items , queryParam }
            });

            return { items, success: true };

        } catch (error: any) {

            const data = error?.response?.data;

            dispatch({
                type: dispatchActions(type).failure,
                payload: { type, data , queryParam, ref }
            });

            return data?.error?.message || false;
        }

    };
