

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/blue.jpg') {
        myImage.setAttribute ('src', 'images/green.jpg');
    } else {
        myImage.setAttribute ('src', 'images/blue.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt("Please enter your name. ");
    localStorage.setItem("name", myName);
    myHeading.textContent = "MTG is cool, " + myName;

}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "MTG is cool, " + storedName;
}
myButton.onclick = function() {
    setUserName();
    
}