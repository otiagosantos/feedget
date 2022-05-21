import { useState } from "react"
import { CloseButton } from "../CloseButton"
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";

import Bug from "../../assets/Bug.svg";
import Idea from "../../assets/Idea.svg";
import Thought from "../../assets/Thought.svg";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";

const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: Bug,
            alt: "BUG"
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: Idea,
            alt: "IDEA"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: Thought,
            alt: "OTHER"
        }
    },
}

type FeedbackType = keyof typeof feedbackTypes;

function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);

    const handleFeedbackRestart = () => {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

        { feedbackSent ? (
            <FeedbackSuccessStep onHandleFeedbackRestart={handleFeedbackRestart} />
        ) : (
            <>
                {
                    !feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                    <FeedbackContentStep
                            selectedFeedbackType={feedbackType}
                            onHandleFeedbackRestart={handleFeedbackRestart}
                            onFeedbackSent={() => setFeedbackSent(true) }
                        />
                    )
                }
            </>
        )}

            <footer className="text-xs text-neutral-400">
                Feito com &#9829; por <a className="underline underline-offset-2" href="https://github.com/otiagosantos" target={"_blank"}>Tiago Santos</a>
            </footer>
        </div>
    )
}

export { WidgetForm, feedbackTypes }

export type { FeedbackType }