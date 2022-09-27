import React from "react";
import { useActions } from "../hooks/useActions";

const CreateButton: React.FC = () => {
  const { toggleModalAction } = useActions();

  const toggleModal = () => {
    toggleModalAction();
  };
  return (
    <div className="btn-create-note">
      <button
        type="button"
        className="btn btn-create-note"
        onClick={() => toggleModal()}
      >
        Create Note
      </button>
    </div>
  );
};

export default CreateButton;
