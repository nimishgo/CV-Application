import { Component } from "react";
import "../styles/Cv.css";
import Basics from "./Basics";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";



class Cv extends Component {
  render() {
    return (
      <div className="info">
            <Basics/>
            <br />
            <Education />
            <br />
            <Experience />
            <br />
            <Projects />
            <br />
            <Skills />
        </div>
      );
    }
}

export default Cv;