const addButton = document.getElementById('addButton');
const inputStudent = document.getElementById('inputStudent');
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const getHouse = () => {
    const getHouses = houses[Math.floor(Math.random()*houses.length)];
    // console.log('test');
    return getHouses;
}   



const students = [];
let studentCounter = 1;

const domStringBuilder = (pupil) => {
    let domString = '';
    pupil.forEach((student) => {
    domString += `<div class="card col-3">`;
    domString += `  <div class="card-body">`;
    domString += `    <h5 class="card-title">${student.name}</h5>`;
    domString += `    <h5 class="card-title">${getHouse()}</h5>`;
    domString += `    <a class="btn btn-danger deleteButton" id=${student.id}>Expel</a>`;
    domString += `  </div>`;
    domString += `</div>`;
    });
    printToDom('student-container', domString);
}

// Make the form appear

const jumboBtnEvents = () => {
    const showForm = document.getElementById('showBtn');
    console.log(showForm);
    showForm.addEventListener('click', function(){
        let studentForm = document.getElementById('studentForm');
        studentForm.style.display = 'block';
    }); 
}

// Adding student
const addStudent = (e) => {
    e.preventDefault();
    const inputText = inputStudent.value;
    const newStudent = {
        name: inputText,
        id: `student${studentCounter}`,
    };
    students.push(newStudent);
    studentCounter++;
    domStringBuilder(students);
    addDeleteEvents();
    inputStudent.value = '';
};

// Delete function
const deleteFunction = (e) => {
    const buttonId = e.target.id;
    console.log(buttonId);
    students.forEach((student, index) =>{
        if(student.id === buttonId){
            students.splice(index, 1);
        }
        domStringBuilder(students);
        addDeleteEvents();
    })
}

const addDeleteEvents = () => {
    const deleteButton = document.getElementsByClassName('deleteButton');
    for(let i = 0; i < students.length; i++){
        deleteButton[i].addEventListener('click', deleteFunction);
    }
}

// Add cards
const eventListeners = () => {
    addButton.addEventListener('click', addStudent);
}

const init = () => {
    eventListeners();
    jumboBtnEvents();
}
init();