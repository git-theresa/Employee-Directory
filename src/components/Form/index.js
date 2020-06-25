import React from "react";
import "./style.css";

export default function Form(props) {
  return (
    <div>
      <form className="form">
        <input
          // This searches the value of {this.state.firstName || this.state.lastName}
          value={props.search}
          name="search"
          onChange={props.handleInputChange}
          type="text"
          placeholder="Search"
        />
      </form>
    </div>
  );
}

// export default Form is not needed because we are exporting default function Form
