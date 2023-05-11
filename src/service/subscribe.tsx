import mailchimp from '@mailchimp/mailchimp_marketing';
import axios from 'axios';

mailchimp.setConfig({
    apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
    server: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER
});

export const subscribe = async (item: {
    email: string,
}) => {

    try {

        await axios.post('api/subscribe', { ...item });

        return true;

    } catch (error: any) {

        const data = error?.response?.data?.response?.text || "";

        if (data.toLowerCase().includes("member exists")) {

            return "Your email has already been added."

        }

        return "Oops, something went wrong";
    }

};