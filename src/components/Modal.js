import React from "react";
import ReactDOM from "react-dom";
import History from "../history";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => History.push("/")}
      className="ui dimmer modals visible active"
    >
      <div className="ui standard modal visible active">
        <div className="header">Delete Stream</div>
        <div className="content">
          <p>Are you sure you want to delete this stream?</p>
        </div>
        <div className="actions">
          <div class="ui primary button">Approve</div>
          <div class="ui negative button">Cancel</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default Modal;
