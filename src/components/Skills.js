import { Component } from "react";
import uniqid from 'uniqid';
class Skills extends Component {
  constructor(props) {
    super(props);

    const {renderSkill} = props;

    this.state = {
      skills: [{
        skill : '',
        id: uniqid(),
      }]
      ,
      renderSkill
    }
  }

  deleteEntry = (e) => {
          console.log(e.target);
          const newArr = this.state.skills.filter((val,index) => (
              val.id !== e.target.id
          ));

          this.setState({
            skills: newArr,
          }) 

          this.state.renderSkill(newArr);
  };

  onChangeSkill = (e,index) => {
      console.log(e.target.value);
      const arr = [...this.state.skills];
      const {name,value} = e.target;
      console.log(name,value,arr,index);
      arr[index][name] = value;
      this.setState(arr);
      // (this.state.skill);
      this.state.renderSkill(arr);
    }

  render() {
    const {skills} = this.state;
    console.log(skills);
    return(
      <>
      <form>
      <fieldset className="field_set">
      <legend>Skills</legend>
      {skills.map((val,index) => (
      <div key={val.id}>
        <input 
          type="text" 
          name="skill" 
          className="skills" 
          placeholder="Add Skills" 
          value={val.skill}
          onChange={(e) => {this.onChangeSkill(e,index)}}
          />
        <div className="buttons">
        {
            index === skills.length - 1 &&
            <input 
              type="button" 
              className="button" 
              value="Add"
              onClick={() => {
                this.setState(
                  {
                    skills : [...skills,{
                              skill: '',
                              id: uniqid(), 
                            }],
                  }
                  );
              }}
              />
          }
          {
            index !== skills.length - 1 &&
            <input type="button" className="button" value="Remove" onClick={this.deleteEntry} id={val.id}/>
          }
        </div>
      
      </div>))}
      </fieldset>
      </form>
    </>
  )
  }

}
// kbd.styles``;

export default Skills;