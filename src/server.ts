import { prisma } from "./prisma";
import express from "express";
import nodemailer from "nodemailer";

const server = express();

server.use(express.json());

server.post("/feedbacks", async (request, response) => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "2b49f1457ef4ad",
            pass: "55a484032d9ff9"
        }
    });

    const feedback = await prisma.feedback.create({
        data: {
            type: request.body.type,
            comment: request.body.comment,
            screenshot: request.body.screenshot
        }
    });

    await transport.sendMail({
        from: 'Equipe Feedget <equipe@feedget.com',
        to: 'Tiago Santos <otiagosantos.code@gmail.com',
        subject: 'New Feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
            `<p>Tipo do feedback: ${request.body.type}</p>`,
            `<p>Comentário: ${request.body.comment}</p>`,
            `</div>`
        ].join('\n')
    });

    response.status(201).json(feedback);
});

server.listen("3333", () => console.log("Server On"));
