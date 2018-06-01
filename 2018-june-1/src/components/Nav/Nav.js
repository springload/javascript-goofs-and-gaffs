import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="Nav">
        <div id="Nav_pages">{this.props.children}</div>
      </div>
    );
  }
}

export default Nav;
