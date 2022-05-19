import express from "express";
import nodemailer from "nodemailer";
import { PrismaFeedbackRepository } from "./repositories/prisma/PrismaFeedbackRepository";
import { SubmitFeedbackService } from "./services/SubmitFeedbackService";

const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "2b49f1457ef4ad",
        pass: "55a484032d9ff9"
    }
});

routes.post("/feedbacks", async (request, response) => {

    const prismaFeedbackRepository = new PrismaFeedbackRepository();

    const submitFeedbackService = new SubmitFeedbackService(prismaFeedbackRepository);

    submitFeedbackService.execute({
        type: request.body.type,
        comment: request.body.comment,
        screenshot: request.body.screenshot
    });

    // await transport.sendMail({
    //     from: 'Equipe Feedget <equipe@feedget.com',
    //     to: 'Tiago Santos <otiagosantos.code@gmail.com',
    //     subject: 'New Feedback',
    //     html: [
    //         `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
    //         `<p>Tipo do feedback: ${request.body.type}</p>`,
    //         `<p>Comentário: ${request.body.comment}</p>`,
    //         `</div>`
    //     ].join('\n')
    // });

    return response.status(201).send();
});

export { routes }
