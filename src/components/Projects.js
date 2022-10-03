import { Component } from "react";

class Projects extends Component {
  // constructor() {
  //   super()
  // }
  render() {
    return(
      <>
      <form>
      <fieldset className="field_set">
      <legend>Projects</legend>
        <input type="text" name="project" className="name" placeholder="Project Name" />
        <input type="text" name="from" className="name" placeholder="From" />
        <input type="text" name="to" className="name" placeholder="To" />
        <textarea name="description" id="desc" rows="5" placeholder="Add description" maxLength="256" ></textarea>
      </fieldset>
      </form>
    </>
  )
  }

}
// kbd.styles``;

export default Projects;