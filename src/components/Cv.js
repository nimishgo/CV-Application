import { Component } from "react";
import "../styles/Cv.css";
import Basics from "./Basics";
import CvMain from "./CvMain";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import uniqid from 'uniqid';

class Cv extends Component {
  
  constructor() {
    super();
    this.state = {
      info: {
        name: '',
        email: '',
        git: '',
        linkedin: '',
        phone: '',
        id: uniqid(), 
      },
      education: [{
        collegeName: '',
        branch: '',
        degree: '',
        city: '',
        from: '',
        to: '',
        cgpa: '',
        id: uniqid(), 
      }]
      ,
      experience: [{
        companyName: '',
        position: '',
        city: '',
        from: '',
        to: '',
        description: '',
        id: uniqid(), 
      }],
      project: [{
        projectName: '',
        from: '',
        to: '',
        description: '',
        id: uniqid(), 
      }],
      skills: [{
        skill: '',
        id: uniqid(), 
      }]
    };
    console.log(this.state);
  }

  renderName = (e) => {
      console.log(e);
      this.setState({
        info: {
          name: e,
          email: this.state.info.email,
          git: this.state.info.git,
          linkedin: this.state.info.linkedin,
          phone: this.state.info.phone,
          id: this.state.info.id,
        }
      })
    }

  renderEmail = (e) => {
      console.log(e);
      this.setState({
        info: {
          name: this.state.info.name,
          email: e,
          git: this.state.info.git,
          linkedin: this.state.info.linkedin,
          phone: this.state.info.phone,
          id: this.state.info.id,
        }
      })
  }

    renderGit = (e) => {
      console.log(e);
      this.setState({
        info: {
          name: this.state.info.name,
          email: this.state.info.email,
          git: e,
          linkedin: this.state.info.linkedin,
          phone: this.state.info.phone,
          id: this.state.info.id,
        }
      })
  }


    renderLinkedin = (e) => {
      console.log(e);
      this.setState({
        info: {
          name: this.state.info.name,
          email: this.state.info.email,
          git: this.state.info.git,
          linkedin: e,
          phone: this.state.info.phone,
          id: this.state.info.id,
        }
      })
  }

    renderPhone = (e) => {
      console.log(e);
      this.setState({
        info: {
          name: this.state.info.name,
          email: this.state.info.email,
          git: this.state.info.git,
          linkedin: this.state.info.linkedin,
          phone: e,
          id: this.state.info.id,
        }
      })
  }

  renderEducation = (newArr) => {
      this.setState({ education: newArr})
      console.log(this.state.education);
  }

  renderExperience = (newArr) => {
      this.setState({ experience : newArr})
      console.log(this.state.experience);
  }


  renderProject = (newArr) => {
      this.setState({ project : newArr})
      console.log(this.state.project);
  }

  renderSkill = (newArr) => {
      this.setState({ skills : newArr})
      console.log(this.state.skills);
  }


  render() {
    return (
      <>
      <div className="info">
            <Basics 
              {...this.state} 
              renderName={this.renderName} 
              renderEmail={this.renderEmail}
              renderGit={this.renderGit}
              renderLinkedin={this.renderLinkedin}
              renderPhone={this.renderPhone}
              />
            <br />
            <Education renderEducation={this.renderEducation}/>
            <br />
            <Experience renderExperience={this.renderExperience}/>
            <br />
            <Projects renderProject={this.renderProject}/>
            <br />
            <Skills renderSkill={this.renderSkill}/>      
        </div>
        <div className="downloadCV">
          <CvMain {...this.state}/>
        </div>
      </>
      );
    }
}

export default Cv;