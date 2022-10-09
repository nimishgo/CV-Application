import uniqid from "uniqid";

const empytExample =  {
      info: {
        name: '',
        email: '',
        git: '',
        linkedin: '',
        phone: '',
        id: uniqid(), 
      },
      education: [{
        collegeName: '',
        branch: '',
        degree: '',
        city: '',
        from: '',
        to: '',
        cgpa: '',
        id: uniqid(), 
      }]
      ,
      experience: [{
        companyName: '',
        position: '',
        city: '',
        from: '',
        to: '',
        description: '',
        id: uniqid(), 
      }],
      project: [{
        projectName: '',
        from: '',
        to: '',
        description: '',
        id: uniqid(), 
      }],
      skills: [{
        skill: '',
        id: uniqid(), 
      }]
}

export default empytExample;