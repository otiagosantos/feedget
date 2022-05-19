import { IFeedbackRepository } from "../repositories/IFeedbackRepository";

interface ISubmitFeedbackRequest {
    type: string,
    comment: string,
    screenshot?: string
}

class SubmitFeedbackService {

    private feedbackRepository: IFeedbackRepository;

    constructor(feedbackRepository: IFeedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    async execute (request: ISubmitFeedbackRequest) {
        const { type, comment, screenshot } = request;

        await this.feedbackRepository.create({
            type,
            comment,
            screenshot
        });
    }
}

export { SubmitFeedbackService }
