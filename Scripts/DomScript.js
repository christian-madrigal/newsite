document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('newHobbyBtn').addEventListener('click', addHobbies);
});

document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('addbtn').addEventListener('click', displaySum);
});

document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('subbtn').addEventListener('click', displayMinus);
});

document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('mulbtn').addEventListener('click', displayMultiply);
});

document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('divbtn').addEventListener('click', displayDivision);
});
document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('disbtn').addEventListener('click', displayArray)
});
document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('appbtn').addEventListener('click', appArray)
});


function addHobbies() {
    //get all hobbies input text boxes
    const inputList = document.querySelectorAll('.hobbiesInput');
    //check if hobbies are less than 5
    if (inputList.length < 5) {
        // getting ref for div
        const hobbiesList = document.getElementById('hobbiesList');
        const newlineelement = CreateNode('br'), // create br 
            inputElement = CreateNode('input'); // create input
        inputElement.setAttribute("class", "hobbiesInput");
        append(hobbiesList, newlineelement); // add br into div
        append(hobbiesList, inputElement);// add input text box into div
    }
    else {
        document.getElementById('newHobbyBtn').removeEventListener('click', addHobbies);
    }

}

function CreateNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);

}
function displaySum() {
    let txt1 = document.getElementById("txtbox1");
    let txt2 = document.getElementById("txtbox2");
    var total = parseInt(txt1.value) + parseInt(txt2.value);
    document.getElementById('total').innerHTML = total;
}
function displayMinus() {
    let txt1 = document.getElementById("txtbox1");
    let txt2 = document.getElementById("txtbox2");
    var total = parseInt(txt1.value) - parseInt(txt2.value);
    document.getElementById('total').innerHTML = total;
}
function displayMultiply() {
    let txt1 = document.getElementById("txtbox1");
    let txt2 = document.getElementById("txtbox2");
    var total = parseInt(txt1.value) * parseInt(txt2.value);
    document.getElementById('total').innerHTML = total;
}
function displayDivision() {
    let txt1 = document.getElementById("txtbox1");
    let txt2 = document.getElementById("txtbox2");
    var total = parseInt(txt1.value) / parseInt(txt2.value);
    document.getElementById('total').innerHTML = total;
}




let cars = ["Saab", "Nissan", "Audi"];

function displayArray() {
    document.getElementById('arrayOutput').innerHTML = '';
    for (var i = 0; i < cars.length; i++) {
        document.getElementById('arrayOutput').innerHTML += `<li>${cars[i]}</li>`;
    }
}


function appArray() {
    document.getElementById('arrayOutput').innerHTML = '';
    cars.push("BMW");
    cars.push("Tesla");
    for (var i = 0; i < cars.length; i++) {
        document.getElementById('arrayOutput').innerHTML += `<li>${cars[i]}</li>`
    }
}




