"use strict"

function showCars (inventory) {
  // Loop over the inventory and populate the page
   let outputString = ""; 
    let carDom = document.getElementById("cars"); 
    for (let i = 0; i < inventory.length; i++) {
    let currentInventory = inventory[i]; 
    outputString += `<h1>${currentInventory.make}<h1>`; 
    // <h5>{currentCarList.model} </h5><h5>{currentCarList.year} </h5><h5>{currentCarList.price} </h5><h5>{currentCarList.color} </h5>
    // <h5>{currentCarList.purchased} </h5><h5>{currentCarList.description} </h5>`; 
  }
    carDom.innerHTML += outputString; 
  }; 

  // Now that the DOM is loaded, establish all the event listeners needed
//   CarLot.activateEvents();

// }

// Load the inventory and send a callback function to be
// invoked after the process is complete
// carLot.loadcarLot(showcarList); 
carLot.loadInventory(showCars); 
