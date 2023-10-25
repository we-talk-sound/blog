import { NextApiRequest, NextApiResponse } from 'next';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let error, data;
  // let data
  try {
    const { audience, email_address, status, merge_fields } = req.body;
    const audience_id =
      audience === 'store'
        ? process.env.NEXT_PUBLIC_MAILCHIMP_STORE_AUDIENCE_ID
        : process.env.NEXT_PUBLIC_MAILCHIMP_NEWSLETTER_AUDIENCE_ID;

    data = await mailchimp.lists.addListMember(audience_id, {
      email_address,
      status: status || 'subscribed',
      merge_fields
    });
    //
  } catch (err) {
    const { response, message }: any = err;
    error = response?.body?.detail || response?.body?.title || message;
  }
  // response
  return res.status(error ? 400 : 200).json({ success: error ? false : true, error, data });
};
