const templateOutcome = document.querySelector("#learn-outcome-template").content;
const insertOutcome = document.querySelector(".learn-outcome");
const templateOutcome = document.querySelector("#core-areas-template").content;

window.addEventListener("load", ()=>{
  fetch("../json/outcome.json").then(res=>res.json()).then(show)
});

function show(data){
    console.log(data);
    const clone = templateOutcome.cloneNode(true);
    clone.querySelector(".outcome-h2").textContent = data.title;
    clone.querySelector(".outcome-p").textContent = data.description;
    insertOutcome.appendChild(clone)
}
