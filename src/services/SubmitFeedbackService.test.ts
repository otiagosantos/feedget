import { SubmitFeedbackService } from "./SubmitFeedbackService";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackService(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
    it('Should be able to submit a feedback', async () => {
        await expect(
            submitFeedback.execute({
                type: 'BUG',
                comment: 'exemple comment',
                screenshot: 'data:image/png;base64;jfdjsafjasjfas'
            })
        ).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('Should not be able to submit without a type', async () => {
        await expect(
            submitFeedback.execute({
                type: '',
                comment: 'Any comment',
                screenshot: 'data:image/png;base64'
            })
        ).rejects.toThrow();
    });

    it('Show not be able submit without a comment', async () => {
        await expect(
            submitFeedback.execute({
                type: 'BUG',
                comment: '',
                screenshot: 'data:image/png;base64'
            })
        ).rejects.toThrow();
    });

    it('Show not be able submit without a invalid screenshot', async () => {
        await expect(
            submitFeedback.execute({
                type: 'BUG',
                comment: 'Any comment',
                screenshot: 'image.jpg'
            })
        ).rejects.toThrow();
    });
});
