import React from "react";

import "./Modal.css";

function Modal(props) {
  const handleModalClick = () => {
    if (props.onClose) props.onClose();
  };

  return (
    <div className="modal" onClick={handleModalClick}>
      <div
        className={"modal_container"}
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
