import React from 'react';

const CvMain = ({info}) => {
  const {name,email,git,linkedin,phone} = info;
  return (
    <>
      <section className="cvMain">
              <article>
                <p>Name: {name}</p>
                <p>Email : {email}</p>
                <p>github : {git} </p>
                <p> linkedin : {linkedin}</p>
              <p> phone : {phone}</p>
              </article> 
      </section>
    </>
  )
}

export default CvMain;