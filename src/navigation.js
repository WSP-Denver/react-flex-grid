import React, {Component} from "react";

class Navigation extends Component {
  render() {
    var navStyles = {
      display: "inline-block",
      float: "right"
    };
    return (
      <nav className="main-nav" style={navStyles} >
        <ul>
          <li>
            <a href="/" >Home</a>
          </li>
          <li>
            <a href="" >Item Two</a>
          </li>
          <li>
            <a href="" >Item Three</a>
          </li>
          <li>
            <a href="" >Item Four</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
