import { MouseEventHandler } from "react";

const EditButton = (modalId: any, onSelectedItem: MouseEventHandler<HTMLButtonElement> | undefined) => {
  return (
    <>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
        onClick={onSelectedItem}
        className="btn btn-sm bg-primary text-white">
        <i className="ri ri-pencil-line"></i>

      </button>
    </>
  );
};

export default EditButton;
