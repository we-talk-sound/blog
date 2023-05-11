import mailchimp from '@mailchimp/mailchimp_marketing';
import { NextApiRequest, NextApiResponse } from 'next';

mailchimp.setConfig({
    apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
    server: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER
});

export default async (req: NextApiRequest, res: NextApiResponse) => {

    try {

        const { email } = req.body;

        const { data } = await mailchimp.lists.addListMember(process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID, {
            email_address: email,
            status: 'subscribed'
        });

        return res.status(201).json(data);

    } catch (error: any) {

        return res.status(500).json(error);
    }

};
