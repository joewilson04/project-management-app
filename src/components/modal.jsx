import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
        //console.log("test");
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="p-10 rounded-md">
      {children}
      <form method="dialog">
        <button className="absolute bottom-1 right-1 h-8 w-12 ... m-2 rounded bg-stone-800 text-stone-50 hover:bg-stone-600 hover:text-stone-300">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
