import React from "react";
import FocusLock from "react-focus-lock";
import { RemoveScrollBar } from "react-remove-scroll-bar";

const Modal = () => {
  const closeBtnRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    const currentlyFocusELement = document.activeElement;
    closeBtnRef.current?.focus();

    return () => {
      currentlyFocusELement?.focus();
    };
  }, []);

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === "Escape") {
        //
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <FocusLock>
      <RemoveScrollBar />
      <div className="relative z-10">
        <div className="fixed inset-0 bg-indigo-300 bg-opacity-75 transition-opacity"></div>
        <button ref={closeBtnRef}>close</button>
      </div>
    </FocusLock>
  );
};

export default Modal;
