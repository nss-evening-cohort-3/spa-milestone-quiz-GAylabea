// This is the XHR to load the JSON file into a js object
// "use strict"

 "use strict"
// This is the first iife that will be augmented by the others
var CarLot = (function () {
  // this is the JSON file
  var inventory = [];
  return {
    // this function loads the inventory array called Cars from the json file into the js file or according to the READme: 
    // "When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native 
    // JavaScript object."
     loadInventory: function () {
      var loader = new XMLHttpRequest();
      loader.open("GET", "inventory.json");
      loader.send();
      loader.addEventListener("load", function () {
        //this uses the name of the array, cars - not the name of the json file
      inventory = JSON.parse(this.responseText).cars; 
      // this calls the function listInventory and passes the inventory, the orginal array, into the function 
      listInventory (inventory);
    });
    }
  }
})(); 
