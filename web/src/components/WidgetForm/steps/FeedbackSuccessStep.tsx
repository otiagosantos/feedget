import { CloseButton }  from "../../CloseButton";

import Success from "../../../assets/Success.svg";

interface FeedbackSuccessStepProp {
    onHandleFeedbackRestart: () => void;
}

function FeedbackSuccessStep (prop: FeedbackSuccessStepProp) {
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <img src={Success} alt="Success" />

            <span className="text-xl mt-2">
                Agradecemos o feedback
            </span>

            <button
                type="button"
                className="py-2 px-6 my-6 bg-zinc-800 rounded-[4px] border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
                onClick={prop.onHandleFeedbackRestart}
            >
                Quero enviar outro
            </button>
        </>
    );
}

export { FeedbackSuccessStep }