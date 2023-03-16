import Wetalksound from 'assets/logo/wts_white.png';

interface FooterTypes {
    logo?: string,
    text?: string,
    icons?: string[],
    iconLinks?: string[],
    icon?: string,
    title?: string,
    link?: string
};

export const SocialLinks = {
    facebook: "https://www.facebook.com/haladigital/",
    youtube: "https://www.youtube.com/channel/haladigital",
    instagram: "https://www.instagram.com/haladigital",
    twitter: "https://www.twitter.com/haladigital"
}

export const FooterLogo = Wetalksound;

export const LandingFooterServices = [
    {
        value: "Hello@wetalksound.com",
        title: "CONTACT US"
    },
    {
        value: "+234 906 783 7892",
        title: "CONTACT US"
    }
];

export const LandingFooterLinks: Array<FooterTypes> = [
    {
        title: "ABOUT",
        link: "#"
    },
    {
        title: "SERVICES",
        link: "#"
    },
    {
        title: "PROJECTS",
        link: "#"
    },
    {
        title: "BLOG",
        link: "#"
    },
];

export const FooterAddress = {
    title : "16 ABUDU STREET, OSAPA LEKKI, LAGOS NIGERIA ",
    value: ""
};

