import React from 'react';
import {FiMail,FiGithub , FiLinkedin , FiPhone } from 'react-icons/fi'
const CvMain = ({info,education,experience}) => {
  const {name,email,git,linkedin,phone} = info;
  console.log(education);
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
                      {val.city}
                    </div>
                    <div>{val.from} - {val.to}</div></h3>
                    <p>{val.description}</p>
                  </div>
                ))}
              </article>
      </section>
    
    </>
  )
}

export default CvMain;