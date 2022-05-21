interface IFeedbackCreate {
    type: string,
    comment: string,
    screenshot?: string
}

interface IFeedbackRepository {
    create: (data: IFeedbackCreate) => Promise<void>;
}

export { IFeedbackCreate, IFeedbackRepository }
