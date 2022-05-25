import { IMailAdapter } from "../adapters/IMailAdapter";
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

        if(!type) {
            throw new Error('Type is required.');
        }

        if(!comment) {
            throw new Error('Comment is required.');
        }

        if(screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('Invalis image format.');
        }

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
                screenshot ? `<a href="${screenshot}" target="blank_"><img src="${screenshot}" width="360px"/></a>` : '',
                `</div>`
            ].join('\n')
        });
    }
}

export { SubmitFeedbackService }
