import { prisma } from "../../prisma";
import { IFeedbackCreate, IFeedbackRepository } from "../IFeedbackRepository";


class PrismaFeedbackRepository implements IFeedbackRepository {
    async create(data: IFeedbackCreate) {
        await prisma.feedback.create({
            data: {
                type: data.type,
                comment: data.comment,
                screenshot: data.screenshot
            }
        });
    }
}

export { PrismaFeedbackRepository }
