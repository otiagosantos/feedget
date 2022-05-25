import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { api } from "../../../services/api";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";
import { Loading } from '../Loading';

interface FeedbackContentStepProp {
    selectedFeedbackType: FeedbackType;
    onHandleFeedbackRestart: () => void;
    onFeedbackSent: () => void;
}

function FeedbackContentStep (prop: FeedbackContentStepProp) {
    const selectedFeedbackType = feedbackTypes[prop.selectedFeedbackType];
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState<string>('');
    const [isSomethingLoading, setIsSomethindLoading] = useState<boolean>(false);
    const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false);

    async function handleSubmit (event: FormEvent) {
        event.preventDefault();
        setIsSendingFeedback(true);

        console.log(
            screenshot,
            comment
        );

        await api.post('/feedbacks', {
            type: prop.selectedFeedbackType,
            comment,
            screenshot
        });

        setComment('');
        setScreenshot(null);
        prop.onFeedbackSent();
        setIsSendingFeedback(false);
    }

    return (
        <>
            <header>
                <button className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" onClick={prop.onHandleFeedbackRestart}>
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img className="w-6 h-6" src={selectedFeedbackType.image.source} alt={selectedFeedbackType.title} />
                    {selectedFeedbackType.title}
                </span>

                <CloseButton />
            </header>

            <form onSubmit={handleSubmit} className="my-4 w-full">
                <textarea 
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scroll-thin"
                    placeholder="Conte com detalhes o que esta acontecendo..."
                    onChange={(event) => setComment(event.target.value)}
                />

                <footer className="flex gap-2 mt-2">
                    
                    <ScreenshotButton
                        onScreenshot={setScreenshot}
                        screenshot={screenshot}
                        onLoading={setIsSomethindLoading}
                    />

                    <button
                        type="submit"
                        className="p-2 bg-brand-500 rounded-[4px] border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-not-allowed"
                        disabled={comment.length === 0 || isSomethingLoading || isSendingFeedback}
                    >
                        { isSendingFeedback ? <Loading /> : 'Enviar Feedback' }
                    </button>
                </footer>
            </form>
        </>
    )
}

export { FeedbackContentStep } 
