import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import NoteForm from "./NoteForm";

const Modal = () => {
  const { modalClosed } = useTypedSelector((state) => state.note);
  const { toggleModalAction, resetNoteFormAction } = useActions();

  const toggleModal = () => {
    toggleModalAction();
  };

  useEffect(() => {
    if (modalClosed === true) {
      resetNoteFormAction();
    }
  }, [modalClosed]);

  let closed = modalClosed && " closed";
  return (
    <>
      <div className={`modal ${closed}`}>
        <h3>Create note</h3>
        <button className="close-button" onClick={() => toggleModal()}>
          Close
        </button>
        <NoteForm />
      </div>
      <div
        className={`modal-overlay ${closed}`}
        onClick={() => toggleModal()}
      ></div>
    </>
  );
};

export default Modal;
