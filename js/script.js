// Created by: Zaida Hammel
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict";

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-06-JS/sw.js", {
    scope: "/ICS2O-Unit5-06-JS/",
  });
}

/**
 * This function does multiplication.
 */
function myButtonClicked () {

  const counter1 = parseInt(document.getElementById('integer1').value)
	const counter2 = parseInt(document.getElementById('integer2').value)
  var addedNumber = 0
  var result = 0

  if (counter1 > 0 && counter2 > 0) {
    while (addedNumber < counter2) {
      addedNumber = addedNumber + 1;
      result = result + counter1;
    }
  } else if (counter1 < 0 && counter2 < 0) {
    while (addedNumber > counter2) {
      addedNumber = addedNumber - 1;
      result = result - counter1;
    }
  } else if (counter1 > 0 && counter2 < 0) {
    while (addedNumber > counter2) {
      addedNumber = addedNumber - 1;
      result = result - counter1;
    }
  } else {
    while (addedNumber < counter2) {
      addedNumber = addedNumber + 1;
      result = result + counter1;
    }
  }
  
  document.getElementById('answers').innerHTML = counter1 + " x " + addedNumber + " = " + result;
}
