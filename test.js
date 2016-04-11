// "use strict"

var carLot = (function () {
  // this is the JSON file
  var inventory = [];
  return {
     loadInventory: function () {
      var loader = new XMLHttpRequest();
      loader.open("GET", "inventory.json");
      loader.send();
      loader.addEventListener("load", function () {
        // this needs the name of the array, cars - not the file
      inventory = JSON.parse(this.responseText).cars; 
      // console.log('inventory in loader', inventory); 
      listInventory (inventory);
    });
    }
  }
})(); 

function listInventory (inventory) {
       // list in the DOM - get the element where the car cards go
      var carDom = document.getElementById("container"); 
      var outputString = "";
      for (var i = 0; i <inventory.length; i++) {
      var currentInventory = inventory[i];
        // this is to build the DOM string
      carDom.innerHTML += `<div class = "col-xs-4 card" style="border-color: ${currentInventory.color}"><h1>${currentInventory.make}</h1><h5>${currentInventory.model}</h5><h5>${currentInventory.year}</h5><h5>${currentInventory.price}</h5>${currentInventory.color}</h5><h5>${currentInventory.purchased}</h5><h5>${currentInventory.description}</h5></div>`
      }
      borderClick();
 }
// // CarLot.activiateEvents(); 

var carCard = document.getElementsByClassName("card"); 
var navBarInput = document.getElementsByClassName("form-control"); 
function borderClick () {
  for (let i = 0; i < carCard.length; i++) {
    carCard[i].addEventListener('click', function() {
    carCard[i].classList.toggle("thickborder");
  for (let i = 0; i<navBarInput.length; i++) {
    navBarInput[i].value = " ";
    navBarInput[i].focus();  
  }
  })
  }
}; 


// function CarLot.activiateEvents(); 
// // Load the inventory and send a callback function to be
// // invoked after the process is complete
// // carLot.loadcarLot(showcarList); 
carLot.loadInventory(listInventory); 

