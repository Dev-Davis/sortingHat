const addSortBtn = document.getElementById('sortStudent');
const studentNameInput = document.getElementById('showStudentName');

const students = [];
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
const studentCounter = 1;

domPrinter = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

// Variables
const deleteFunction = (e) => {
    const buttonId = e.target.id;
    students.forEach((student, index) => {
        if(student.id === buttonId){
            students.splice(index, 1);
        }
    })
    domStringBuilder(houses);
    addDeleteEvents();
};

const addDeleteEvents = () => {
    const expelButton = document.getElementById('expelButton');
    for(let i = 0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', deleteFunction);
    }
}



const getHouse = () => {
    const getHouses = houses[Math.floor(Math.random()*houses.length)];
    // console.log('test');
    return getHouses;
}   
/* Adding student function */

const addStudentCard = (name) => { // name being passed here
    let domStringBuilder = '';
    let house = getHouse();

    domStringBuilder += `<div class="card">`
    domStringBuilder +=     `<div class="card-body">`
    domStringBuilder +=     `   <h3 class="card-title">${name}</h3>`
    domStringBuilder +=     `   <h4 class="card-text">${house}</h4>`
    domStringBuilder +=     `   <button class="expelButton">Expel</button>`
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
     addSortBtn.addEventListener('click', function(){
        let showStudentInput = document.getElementById('showStudentName').value;
        // console.log(showStudentInput);
        addStudentCard(showStudentInput);
    });
}

const addStudents = (e) => {
    e.preventDefault();
    const inputText = studentNameInput.value;
    const newStudent = {
        item: inputText,
        id: `student${studentCounter}`,
    };
    students.push(newStudent);
    studentCounter++;
    domStringBuilder(students);
    addDeleteEvents();
    studentNameInput.value = '';
}

const eventListeners = () => {
  addButton.addEventListener('click', addStudents);
};

const init = () => {
    jumboBtnEvents();
    eventListeners();
}
init();