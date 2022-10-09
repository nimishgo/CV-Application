import { Component } from "react";
import "normalize.css";
import "../styles/heading.css";

class Header extends Component {

  constructor(){
    super();
    this.title = "CV Creator"
  }

  render() {
    return <header className="Heading">{this.title}</header>
  }

}

export default Header;