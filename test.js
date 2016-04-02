// "use strict"

var carLot = (function () {
  // this is the JSON file
  var inventory = [];
  return {
     loadInventory: function () {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText).inventory; 
      listInventory (inventory);
    });
      loader.open("GET", "inventory.json");
      loader.send();
    }
  }
})(); 

function listInventory (inventory) {
       // list in the DOM
      var carDom = document.getElementById("cars");
     var outputString = "";

      for (var i = 0; i < inventory.length; i++) {
        var currentInventory = inventory[i];
        // this is to build the DOM string
        outputString =+ `<h1>${currentInventory.make}</h1>`;
      }
      carDom.innerHTML = outputString;
}

  // Now that the DOM is loaded, establish all the event listeners needed
//   CarLot.activateEvents();

// }

// Load the inventory and send a callback function to be
// invoked after the process is complete
// carLot.loadcarLot(showcarList); 
carLot.loadInventory(); 

