import { useEffect } from "react";
import { useRef, useState } from "react";

export default function useModal() {
  const [show, setShow] = useState(false);
  const nodeRef = useRef();

  useEffect(() => {
    const handleClickClose = (e) => {
      if (nodeRef.current && !nodeRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    window.addEventListener("click", handleClickClose);
    return () => {
      window.removeEventListener("click", handleClickClose);

    };
  });

  return {
    show,
    setShow,
    nodeRef,
  };
}
