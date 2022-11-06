import { useEffect, useRef, useState } from 'react';

export default function useToggle() {
    const [onToggle, setOnToggle] = useState(false);
    const nodeRef = useRef();
    const nodeContentRef = useRef();

    const setToggle = () => {
        setOnToggle(!onToggle);
    };
    function getToggleProps({ onClick, ...rest }) {
        return {
            onClick: () => {
                onClick && onClick();
                setToggle();

            },
            ...rest
        };
    }

    useEffect(() => {
        nodeContentRef.current.style.overflow = "hidden";
        nodeContentRef.current.style.maxHeight = "0px";
        nodeContentRef.current.style.transition = "all 600ms ease-in-out";
    }, []);

    useEffect(() => {

        if (onToggle) {
            nodeContentRef.current.style.maxHeight = `${nodeContentRef.current.scrollHeight}px`;
            if (nodeContentRef.current.classList.contains("relicData__content")) {
                nodeContentRef.current.style.marginTop = "16px";
            }

        } else {
            nodeContentRef.current.style.maxHeight = `0px`;
            if (nodeContentRef.current.classList.contains("relicData__content")) {
                nodeContentRef.current.style.marginTop = "0px";
            }
        }

    }, [onToggle]);

    return (
        {
            nodeRef,
            nodeContentRef,
            onToggle,
            getToggleProps,
        }
    );
}
