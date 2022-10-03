import { Component } from "react";

class Experience extends Component {
  // constructor() {
  //   super()
  // }
  render() {
    return(
      <>
      <form>
      <fieldset className="field_set">
      <legend>Experience</legend>
        <input type="text" name="company" className="name" placeholder="Company Name" />
        <input type="text" name="position" className="name" placeholder="Position" />
        <input type="text" name="city" className="name" placeholder="City Name" />
        <input type="text" name="from" className="name" placeholder="From" />
        <input type="text" name="to" className="name" placeholder="To" />
        <textarea name="description" id="desc" rows="5" placeholder="Add description" maxLength="256"></textarea>
      </fieldset>
      </form>
    </>
  )
  }

}
// kbd.styles``;

export default Experience;