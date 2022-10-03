import { Component } from "react";

class Education extends Component {
  // constructor() {
  //   super()
  // }
  render() {
    return(
      <>
      <form>
      <fieldset className="field_set">
      <legend>Education</legend>
        <input type="text" name="college" className="name" placeholder="College Name" />
        <input type="text" name="degree" className="name" placeholder="Degree" />
        <input type="text" name="branch" className="name" placeholder="City Name" />
        <input type="text" name="branch" className="name" placeholder="Branch" />
        <input type="text" name="from" className="name" placeholder="From" />
        <input type="text" name="to" className="name" placeholder="To" />
        <input type="text" name="cgpa" className="name" placeholder="CGPA" />
      </fieldset>
      </form>
    </>
  )
  }

}
// kbd.styles``;

export default Education;