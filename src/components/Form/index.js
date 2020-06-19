import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  state = {
    firstName: "",
    lastName: ""
  };

  handleInputChange = event => {
    console.log(event)
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSearch = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.setState({
      name: ""
    });
};
      render() {
     return (
       <div>
           <form className="form">
          <input
            value={this.state.firstName || this.state.lastName}
            search ={this.state.search}
            name="name"
            onChange={this.handleInputChange}
             type="text"
            placeholder="Search"
          />
             </form>
    </div>
    );
  }

}

export default Form;
