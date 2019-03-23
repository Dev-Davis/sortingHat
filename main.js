//Arrays

const students = [];
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

// Variables



// Functions

const getHouse = () => {
    const getHouses = houses[Math.floor(Math.random()*houses.length)];
    // console.log('test');
    return getHouses;
}   
/* Adding student function */

const addStudentCard = (name) => { // name being passed here
    // const studentNameInput = document.getElementById('showStudentName');
    let domStringBuilder = '';
    let house = getHouse();

    domStringBuilder += `<div class="card">`
    domStringBuilder +=     `<div class="card-body">`
    domStringBuilder +=     `<h3 class="card-title">${name}</h3>`
    domStringBuilder +=     `<h4 class="card-text">${house}</h4>`
    domStringBuilder +=     `<button class="expelButton">Expel</button>`
    domStringBuilder +=     `</div>`
    domStringBuilder += `</div>`

    // console.log(name);
    // console.log(house);
    domPrinter('studentCardContainer', domStringBuilder);
}

/* Making the form appear */

const jumboBtnEvents = () => {
    const showForm = document.getElementById('showFormBtn');
    console.log(showForm);
    showForm.addEventListener('click', function(){
        let studentForm = document.getElementById('studentForm');
        studentForm.style.display = 'block';
    });
    addSortBtnEvent();
   
}

/* Add and sort  button function */

const addSortBtnEvent = () => {
    const addSortBtn = document.getElementById('sortStudent');
     addSortBtn.addEventListener('click', function(){
        let showStudentInput = document.getElementById('showStudentName').value;
        // console.log(showStudentInput);
        addStudentCard(showStudentInput);
    });
}

// Print to dom function

domPrinter = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}
const init = () => {
    jumboBtnEvents();
}
init();