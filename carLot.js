"use strict"

let carLot = (function () {
  // this is the JSON file
  let inventory = [];
  return {
  // need to review how to do GET command? 
  // getInventory: function() {

  // }, 
     loadInventory: function (CB) {
      let loader = new XMLHttpRequest();
      loader.open("GET", "inventory.json");
      loader.send(); 
      loader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText).inventory; 
      CB(inventory); 
      });
    }
  }; 
})();