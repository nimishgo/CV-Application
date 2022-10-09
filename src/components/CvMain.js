import React from 'react';
import {FiMail,FiGithub , FiLinkedin , FiPhone } from 'react-icons/fi'
const CvMain = ({info,education,experience,project,skills}) => {
  const {name,email,git,linkedin,phone} = info;
  console.log(project);
  return (
    <>
      <section className="cvMain">
              <article className='personals' key='personals'>
                <h1 className='heading'>{name}</h1>
                <div className="links">
                <span> <FiMail/> : {email}</span>
                <span> <FiGithub /> : {git} </span>
                <span> <FiLinkedin/>  : {linkedin}</span>
                <span> <FiPhone />  : {phone}</span>
                </div>
              </article> 
              <article className="education">
                <h2>Education</h2>
                {education.map((val,index) => (
                  <div className="education" key={val.id}>
                    <h3 className='collegeName'><div>
                      <strong>
                      {val.collegeName}
                      </strong>
                      &thinsp;,&thinsp;
                      {val.city}
                    </div>
                    <div>{val.from} - {val.to}</div></h3>
                    <h4>{val.degree}&thinsp;,&thinsp; {val.branch}</h4>
                    <h4>{val.cgpa}</h4>
                  </div>
                ))}
              </article>
              <article className="experience">
                <h2>Experience</h2>
                {experience.map((val,index) => (
                  <div className="experience" key={val.id}>
                    <h3 className='collegeName'><div>
                      <strong>
                      {val.companyName} &thinsp;,&thinsp; {val.position}
                      </strong>
                    </div>
                    <div>{val.from} - {val.to}</div></h3>
                      <h3>{val.city} </h3>
                    <p className='textArea'>{val.description}</p>
                  </div>
                ))}
              </article>
              <article className="project">
                <h2>Projects</h2>
                {project.map((val,index) => (
                  <div className="project" key={val.id}>
                    <h3 className='projectName'><div>
                      <strong>
                      {val.projectName}
                      </strong>
                    </div>
                    <div>{val.from} - {val.to}</div>
                    </h3>
                    <p className='textArea'>{val.description}</p>
                  </div>
                ))}
              </article>
              
              <article className="skills">
                <h2>Skills</h2>
                {skills.map((val,index) => (
                  <div className="project" key={val.id}>
                    <h3 className='projectName'><div>
                      <strong>
                      {val.skill}
                      </strong>
                    </div>
                    </h3>
                  </div>
                ))}
              </article>

      </section>
    
    </>
  )
}

export default CvMain;