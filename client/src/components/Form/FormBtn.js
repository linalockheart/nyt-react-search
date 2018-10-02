import React from "react";
import "./FormBtn.css";

export const FormBtn = props => (
  <button {...props} className="btn btn-success">
    {props.children}
  </button>
);