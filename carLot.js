// This is the XHR to load the JSON file into a js object
"use strict"

let carLot = (function () {
  // this is the JSON file
  let inventory = [];
  // return {
  //   getinventory: function () {
  //    return inventory;
  //   },
     loadInventory: function () {
      let loader = new XMLHttpRequest();
      // loader.open("GET", "inventory.json");
      // loader.send(); 
      loader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText); 
     console.log("inventory", inventory); 
      });
    }
  }
})();