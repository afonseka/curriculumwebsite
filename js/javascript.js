const templateOutcome = document.querySelector("#learn-outcome-template").content;
const insertOutcome = document.querySelector(".learn-outcome");

const templateAreas = document.querySelector("#core-areas-template").content;
const insertAreas = document.querySelector(".core-areas");
//const imgbase = "../images/";

const templateEDate = document.querySelector("#template-efective-date").content;
const insertEDate = document.querySelector(".effective-date");

const templateSemesters = document.querySelector("#semesters-template").content;
const insertSemester = document.querySelector(".semesters");

const templateInternship = document.querySelector("#intern-template").content;
const insertInternship = document.querySelector(".intership");



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
    areas.article.forEach(showSingleArticle)
};

function showSingleArticle(article) {
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

//------------SEMESTERS FUNCTION

window.addEventListener("load", () => {
    fetch("../json/semesters.json").then(res => res.json()).then(showSemesters)
});

function showSemesters(semester) {
    console.log(semester);
    semester.section.forEach(showSingleSemester)
};

function showSingleSemester(section) {
    console.log(section);
    const cloneSemester = templateSemesters.cloneNode(true);
    cloneSemester.querySelector(".semester-h2").textContent = section.titleSemester;
    cloneSemester.querySelector(".semester-p").textContent = section.descriptionSemester;
    cloneSemester.querySelector(".semester-h3a").textContent = section.subtitle1Semester;
    cloneSemester.querySelector(".semester-texta").textContent = section.description1;
    cloneSemester.querySelector("h4").textContent = section.outcomeSubtitle;
    cloneSemester.querySelector(".skills-a").textContent = section.outcomePoints1;
    cloneSemester.querySelector(".points").textContent = section.points;
    cloneSemester.querySelector(".semester-h3b").textContent = section.subtitle2Semester;
    cloneSemester.querySelector(".semester-textb").textContent = section.description2;
    cloneSemester.querySelector(".skills-title2").textContent = section.outcomeSubtitle;
    cloneSemester.querySelector(".skills-b").textContent = section.outcomePoints2;

    insertSemester.appendChild(cloneSemester)


}

//------------INTERNSHIP FUNCTION

window.addEventListener("load", () => {
    fetch("../json/intern.json")
        .then(res => res.json())
        .then(showIntern)
});

/*function showIntern(intern) {
    console.log(intern);
    const cloneintern = templateInternship.cloneNode(true);
    cloneintern.querySelector(".edate-h2").textContent = info.titleDate;
    cloneintern.querySelector(".edate-p").textContent = info.descriptionDate;
    insertEDate.appendChild(cloneintern)
};*/

