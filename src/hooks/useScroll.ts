import { MutableRefObject, useEffect, useLayoutEffect, useRef, useState } from "react";

type UseScrollHook = {
    ref: MutableRefObject<HTMLElement|null>;
    top: Number;
}

export const useScroll = (): UseScrollHook => {
    const ref = useRef<HTMLElement|null>(null);
    const [top, setTop] = useState<Number>(9999);

    useLayoutEffect(() => {
        window.addEventListener('scroll', () => {
            if(ref.current != null){
                const { top: offsetTop } = ref.current.getBoundingClientRect();
                setTop(offsetTop);
            }
        });

        return () => {
            window.removeEventListener('scroll', () => {
                setTop(9999);
            });
        }

    }, []);

    return {
        ref,
        top
    }
}