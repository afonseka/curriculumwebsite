const templateOutcome = document.querySelector("#learn-outcome-template").content;
const insertOutcome = document.querySelector(".learn-outcome");
const templateAreas = document.querySelector("#core-areas-template").content;
const insertAreas = document.querySelector(".core-areas");
//const imgbase = "../images/";
const templateEDate = document.querySelector("#template-efective-date").content;
const insertEDate = document.querySelector(".effective-date");


//------------LEARN OUTCOME FUNCTION

window.addEventListener("load", () => {
    fetch("../json/outcome.json").then(res => res.json()).then(show)
});

function show(data) {
    console.log(data);
    const clone = templateOutcome.cloneNode(true);
    clone.querySelector(".outcome-h2").textContent = data.title;
    clone.querySelector(".outcome-p").textContent = data.description;
    insertOutcome.appendChild(clone)
};


//------------CORE AREAS FUNCTION

window.addEventListener("load", () => {
    fetch("../json/coreareas.json").then(res => res.json()).then(showAreas)
});

function showAreas(areas) {
    console.log(areas);
    areas.article.forEach(showSingleLeadArticle)
};

function showSingleLeadArticle(article) {
    console.log(article)
    const cloneAreas = templateAreas.cloneNode(true);
    //cloneAreas.querySelector(".core-areas-img").src = "../images/" + article.image + ".png";
    cloneAreas.querySelector(".core-areas-h2").textContent = article.name;
    cloneAreas.querySelector(".slogan").textContent = article.slogan;
    cloneAreas.querySelector(".outcome-areas").textContent = article.outcome;
    insertAreas.appendChild(cloneAreas)
}


//------------EFECTIVE DATE FUNCTION

window.addEventListener("load", () => {
    fetch("../json/date.json").then(res => res.json()).then(showDate)
});


function showDate(info) {
    console.log(info);
    const cloneDate = templateEDate.cloneNode(true);
    cloneDate.querySelector(".edate-h2").textContent = info.titleDate;
    cloneDate.querySelector(".edate-p").textContent = info.descriptionDate;
    insertEDate.appendChild(cloneDate)
};

