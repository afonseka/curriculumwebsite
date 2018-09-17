const templateOutcome = document.querySelector("#learn-outcome-template").content;
const insertOutcome = document.querySelector(".learn-outcome");

const templateAreas = document.querySelector("#core-areas-template").content;
const insertAreas = document.querySelector(".core-areas-div");


const templateEDate = document.querySelector("#template-efective-date").content;
const insertEDate = document.querySelector(".effective-date-div");

const templateSemesters = document.querySelector("#semesters-template").content;
const insertSemester = document.querySelector(".semesters");

const templateInternship = document.querySelector("#intern-template").content;
const insertInternship = document.querySelector(".intership");

const templateExams = document.querySelector("#exams-template").content;
const insertExams = document.querySelector(".exams");

const templateCredits = document.querySelector("#credit-template").content;
const insertCredits = document.querySelector(".credit");




//------------LEARN OUTCOME FUNCTION

window.addEventListener("load", () => {
    fetch("../json/outcome.json").then(res => res.json()).then(show)
});

function show(data) {
    //console.log(data);
    const clone = templateOutcome.cloneNode(true);
    clone.querySelector(".outcome-h2").textContent = data.title;
    clone.querySelector(".outcome-p").innerHTML = data.description;
    insertOutcome.appendChild(clone)
};


//------------CORE AREAS FUNCTION

window.addEventListener("load", () => {
    fetch("../json/coreareas.json").then(res => res.json()).then(showAreas)
});

function showAreas(areas) {
    //console.log(areas);
    areas.article.forEach(showSingleArticle)
};

function showSingleArticle(article) {
    //console.log(article)
    const cloneAreas = templateAreas.cloneNode(true);
    cloneAreas.querySelector(".core-areas-img").src = article.image;
    cloneAreas.querySelector(".core-areas-h2").textContent = article.name;
    cloneAreas.querySelector(".slogan").textContent = article.slogan;
    cloneAreas.querySelector(".outcome-areas").innerHTML = article.outcome;
    insertAreas.appendChild(cloneAreas)
}


//------------EFECTIVE DATE FUNCTION

window.addEventListener("load", () => {
    fetch("../json/date.json").then(res => res.json()).then(showDate)
});


function showDate(info) {
    //console.log(info);
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
    //console.log(semester);
    semester.section.forEach(showSingleSemester)
};

