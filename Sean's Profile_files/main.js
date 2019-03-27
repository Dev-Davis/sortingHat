
const printToDom = (divId, textToPrint) => {
  selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += textToPrint;
}

let projects = [
{
   title: "Project 1", 
   screenshot: "../../Default-welcomer.png", 
   description: "This is the best damn project", // A good project description includes 'the what', 'the why', and 'the how'.
   technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
   available: true,
   url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
   githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
   title: "Project 2", 
   screenshot: "../../Default-welcomer.png", 
   description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
   technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
   available: true,
   url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
   githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
   title: "Project 3", 
   screenshot: "../../Default-welcomer.png", 
   description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
   technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
   available: true,
   url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
   githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    
    }
];

//Project cards on page
const createProjectCards = () => {

  let info = '';
  
    for(let i = 0; i < projects.length; i++) {
      info += `<div class="makeCards">`
      info +=   `<h2>${projects[i].title}</h2>`; 
      info +=   `<p><img class="cardImg" src="${projects[i].screenshot}"></p>`;
      info +=   `<p class="proj">${projects[i].description}</p>`; 
      info +=   `<p>${projects[i].technologiesUsed}</p>`; 
      info +=   `<p>${projects[i].available}</p>`;
      info +=   `<p><a href="${projects[i].url}">Project 1</a></p>`;
      info +=   `<a href="${projects[i].githubUrl}">Sean's gitHub</a>`;
      info += `</div>`
    }
    printToDom('projectsPage', info);
  }

let bio = [
  {
    background: "What is your background?",
    backgroundA: "Currently, I'm working for THE MAN. lol. I, programming wise, have tinkered with a handful of technologies. I've dabbled in HTML, CSS, JavaScript, jQuery, C#, Angular, and databases. I'm looking into growing from what I already know, and learning what I don't know to be the best programmer I can be.Currently, I'm working for THE MAN. lol. I, programming wise, have tinkered with a handful of technologies. I've dabbled in HTML, CSS, JavaScript, jQuery, C#, Angular, and databases. I'm looking into growing from what I already know, and learning what I don't know to be the best programmer I can be.Currently, I'm working for THE MAN. lol. I, programming wise, have tinkered with a handful of technologies. I've dabbled in HTML, CSS, JavaScript, jQuery, C#, Angular, and databases. I'm looking into growing from what I already know, and learning what I don't know to be the best programmer I can be.Currently, I'm working for THE MAN. lol. I, programming wise, have tinkered with a handful of technologies. I've dabbled in HTML, CSS, JavaScript, jQuery, C#, Angular, and databases. I'm looking into growing from what I already know, and learning what I don't know to be the best programmer I can be.Currently, I'm working for THE MAN. lol. I, programming wise, have tinkered with a handful of technologies. I've dabbled in HTML, CSS, JavaScript, jQuery, C#, Angular, and databases. I'm looking into growing from what I already know, and learning what I don't know to be the best programmer I can be.Currently, I'm working for THE MAN. lol. I, programming wise, have tinkered with a handful of technologies. I've dabbled in HTML, CSS, JavaScript, jQuery, C#, Angular, and databases. I'm looking into growing from what I already know, and learning what I don't know to be the best programmer I can be.",
    developInterest: "Why do you want to go into development?",
    developInterestA: "I got into development through a movie called 'The Social Network'. I paid attention to that movie closely and studied development closely. I was late to the table, but better late than never. Never late is better.I got into development through a movie called 'The Social Network'. I paid attention to that movie closely and studied development closely. I was late to the table, but better late than never. Never late is better.I got into development through a movie called 'The Social Network'. I paid attention to that movie closely and studied development closely. I was late to the table, but better late than never. Never late is better.I got into development through a movie called 'The Social Network'. I paid attention to that movie closely and studied development closely. I was late to the table, but better late than never. Never late is better.I got into development through a movie called 'The Social Network'. I paid attention to that movie closely and studied development closely. I was late to the table, but better late than never. Never late is better.I got into development through a movie called 'The Social Network'. I paid attention to that movie closely and studied development closely. I was late to the table, but better late than never. Never late is better.I got into development through a movie called 'The Social Network'. I paid attention to that movie closely and studied development closely. I was late to the table, but better late than never. Never late is better.I got into development through a movie called 'The Social Network'. I paid attention to that movie closely and studied development closely. I was late to the table, but better late than never. Never late is better.I got into development through a movie called 'The Social Network'. I paid attention to that movie closely and studied development closely. I was late to the table, but better late than never. Never late is better.I got into development through a movie called 'The Social Network'. I paid attention to that movie closely and studied development closely. I was late to the table, but better late than never. Never late is better.I got into development through a movie called 'The Social Network'. I paid attention to that movie closely and studied development closely. I was late to the table, but better late than never. Never late is better.",
    developLove: "What do you love about development?",
    developLoveA: "The thing I love about development is that you can creat anything you want, software wise (depending on thew technologies you use). Start from a mental blueprint and turn it into an actual product to be proud of, hopefully. The thing I love about development is that you can creat anything you want, software wise (depending on thew technologies you use). Start from a mental blueprint and turn it into an actual product to be proud of, hopefully. The thing I love about development is that you can creat anything you want, software wise (depending on thew technologies you use). Start from a mental blueprint and turn it into an actual product to be proud of, hopefully. The thing I love about development is that you can creat anything you want, software wise (depending on thew technologies you use). Start from a mental blueprint and turn it into an actual product to be proud of, hopefully. The thing I love about development is that you can creat anything you want, software wise (depending on thew technologies you use). Start from a mental blueprint and turn it into an actual product to be proud of, hopefully. The thing I love about development is that you can creat anything you want, software wise (depending on thew technologies you use). Start from a mental blueprint and turn it into an actual product to be proud of, hopefully. The thing I love about development is that you can creat anything you want, software wise (depending on thew technologies you use). Start from a mental blueprint and turn it into an actual product to be proud of, hopefully. The thing I love about development is that you can creat anything you want, software wise (depending on thew technologies you use). Start from a mental blueprint and turn it into an actual product to be proud of, hopefully. The thing I love about development is that you can creat anything you want, software wise (depending on thew technologies you use). Start from a mental blueprint and turn it into an actual product to be proud of, hopefully. The thing I love about development is that you can creat anything you want, software wise (depending on thew technologies you use). Start from a mental blueprint and turn it into an actual product to be proud of, hopefully. The thing I love about development is that you can creat anything you want, software wise (depending on thew technologies you use). Start from a mental blueprint and turn it into an actual product to be proud of, hopefully. ",

  }
];

  //Biography area on page
