import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */





 fetch("https://api.github.com/users/karolryska/repos?&sort=updated")
    .then(resp => resp.json())
    .then(resp => {
        let counter = 0;
        for (let repo of resp) {
            const {name, description, html_url, homepage} = repo;
            const projectsWrapper = document.querySelector(".projects__wrapper");
            const template = `<article class="project console">
            <div class="console__bar">
              <span class="console__dot"></span>
              <span class="console__dot"></span>
              <span class="console__dot"></span>
            </div>
            <div class="project__wrapper">
              <img class="project__icon" src="/src/assets/icons/github-white.svg" alt="">
              <h3 class="project__grid"><span class="project__label">project:</span><span class="project__title">${name}</span></h3>
              <p class="project__grid"><span class="project__label">description:</span><span class="project__text">xxx xxx xxx</span></p>
              <p class="project__grid"><span class="project__label">demo:</span><span class="project__text">see here</span></p>
              <p class="project__grid"><span class="project__label">github:</span><span class="project__text">&lt;<a class="project__link" href="${html_url}" title="name - demo">source code</a>&gt;</span></p>
            </div>
          </article>`;
          counter++;
          if (counter < 5) {projectsWrapper.innerHTML += template;}
        };
    })
    .catch(error => {
        console.log("Pobieranie danych nie powiodło się :(")
    })