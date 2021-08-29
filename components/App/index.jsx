import { Theme } from './Theme';
import {useEffect, useState} from "react";

const useScrollTrigger = (offset) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const onScroll = e => {
            if (window.scrollY >= offset) setActive(true);
            else setActive(false);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    });

    return active;
};

export { Theme, useScrollTrigger }
export default { Theme, useScrollTrigger }