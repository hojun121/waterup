import React from "react";

export const useOnLoadImages = (ref: React.RefObject<HTMLElement>) => {
    const [status, setStatus] = React.useState(false);

    React.useEffect(() => {
        const updateStatus = (images: HTMLImageElement[]) => {
            setStatus(
                images.map((image) => image.complete).every((item) => item)
            );
        };

        if (!ref?.current) return;

        const imagesLoaded = Array.from(ref.current.querySelectorAll("img"));

        if (imagesLoaded.length === 0) {
            setStatus(true);
            return;
        }

        imagesLoaded.forEach((image) => {
            image.addEventListener("load", () => updateStatus(imagesLoaded), {
                once: true
            });
            image.addEventListener("error", () => updateStatus(imagesLoaded), {
                once: true
            });
        });

        return;
    }, [ref]);

    return status;
};