
export const leftLinks: typeOfHeaderItem[] = [];

export const rightLinks: typeOfHeaderItem[] = [
    {
        "title": "CREATIVE AGENCY",
        "link": "/creative"
    },
    {
        "title": "LABEL SERVICES",
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
    {
        "title": "STORE",
        "link": `https://wtslifestyle.com/?fbclid=PAAaaJORX1HJD-SHO7TdsRz7DjdHm2YWHnvJ1gFPbLDgrK11DrFvjolls72Go_aem
        _AbaCEZwdkiAxqlSmbx0WX4ugHwIk2P-pWVdqS1PZAiuinGNNb2arMXw74QfwM4WHDzs`
    },
];

export type typeOfHeaderItem = {
    title?: string,
    type?: string,
    link?: string,
    links?: { [key: string]: any }[],
    class?: string
};
