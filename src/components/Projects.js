import { Component } from "react";
import uniqid from 'uniqid';
class Projects extends Component {
  constructor(props) {
    super(props);
    const {renderProject} = props;
    this.state = {
    
    project: [{
        projectName: '',
        from: '',
        to: '',
        description: '',
        id: uniqid(), 
      }],
      renderProject
    }
  }

  deleteEntry = (e) => {
          console.log(e.target);
          const newArr = this.state.project.filter((val,index) => (
              val.id !== e.target.id
          ));

          this.setState({
            project: newArr,
          }) 

          this.state.renderProject(newArr);
  };

  onChangePro = (e,index) => {
      console.log(e.target.value);
      const arr = [...this.state.project];
      const {name,value} = e.target;
      console.log(name,value,arr,index);
      arr[index][name] = value;
      this.setState(arr);
      // (this.state.project);
      this.state.renderProject(arr);
    }

  render() {
    const {project} = this.state;
    console.log(project);
    return(
      <>
      <form>
      <fieldset className="field_set">
      <legend>Projects</legend>
      {project.map((val,index) => (
      <div key={val.id}>
        <input 
          type="text" 
          name="projectName" 
          className="name" 
          placeholder="Project Name" 
          value={val.projectName}
          onChange={(e) => {this.onChangePro(e,index)}}
        />
        <input 
          type="text" 
          name="from" 
          className="name" 
          placeholder="From"
          value={val.from}
          onChange={(e) => {this.onChangePro(e,index)}}
          />
        <input 
          type="text" 
          name="to" 
          className="name" 
          placeholder="To"
          value={val.to}
          onChange={(e) => {this.onChangePro(e,index)}} 
        />
        <textarea 
          name="description" 
          id="desc" rows="5" 
          placeholder="Add description" 
          maxLength="256"
          value={val.description}
          onChange={(e) => {this.onChangePro(e,index)}}
          >

        </textarea>
        <div className="buttons">
        {
            index === project.length - 1 &&
            <input 
              type="button" 
              className="button" 
              value="Add"
              onClick={() => {
                this.setState(
                  {
                    project : [...project,{
                              projectName: '',
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
            index !== project.length - 1 &&
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

export default Projects;