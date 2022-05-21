import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/NodemailerMailAdapter";
import { PrismaFeedbackRepository } from "./repositories/prisma/PrismaFeedbackRepository";
import { SubmitFeedbackService } from "./services/SubmitFeedbackService";

const routes = express.Router()



routes.post("/feedbacks", async (request, response) => {

    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const nodeMailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedbackService = new SubmitFeedbackService(prismaFeedbackRepository, nodeMailerMailAdapter);

    submitFeedbackService.execute({
        type: request.body.type,
        comment: request.body.comment,
        screenshot: request.body.screenshot
    });

    

    return response.status(201).send();
});

export { routes }
