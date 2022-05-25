import { feedbackTypes, FeedbackType } from "../";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProp {
    onFeedbackTypeChanged: (feedbackTypeKey: FeedbackType) => void
}

function FeedbackTypeStep(prop: FeedbackTypeStepProp) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>

                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                {
                    Object.entries(feedbackTypes).map(([key, item]) => {
                        return (
                            <button
                                key={key}
                                className="bg-zinc-800 rounded-lg py-2 w-24 flex-1 flex flex-col items-center border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                                onClick={() => prop.onFeedbackTypeChanged(key as FeedbackType)}
                            >
                                <img src={item.image.source} alt={item.image.alt} />
                                <span>{item.title}</span>
                            </button>
                        )
                    })
                }
            </div>
        </>
    );
}

export { FeedbackTypeStep }