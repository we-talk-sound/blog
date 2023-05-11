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
    facebook: "https://www.facebook.com/wetalksound/",
    youtube: "https://www.youtube.com/channel/wetalksound",
    instagram: "https://www.instagram.com/wetalksound",
    twitter: "https://www.twitter.com/wetalksound",
    tiktok: "https://www.tiktok.com/wetalksound"
}

export const FooterLogo = 'assets/logo/wts_white.svg';

export const LandingFooterServices = [
    {
        linkIcon: 'assets/logo/wts_white.svg',
        title: "Lagos, Nigeria",
        withButton: false
    },
    {
        value: "wetalksound@gmail.com",
        title: "CONTACT US",
        withButton: true
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
    title : "Lagos, Nigeria",
    value: ""
};

