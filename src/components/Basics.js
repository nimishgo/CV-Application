import { Component } from "react";
class Basics extends Component {

  constructor(props) {
    super(props);
    this.state = {...props};
    console.log(this.state);
  }

  renderChange = (e) => {
      this.setState({
        info: {
          name: e.target.value,
        }
      })
      this.state.renderName(e.target.value);
    }

    renderEmail = (e) => {
      this.setState({
        info: {
          email: e.target.value,
        }
      })
      this.state.renderEmail(e.target.value);
  }

    renderGit = (e) => {
      this.setState(
        {
          info: {
            git: e.target.value,
          }
        }
      )
      this.state.renderGit(e.target.value);
    }

    renderLinkedin = (e) => {
      this.setState(
        {
          info: {
            linkedin: e.target.value,
          }
        }
      )
      this.state.renderLinkedin(e.target.value);
    }

    renderPhone = (e) => {
      this.setState(
        {
          info: {
            phone: e.target.value,
          }
        }
      )
      this.state.renderPhone(e.target.value);
    }

  render() {

    const {info} = this.state;
    console.log(info);
    return(
      <>
      <form onSubmit={this.addtoArr}>
      <fieldset className="field_set">
      <legend>Basic Information</legend>
        <input 
          onChange={this.renderChange}
          value={info.name}
          type="text" 
          name="name" 
          className="name" 
          placeholder="Your full name"
          />
        <input
          onChange={this.renderEmail}
          value={info.email}
          type="text" 
          name="name" 
          className="name" 
          placeholder="Email eg. johndoe@gmail.com"
          />
        <input
          onChange={this.renderGit}
          value={info.git}
          type="text" 
          name="name" 
          className="name" 
          placeholder="Github link"
          />
        <input
          onChange={this.renderLinkedin}
          value={info.Linkedin} 
          type="text" 
          name="name" 
          className="name" 
          placeholder="Linkedin Link" 
          
          />
        <input
          onChange={this.renderPhone}
          value={info.phone} 
          type="text" 
          name="name" 
          className="name" 
          placeholder="Phone number" 
          />
      </fieldset>
      </form>
    </>
  );
  }
}
// export let arrOfInfo = [];
// console.log(arrOfInfo);
export default Basics;