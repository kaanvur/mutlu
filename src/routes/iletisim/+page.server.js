import { sendData } from '$lib/SpreadsheetService';

export const actions = {
    formSend: async ({ request }) => {
        let data = await request.formData();
        const email = data.get('email');
        const title = data.get('title');
        const message = data.get('message');
        let formData = new FormData();
        formData.append('email', email);
        formData.append('title', title);
        formData.append('message', message);
        const errors = {};

        if (!email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Invalid email format";
        }

        if (!title) {
            errors.title = "Title is required";
        }

        if (!message) {
            errors.password = "Message is required";
        }

        if (Object.keys(errors).length === 0) {
            const returnData = await sendData(formData);
            return returnData;
        } else {
            return {
                errors,
                data
            }
        }
    },
};