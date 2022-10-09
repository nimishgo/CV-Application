import { Component } from "react";
import uniqid from "uniqid";
class Education extends Component {
  
  constructor(props) {
    super(props);
    const {renderEducation } = props;
    console.log(renderEducation);
    this.state = {
    education: [{
      collegeName: '',
      degree: '',
      branch: '',
      city: '',
      from: '',
      to: '',
      cgpa: '',
      id: uniqid()
    }],
    renderEducation
  };
    console.log(this.state);
  }

  deleteEntry = (e) => {
          console.log(e.target);
          const newArr = this.state.education.filter((val,index) => (
              val.id !== e.target.id
          ));

          this.setState({
            education: newArr,
          }) 

          this.state.renderEducation(newArr);
  };

  onChangeEdu = (e,index) => {
      console.log(e.target.value);
      const arr = [...this.state.education];
      const {name,value} = e.target;
      console.log(name,value,arr,index);
      arr[index][name] = value;
      this.setState(arr);
      // (this.state.education);
      this.state.renderEducation(arr);
    }

  render() {
    const {education} = this.state;
    console.log(education);
    return(
      <>
      <form>
      <fieldset className="field_set">
      <legend>Education</legend>
        {education.map((val,index) => (
          <div key={val.id}>

          <input 
            type="text" 
            name="collegeName" 
            placeholder="College Name" 
            value={val.collegeName}
            onChange={(e) => {this.onChangeEdu(e,index)}}
            />
          <input 
            type="text" 
            name="degree" 
            placeholder="Degree"
            onChange={(e) => {this.onChangeEdu(e,index)}}
            value={val.degree}
            />
          <input 
            type="text" 
            name="city" 
            placeholder="City Name" 
            onChange={(e) => {this.onChangeEdu(e,index)}}
            value={val.city}
            />
          <input 
            type="text" 
            name="branch" 
            placeholder="Branch" 
            onChange={(e) => {this.onChangeEdu(e,index)}}
            value={val.branch}
            />
          <input 
            type="text" 
            name="from" 
            placeholder="From" 
            onChange={(e) => {this.onChangeEdu(e,index)}}
            value={val.from}
            />
          <input 
            type="text" 
            name="to" 
            placeholder="To" 
            onChange={(e) => {this.onChangeEdu(e,index)}}
            value={val.to}
            />
          <input 
            type="text" 
            name="cgpa" 
            placeholder="CGPA" 
            onChange={(e) => {this.onChangeEdu(e,index)}}
            value={val.cgpa}
            />
          <div className="buttons">
          { index === education.length - 1 &&
            <input 
            type="button" 
            value="Add"
            onClick={() => {
                this.setState(
                  {
                    education : [...education,{branch:"",cgpa:"",city: "",collegeName: "",degree: "",from: "",to: "",id:uniqid()}],
                  }
                  );
              }}
              />
          }  
          {
            index !== education.length - 1 &&
            <input type="button" value="Remove"  onClick={this.deleteEntry} id={val.id}/>
          }
          </div>
          </div>
        ))
        }
      </fieldset>
      </form>
    </>
  )
  }

}

export default Education;