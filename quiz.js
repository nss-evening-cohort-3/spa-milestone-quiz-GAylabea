"use strict"
let  carDom= document.getElementById("cars"); 

function showCars (inventory) {
  // Loop over the inventory and populate the page
  for (let i = 0; i < inventory.length; i++) {
    let currentInventory = inventory[i]; 
    let outputString = ""; 
    outputString += `<h1>${currentInventory.make}<h1>`; 
    // <h5>{currentCarList.model} </h5><h5>{currentCarList.year} </h5><h5>{currentCarList.price} </h5><h5>{currentCarList.color} </h5>
    // <h5>{currentCarList.purchased} </h5><h5>{currentCarList.description} </h5>`; 
    carDom.innerHTML += outputString; 
    console.log(currentInventory);
  }
} 

  // Now that the DOM is loaded, establish all the event listeners needed
//   CarLot.activateEvents();

// }

// Load the inventory and send a callback function to be
// invoked after the process is complete
// carLot.loadcarLot(showcarList); 
carLot.loadInventory(showCars); 