const story = () => {

    let bioPara = '';

  for(let j = 0; j < bio.length; j++) {

    bioPara += `<div class="paragraphBio">`
    bioPara +=  `<h2>${bio[j].background}</h2>`
    bioPara +=  `<p>${bio[j].backgroundA}</p>`
    bioPara +=  `<h2>${bio[j].developInterest}</h2>`
    bioPara +=  `<p>${bio[j].developInterestA}</p>`
    bioPara +=  `<h2>${bio[j].developLove}</h2>`
    bioPara +=  `<p>${bio[j].developLoveA}</p>`
    bioPara +=  `<div class="proPic">`
    // bioPara +=  `<p><img class="proImg" src="${bio[j].picture}"></p>`
    bioPara +=  `</div>`
    bioPara += `</div>`
    }
  printToDom('bioPage', bioPara);
}

let contact = [
  {
    email: "sean.dev.davis@gmail.com",
    twitter:'https://twitter.com/',
    linkedIn:'https://www.linkedin.com/',
    resume: "Resume"
    
  }
]

let contactInfo = () => {

  let shoutOut = '';

  for(let k = 0; k < contact.length; k++) {
    shoutOut += `<nav="contact-content">`
    shoutOut +=   `<a href="${contact[k].email}">Email</a>`
    shoutOut +=   `<a href="${contact[k].twitter}">Twitter</a>`
    shoutOut +=   `<a href="${contact[k].linkedIn}">LinkedIn</a>`
    shoutOut +=   `<a href="${contact[k].linkedIn}">Resume</a>`
    shoutOut += `</nav>`
  }
  printToDom('footer', shoutOut);
}

let infoCard = () => {

  let proIntro = '';

  for(let l = 0; l < bio.length; l++) {
    proIntro += `<div class="indexCard">`
    proIntro +=   `<p class="name">Sean Davis</p>`
    // proIntro +=   `<p><img src="${bio[l].picture}"></p>`
    proIntro +=   `<p class="description">Up and coming devloper</p>`
    proIntro += `</div>`
  }
  printToDom('profileCard', proIntro);
}

// const projectsPageShow = () => {
//   const showProjects = document.getElementById('projectsPage');
//   showProjects.addEventListener('click', function(){
//     showProjects.style.display = 'flex';
//   });
//   printToDom()
// }

const footerShow = () => {
  const showFooter = document.getElementById('footer');
}

const init = () => {
    createProjectCards();
    story();
    contactInfo();
    infoCard();
    projectsPageShow();
  };

  init();

