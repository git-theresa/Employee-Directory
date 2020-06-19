import React, { Component } from "react";
import UserRow from "./components/UserRow";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";

import './App.css';
import API from "./utils/API.js";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    users: []
  };

  componentDidMount() {
     API.search()
      .then(res => this.setState({ users: res.data.results },()=>
      console.log(this.state)
      ))
      .catch(err => console.log(err));
  
  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
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
        {this.state.users.map(user => (
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


