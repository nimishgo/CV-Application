import { Component } from "react";

class Skills extends Component {
  // constructor() {
  //   super()
  // }
  render() {
    return(
      <>
      <form>
      <fieldset className="field_set">
      <legend>Skills</legend>
        <input type="text" name="skills" className="skills" placeholder="Add Skills" />
      </fieldset>
      </form>
    </>
  )
  }

}
// kbd.styles``;

export default Skills;