import React from "react";

const Modal = props => {
  console.log(props);
  return (
    <div className="modal" onClick={props.closeModal}>
      <span> &times; </span>
      <div className="inner-modal">
        <div className="modal-image">
          <img src={props.item.urls.regular} alt="" srcset="" />
        </div>
        <div className="modal-text">
          <h2>
            {props.item.user.first_name + " " + props.item.user.last_name}
          </h2>
          <h4>{props.item.user.location}</h4>
        </div>
      </div>
    </div>
    // <div />
  );
};

export default Modal;
