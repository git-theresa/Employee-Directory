import React, { Component } from "react";
import UserRow from "./components/UserRow";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import Form from "./components/Form";

import './App.css';
import API from "./utils/API.js";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    users: [],
    search: ""
  };

  componentDidMount() {
     API.search()
      .then(res => this.setState({ users: res.data.results },()=>
      console.log(this.state)
      ))
      .catch(err => console.log(err));
  
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

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Form 
         search ={this.state.search}
         handleInputChange = {this.handleInputChange} 
        />
        {/* <Title>NavBar</Title> */}
        <table className="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
    </tr>
  </thead><tbody>

        {this.state.users.filter(user => user.name.first.toLowerCase().includes(this.state.search.toLowerCase())).map(user => (
          <UserRow
          key = {user.login.uuid}
          name = {user.name.first + " " + user.name.last}
          phone = {user.phone}
          email = {user.email}
          image = {user.picture.thumbnail}
          />
        ))}
        </tbody>
        </table>
      </Wrapper>
    );
  }
}

export default App;


