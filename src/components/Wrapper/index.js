import React from "react";
import "./style.css";

// Wrapper.js "wraps" all props 

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
