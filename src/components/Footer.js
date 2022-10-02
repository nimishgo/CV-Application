import { Component } from "react";
import {FaGithub} from "react-icons/fa";
import "../styles/footer.css";
class Footer extends Component {
    constructor() {
      super();
      this.GitUrl = "https://github.com/nimishgo";
    }

    render() {
      return (
        <>
          <footer className="footer">Made by nimishgo&nbsp;<a rel="noreferrer" target="_blank" href={this.GitUrl}>
            <FaGithub/>
            </a>
            </footer>
        </>
      )
    }
}

export default Footer;