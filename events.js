// "use strict"

// these are the variable used to reference the html elements in the index file. 
// References each card:
    var carCard = document.getElementsByClassName("card"); 
    // Refers to the user input from the navBar:
    var navBarInput = document.getElementById("input"); 
    // Refers to the class name in the quiz.js file of each card - don't panic - it will load into the html when car cards are created:
    var carDescription = document.getElementsByClassName("description")

// This is the events iife which augments the carLot.js
var CarLot = (function (myCarLot) {

//Handles the navigation bar input and prepares it to change the car description once the user clicks on the card
  myCarLot.handleCardClick= function(MouseEvent) {
      carDescription.innerHTML = navBarInput.value;
    },

// Removes the thick border, which was activated by borderClick, from one card as another is selected
  myCarLot.removeBorder= function() {
    // needs to be done to each individual carCard - not all at once; so it needs a for loop and the [i]
    for (let i = 0; i < carCard.length; i++) {
      carCard[i].classList.remove("thickborder");
    }
  };
// Function to add a click event listener to each card
  myCarLot.borderClick= function() {
    for (let i = 0; i < carCard.length; i++) {
      carCard[i].addEventListener('click', function(event) {
      CarLot.removeBorder(); 
      //adds a thick border to each card - it calls the thickborder class from the CSS file
        carCard[i].classList.add("thickborder");
        //sets the value of the navigation bar input to blank
        navBarInput.value = " ";
        //puts the navigation bar in focus - makes it magically appear
        navBarInput.focus();  
      })
    }; 
    //Adds an keyup listener to "listen" to whatever the user types into the navigation bar input
    navBarInput.addEventListener("keyup", function(event){
      // creates a variable for a car card that has been selected - meaning the css tag thickborder has been already added
      var clickedCard = document.getElementsByClassName("thickborder")[0];
      // changes the car description in the selected car card to whatever the input value is keyed into the navigation bar
      clickedCard.lastChild.lastChild.innerHTML = navBarInput.value;
    })
    CarLot.handleCardClick();
}

  return myCarLot
})(CarLot||{}); 
