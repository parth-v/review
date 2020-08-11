import React from "react";
import avatar from '../../img/avatar.jpg'; 

export default function Comment(props) {
  const { name, message, time } = props.comment;
  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-dark border border-primary rounded"
        width="48"
        height="48"
        src={avatar}
        alt={name}
      />

      <div className="media-body p-2 shadow-sm rounded bg-light border border-secondary">
        <small className="float-right text-muted">{time}</small>
        <h6 className="float-left mt-0 mb-1 text-muted">{name}</h6>
        <br/>
        <p className="float-left text-left">{message}</p>
      </div>
    </div>
  );
}
