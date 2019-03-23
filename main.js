//Arrays

const students = [];
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

// Variables



// Functions

const getHouse = () => {
    const getHouses = houses[Math.floor(Math.random()*houses.length)];
}
/* Adding student function */

const addStudent = () => {
    const studentNameInput = document.getElementById('showStudentName');
    console.log(studentNameInput);
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
        console.log(showStudentInput);
    });
}

domPrinter = (divId, textToPrint) => {
    const selectedDiv = document.getElementById('showStudentName');
    selectedDiv.innerHTML = textToPrint;
}
const init = () => {
    jumboBtnEvents();
}
init();