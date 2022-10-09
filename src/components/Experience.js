import { Component } from "react";
import uniqid from 'uniqid';
// import experience from "./experience";
class Experience extends Component {
  constructor(props) {
    super(props);
    const {renderExperience } = props;
    this.state = {
      experience: [{ 
        companyName: '',
        position: '',
        city: '',
        from: '',
        to: '',
        description: '',
        id: uniqid(), 
      }],
      renderExperience
    }
  }

  deleteEntry = (e) => {
          console.log(e.target);
          const newArr = this.state.experience.filter((val,index) => (
              val.id !== e.target.id
          ));

          this.setState({
            experience: newArr,
          }) 

          this.state.renderExperience(newArr);
  };

  onChangeExp = (e,index) => {
      console.log(e.target.value);
      const arr = [...this.state.experience];
      const {name,value} = e.target;
      console.log(name,value,arr,index);
      arr[index][name] = value;
      this.setState(arr);
      // (this.state.experience);
      this.state.renderExperience(arr);
    }

  render() {
    const {experience} = this.state;
    console.log(experience);
    return(
      <>
      <form>
      <fieldset className="field_set">
      <legend>Experience</legend>
        {experience.map((val,index) => (
          <div key={val.id}>
            
        <input 
        type="text" 
        name="companyName" 
        className="name" 
        placeholder="Company Name" 
        value={val.companyName}
        onChange={(e) => {this.onChangeExp(e,index)}}
        />

        <input 
        type="text" 
        name="position" 
        className="name" 
        placeholder="Position"
        value={val.position}
        onChange={(e) => {this.onChangeExp(e,index)}}
        />
        <input 
        type="text" 
        name="city" 
        className="name" 
        placeholder="City Name"
        value={val.city}
        onChange={(e) => {this.onChangeExp(e,index)}}
        />
        <input 
          type="text" 
          name="from" 
          className="name" 
          placeholder="From" 
          value={val.from}
          onChange={(e) => {this.onChangeExp(e,index)}}
          />
        <input 
          type="text" 
          name="to" 
          className="name" 
          placeholder="To" 
          value={val.to}
          onChange={(e) => {this.onChangeExp(e,index)}}
          />
        <textarea 
          name="description" 
          id="desc" 
          rows="5" 
          placeholder="Add description" 
          maxLength="256"
          value={val.description}
          onChange={(e) => {this.onChangeExp(e,index)}}
          >
        </textarea>
        <div className="buttons">
          {
            index === experience.length - 1 &&
            <input 
              type="button" 
              className="button" 
              value="Add"
              onClick={() => {
                this.setState(
                  {
                    experience : [...experience,
                      { 
                        companyName: '',
                        position: '',
                        city: '',
                        from: '',
                        to: '',
                        description: '',
                        id: uniqid(), 
                      }],
                  }
                  );
              }}
              />
          }
          {
            index !== experience.length - 1 &&
            <input type="button" className="button" value="Remove" onClick={this.deleteEntry} id={val.id}/>
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
// kbd.styles``;

export default Experience;