import uniqid from "uniqid";

const example =  {
      info: {
        name: 'Neko Neko Cat',
        email: 'neko@hotmail.com',
        git: 'github.com/neko1723#',
        linkedin: 'linkedin.com/neko-111',
        phone: '+121 314591',
        id: uniqid(), 
      },
      education: [{
        collegeName: 'Meow University',
        branch: 'Mathematics and Meowism',
        degree: 'BS',
        city: 'Kyoto',
        from: '2017',
        to: '2021',
        cgpa: '4.00/4.00',
        id: uniqid(), 
      } , {
        collegeName: 'Random College',
        branch: 'CS and Arts',
        degree: 'HSC',
        city: 'meowTown',
        from: '2015',
        to: '2017',
        cgpa: '99%',
        id: uniqid(), 
      }]
      ,
      experience: [{
        companyName: 'Animal Farm',
        position: 'CEO',
        city: 'London',
        from: '2020',
        to: '2022',
        description: 'Neko organized all the animals and kicked out Mr. Jones the previous owner. She estabilshed a catmunist regime the regime lived shortly and the whole economy collapsed leading to her resignation.',
        id: uniqid(), 
      } , {
        companyName: 'CoinCat',
        position: 'Founder/CEO',
        city: 'Bangalore',
        from: '2023',
        to: '2025',
        description: 'Neko founded the crypotcurrency exchange startup. We created our own crypto cat coin because of the growing popularity of dogecoins. The startup has to be closed because of low liquidity.',
        id: uniqid(), 
      }],
      project: [{
        projectName: 'Global Cat Brain',
        from: '2025',
        to: '????',
        description: 'Inspired by Nick Land Accelarationist philosophy.The goal is to create a AGI who will serve the needs of cats and the cats to become the new god of this world',
        id: uniqid(), 
      } , {
        projectName: 'The Cat Society and its future',
        from: 'June',
        to: '2018',
        description: 'Shit Post Social Media site for cats using MERN Stack. Inspired by the philosophy of ted catyzynski',
        id: uniqid(), 
      } , {
        projectName: 'Cat Maps',
        from: 'November',
        to: '2018',
        description: 'Cat Maps was build using react js using Django as backend.Its goal is to provide secure and safe cat trails for the cat users.',
        id: uniqid(), 
      }],
      skills: [{
        skill: 'Machine Learning, IOT, Deep Learning, Quantum Communication, Web Development',
        id: uniqid(), 
      }, 
      {
        skill: 'Programming: Js, html/css, reactJs, C/Cpp, rust, go, python',
        id: uniqid(), 
      },
      {
        skill: 'Tools: Excel,tableu,airtable,vim,vscode,linux',
        id: uniqid(), 
      }
    ]
}

export default example;