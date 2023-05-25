export type authType = {
    accesstoken?: string,
    refreshtoken?: string,
    expiresAt?: string
}

export type routeType = {
    currentPath: {
        fullPath?: string,
        queries?: { [key: string]: string },
        specificPath?: string
    },
    previousPath: {
        fullPath?: string,
        queries?: { [key: string]: string },
        specificPath?: string
    },
    tempPath: {
        fullPath?: string,
        queries?: { [key: string]: string },
        specificPath?: string
    },
    navigating: boolean,
    visitationTrack: string[]
}

export type toastType = {
    timer: number,
    nature?: string,
    manualDismiss?: boolean,
    toDismiss?: string,
    toast?: { id: string, text: string },
    toasts: { id: string, text: string, new: boolean }[]
}

export type workerType = {
    activity: string[],
    refreshing: boolean
}

export type utilType = {
    cities: {
        loader: boolean,
        error: boolean,
        data: {
            [key: string]: { name: string, id: string }[]
        }
    },
    states: {
        loader: boolean,
        error: boolean,
        data: { name: string, id: string }[]
    }
}

export type blogEntryTypes = "dashboardBlogs" | "categories" | "blogSingleStories" | "blogCategoryStories";

export type blogItemType = {

    title: { rendered: string },

    date: string,

    slug: string,

    categories: number[],

    content: { rendered: string },

    _embedded: { "wp:featuredmedia": [{ "source_url": string, media_details: { sizes: { medium: { source_url: string } } } }] },

    excerpt: { rendered: string }

};

export type blogPageData = { [key: string]: Array<blogItemType> };

type blogEntryType = {

    data: Array<blogItemType>,
    categoryData?: { [key: string]: blogPageData }
    queryParam: { [key: string]: any },
    perPage: number,
    loader: boolean,
    page: number,
    pageCount: number,
    error: boolean

};

export type blogCategoryItemType = { id: number, description: string, name: string, slug: string };

export type storeBlogEntry = {

    dashboardBlogs: blogEntryType,

    blogCategoryStories: blogEntryType,

    blogSingleStories: { [key: string | number]: blogItemType },

    categories: {
        data: Array<blogCategoryItemType>,
        pairs: { [key: number | string]: blogCategoryItemType },
        slugPairs: { [key: string]: blogCategoryItemType },
        queryParam: { [key: string]: any },
        perPage: number,
        loader: boolean,
        page: number,
        pageCount: number,
        error: boolean
    },

};

export interface storeInterface {
    auth: authType,
    blog: storeBlogEntry,
    route: routeType
    toast: toastType,
    util: utilType,
    worker: workerType
}
