
export const leftLinks: typeOfHeaderItem[] = [];

export const rightLinks: typeOfHeaderItem[] = [
    {
        "title": "CREATIVE AGENCY",
        "link": "/*"
    },
    {
        "title": "LABELS",
        "link": "/*"
    },
    {
        "title": "EVENTS",
        "link": "/*"
    },
    {
        "title": "BLOG",
        "link": "/*"
    },
    {
        "title": "SHOP",
        "link": "/*"
    }
];

export type typeOfHeaderItem = {
    title?: string,
    type?: string,
    link?: string,
    links?: { [key: string]: any }[],
    class?: string
};
