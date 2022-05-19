import { IMailAdapter } from "../adapter/IMailAdapter";
import { IFeedbackRepository } from "../repositories/IFeedbackRepository";

interface ISubmitFeedbackRequest {
    type: string,
    comment: string,
    screenshot?: string
}

class SubmitFeedbackService {

    private feedbackRepository: IFeedbackRepository;
    private mailAdapter: IMailAdapter;

    constructor(feedbackRepository: IFeedbackRepository, mailAdapter: IMailAdapter) {
        this.feedbackRepository = feedbackRepository;
        this.mailAdapter = mailAdapter;
    }

    async execute (request: ISubmitFeedbackRequest) {
        const { type, comment, screenshot } = request;

        await this.feedbackRepository.create({
            type,
            comment,
            screenshot
        });

        await this.mailAdapter.sendMail({
            subject: "New Feedback",
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `</div>`
            ].join('\n')
        });
    }
}

export { SubmitFeedbackService }
