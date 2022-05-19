import { IMailAdapter, ISendMailData } from "../IMailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "2b49f1457ef4ad",
        pass: "55a484032d9ff9"
    }
});

class NodemailerMailAdapter implements IMailAdapter {
    async sendMail(data: ISendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <equipe@feedget.com',
            to: 'Tiago Santos <otiagosantos.code@gmail.com',
            subject: data.subject,
            html: data.body
        });
    }
}

export { NodemailerMailAdapter }
