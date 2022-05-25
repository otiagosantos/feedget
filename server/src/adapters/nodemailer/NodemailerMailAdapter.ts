import { IMailAdapter, ISendMailData } from "../IMailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    }
});

class NodemailerMailAdapter implements IMailAdapter {
    async sendMail(data: ISendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <equipe@feedget.com',
            to: 'Name Lastname <anyone@test.com',
            subject: data.subject,
            html: data.body
        });
    }
}

export { NodemailerMailAdapter }
