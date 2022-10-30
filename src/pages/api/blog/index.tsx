import axios from 'axios'
import { authorizedHeader } from 'service/helper';

const link = (item: string, params?: string): { type: "post" | "get" | "patch", Link: string } => {

    // "retrieve" | "retrieve-categories" | "retrieve-story" | "retrieve-category-stories"

    switch (item) {

        case "retrieve":
        case "retrieve-story":
        case "retrieve-category-stories":
            return { type: "get", Link: `posts?${params}&_embed` };

        case "retrieve-categories":
            return { type: "get", Link: `categories?${params}` };

        default:
            return { type: "get", Link: `` };
    }

}

async function handler(req: { [key: string]: any }, res: { [key: string]: any }) {

    try {

        const { authType, param, ...rest } = req.body;
        const { type, Link } = link(authType, param);

        const completeUrl = `https://blog-admin.wetalksound.co/wp-json/wp/v2/${Link}`;

        const { data } = await axios.call(
            type,
            completeUrl,
            { ...authorizedHeader(req?.headers?.authorization), data: rest, method: type, timeout: 120000 }
        );

        res.status(200).json(data);

    } catch (error: any) {

        const { data } = error.response || {};
        const err = data || {};

        return res.status(500).json(err);
    }
};

export default handler;
