import React, { Component } from "react";

export default class user extends Component {
  componentWillMount() {
    alert("called");
  }

  render() {
    return (
      <div>
        <ul>
          <li>name:manoj</li>
          <li>email:mj@gmail.com</li>
          <li>contact:11111</li>
        </ul>
      </div>
    );
  }
}
