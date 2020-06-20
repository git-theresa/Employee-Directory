import React from "react";
import "./style.css";

// class Form extends Component {
  export default function Form (props) {

  
  // constructor(props){
  //   super(props);
  //   this.state = {search: ""}
  // };
      //  render() {
     return (
       <div>
           <form className="form">
          <input
            value={props.search}
            // {this.state.firstName || this.state.lastName}
            name="search"
            onChange={props.handleInputChange}
             type="text"
            placeholder="Search"
          />
             </form>
    </div>
    );
  }
  // }


// export default Form;