function showSingleSemester(section) {
    //console.log(section);
    const cloneSemester = templateSemesters.cloneNode(true);
    cloneSemester.querySelector(".semester-h2").textContent = section.titleSemester;
    cloneSemester.querySelector(".semester-slogan1").textContent = section.slogan;
    cloneSemester.querySelector(".semester-slogan2").textContent = section.slogan2;
    cloneSemester.querySelector(".semester-h3a").textContent = section.subtitle1Semester;
    cloneSemester.querySelector(".semester-texta").textContent = section.description1;
    cloneSemester.querySelector(".skills-title1").textContent = section.outcomeSubtitle;
    cloneSemester.querySelector(".comptences-title1").textContent = section.compSubtitle;
    cloneSemester.querySelector(".comptences-title2").textContent = section.compSubtitle;

    cloneSemester.querySelector(".points1").textContent = section.points1;
    cloneSemester.querySelector(".points2").textContent = section.points2;
    cloneSemester.querySelector(".semester-h3b").textContent = section.subtitle2Semester;
    cloneSemester.querySelector(".semester-textb").textContent = section.description2;
    cloneSemester.querySelector(".skills-title2").textContent = section.outcomeSubtitle;

    // ------------SKILLS A
    if (section.outcomePoints1.lenght == 0) {

        cloneSemester.querySelector(".skills-a").classList.add("hide");

    } else {
        cloneSemester.querySelector(".skills-a").classList.remove("hide");

        cloneSemester.querySelector(".skills-a").innerHTML = section.outcomePoints1;
    }


    // ------------SKILLS B
    if (section.outcomePoints2.lenght == 0) {

        cloneSemester.querySelector(".skills-b").classList.add("hide");

    } else {
        cloneSemester.querySelector(".skills-b").classList.remove("hide");

        cloneSemester.querySelector(".skills-b").innerHTML = section.outcomePoints2;
    }

    // ------------COMPETENCES A

    if (section.competencesA.lenght == 0) {

        cloneSemester.querySelector(".competences-a").classList.add("hide");

    } else {
        cloneSemester.querySelector(".competences-a").classList.remove("hide");

        cloneSemester.querySelector(".competences-a").innerHTML = section.competencesA;
    }



    // ------------COMPETENCES B

    if (section.competencesB.lenght == 0) {

        cloneSemester.querySelector(".competences-b").classList.add("hide");

    } else {
        cloneSemester.querySelector(".competences-b").classList.remove("hide");

        cloneSemester.querySelector(".competences-b").innerHTML = section.competencesB;
    }

    //----------ELLECTIVES

    if (section.electives.lenght == 0) {
        cloneSemester.querySelector(".electives").classList.add("hide");

    } else {
        cloneSemester.querySelector(".electives").classList.remove("hide");
        cloneSemester.querySelector(".electives").innerHTML = section.electives;

    }

    //----------------BUTTONS

    if (section.button) {
        cloneSemester.querySelector(".btn").classList.remove("hide");

    } else {
        cloneSemester.querySelector(".btn").classList.add("hide");

    }

    //----------------BUTTONS

    if (section.button) {
        cloneSemester.querySelector(".btn2").classList.remove("hide");

    } else {
        cloneSemester.querySelector(".btn2").classList.add("hide");

    }

    if(section.id == 1){
        cloneSemeste.querySelector(".each-semester").classList.add("1semester")
    }



    insertSemester.appendChild(cloneSemester)


}

//------------INTERNSHIP FUNCTION

window.addEventListener("load", () => {
    fetch("../json/intern.json").then(res => res.json()).then(showIntern)
});

function showIntern(intern) {
    //console.log(intern);
    const cloneintern = templateInternship.cloneNode(true);
    cloneintern.querySelector(".intern-h2").textContent = intern.titleInter;
    cloneintern.querySelector(".intern-p").innerHTML = intern.descriptionInter;
    insertInternship.appendChild(cloneintern)
};


//------------EXAMS FUNCTION

window.addEventListener("load", () => {
    fetch("../json/exams.json").then(res => res.json()).then(showExams)
});

function showExams(exams) {
    //console.log(exams);
    exams.exams.forEach(showSingleExam)
};

function showSingleExam(sngExam) {
    //console.log(sngExam);
    const cloneExame = templateExams.cloneNode(true);
    cloneExame.querySelector(".exame-h2").textContent = sngExam.titleExam;
    cloneExame.querySelector(".exame-p").innerHTML = sngExam.descriptionsExam;
    cloneExame.querySelector(".exame-p2").innerHTML = sngExam.descriptionsExam2;
    insertExams.appendChild(cloneExame)
}


//------------CREDITS FUNCTION

window.addEventListener("load", () => {
    fetch("../json/credits.json").then(res => res.json()).then(showCredits)
});

function showCredits(credits) {
    //console.log(credits);
    const cloneCredits = templateCredits.cloneNode(true);
    cloneCredits.querySelector(".credit-h2").textContent = credits.titleCredit;
    cloneCredits.querySelector(".credit-p").textContent = credits.descriptionCredit;
    insertCredits.appendChild(cloneCredits)
};


//--------------SEMESTER CHANGE

document.querySelector("#btn-1s").addEventListener("click", () => {
    console.log("working")

    document.querySelectorAll(".each-semester").forEach(semester => {
        console.log(semester)
        if(!semester.classList.contains('1semester') ){

            semester.classList.add("hide");
    }else {
            semester.classList.remove("hide")
        }
    })
})

document.querySelector("#btn-2s").addEventListener("click", () => {
    console.log("working")
})

document.querySelector("#btn-3s").addEventListener("click", () => {
    console.log("working")
})

document.querySelector("#btn-4s").addEventListener("click", () => {
    console.log("working")
})
