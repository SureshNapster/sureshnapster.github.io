/*Functions via Objects */
/*
var myHeading = document.querySelector("h1");
myHeading.textContent = 'Hello World!';
*/

/*
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}
*/

/*
function multiply (num1, num2)
{
    var result = num1 * num2;
    return result;
}

debug(multiply(4,7));
*/

/*Onclick function */
/*

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/


var myImage = document.querySelector("img");

myImage.onclick = function()
{
    var mySrc = myImage.getAttribute('src');

    if(mySrc = '/Users/SureshNapster/Documents/HTML/MyPortfolio/images/goku.png') {
        myImage.setAttribute('src','/Users/SureshNapster/Documents/HTML/MyPortfolio/images/goku2.jpg');
    }
    else {
        myImage.setAttribute('src','/Users/SureshNapster/Documents/HTML/MyPortfolio/images/goku.png');
    }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name?");
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Goku is Cool!' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Goku is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}