import { Camera, Trash } from "phosphor-react";
import html2cavas from "html2canvas";
import { useState } from "react";
import { Loading } from "./Loading";

interface ScreenshotButtonProp {
    onScreenshot: (screenshot: string | null) => void;
    screenshot: string | null;
    onLoading?: (isLoading: boolean) => void;
}

function ScreenshotButton (prop: ScreenshotButtonProp) {
    const [isTakingShot, setIsTakingShot] = useState(false);

    function handleIsTakingShot(isTakingShot: boolean) {
        setIsTakingShot(isTakingShot);
        if(prop.onLoading) {
            prop.onLoading(isTakingShot);
        }
    }

    async function handleTakeScreenshot() {
        handleIsTakingShot(true);

        const canvas = await html2cavas(document.querySelector("html")!);
        const base64image = canvas.toDataURL('image/png');

        prop.onScreenshot(base64image);

        handleIsTakingShot(false);
    }

    if(prop.screenshot) {
        return(
            <button
                type="button"
                className="p-1 w-10 h-10 rounded-[4px] flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
                style={
                    {
                        backgroundImage: `url(${prop.screenshot})`,
                    }
                }
                onClick={() => prop.onScreenshot(null)}
            >
                <Trash weight="fill" />
            </button>
        );
    }

    return (
        <button
            type="button"
            className="p-2 bg-zing-800 rounded-[4px] border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
            onClick={handleTakeScreenshot}
        >
            { isTakingShot ? <Loading /> : <Camera className="w-6 h-6" /> }
        </button>
    );
}

export { ScreenshotButton }