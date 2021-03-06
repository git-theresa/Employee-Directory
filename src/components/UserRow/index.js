import React from "react";
import "./style.css";

// UserRow.js is the table Heading with {props.TableHeading}

function UserRow(props) {
  return (
    <tr>
      <th scope="row"> <img src={props.image} alt ="profile pic"></img>
      </th>
      <td><strong></strong> {props.name}</td>
      <td><strong></strong> {props.phone}</td>
      <td><strong></strong> {props.email}</td>
    </tr>
   
  );
}

export default UserRow;
