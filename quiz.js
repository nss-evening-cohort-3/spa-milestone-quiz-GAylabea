// "use strict"

function listInventory (inventory) {
       // list in the DOM - turn the html element where the car cards will go into a variable
      var carDom = document.getElementById("container"); 
      // variable to leave the outputString blank until it is filled with car card info - the DOM string 
      var outputString = "";
      // this for loop is checking each array item in inventory to use it to build each car card
      for (var i = 0; i <inventory.length; i++) {
      var currentInventory = inventory[i];
        // this is to build the DOM string - the car card - by creating html elements for each one
      carDom.innerHTML += `<div class = "col-xs-4 card" style="border-color: ${currentInventory.color}"><h1>${currentInventory.make}</h1><h5>${currentInventory.model}</h5><h5>${currentInventory.year}</h5><h5>${currentInventory.price}</h5>${currentInventory.color}</h5><h5>${currentInventory.purchased}</h5><div class = "description"><h5>${currentInventory.description}</h5></div></div>`
      }
      // this calls the event listener for the borderClick event which will activate the other events in the events.js file
      CarLot.borderClick();
 }

// // Load the inventory and send a callback function to be
// // invoked after the process is complete
CarLot.loadInventory(listInventory); 