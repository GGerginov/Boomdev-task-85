import "../scss/app.scss";
import {data} from "autoprefixer";

window.addEventListener("DOMContentLoaded",function(){
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then(response => response.json())
      .then(data =>data.results)
      .then(data => {
        for (let pokemon of data) {
          let li = document.createElement('li');
          li.innerHTML = pokemon.name
          ul.appendChild(li);
        }
      })
});

