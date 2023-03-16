
export const leftLinks: typeOfHeaderItem[] = [];

export const rightLinks: typeOfHeaderItem[] = [
    {
        "title": "CREATIVE AGENCY",
        "link": "/creative"
    },
    {
        "title": "LABELS",
        "link": "/labels"
    },
    {
        "title": "VISUAL STUDIO",
        "link": "/studio"
    },
    {
        "title": "EVENTS",
        "link": "/events"
    },
    {
        "title": "BLOG",
        "link": "/blog"
    },
];

export type typeOfHeaderItem = {
    title?: string,
    type?: string,
    link?: string,
    links?: { [key: string]: any }[],
    class?: string
};
