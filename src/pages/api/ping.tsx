import mailchimp from '@mailchimp/mailchimp_marketing';
import { NextApiRequest, NextApiResponse } from 'next';

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // const { email } = req.body;

    const response = await mailchimp.ping.get();

    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json(error);
  }
};
