import { Component } from "react";

class Basics extends Component {
  // constructor() {
  //   super()
  // }
  render() {
    return(
      <>
      <form>
      <fieldset className="field_set">
      <legend>Basic Information</legend>
        <input type="text" name="name" className="name" placeholder="Your full name" />
        <input type="text" name="name" className="name" placeholder="Email eg. johndoe@gmail.com" />
        <input type="text" name="name" className="name" placeholder="Github link" />
        <input type="text" name="name" className="name" placeholder="Linkedin Link" />
        <input type="text" name="name" className="name" placeholder="Phone number" />
      </fieldset>
      </form>
    </>
  )
  }

}
// kbd.styles``;

export default Basics;