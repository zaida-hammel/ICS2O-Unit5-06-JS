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

  const counter1 = parseInt(document.getElementById("integer1").value)
	const counter2 = parseInt(document.getElementById("integer2").value)
  var addedInteger = 0
  var result = 0

  if (counter1 > 0 && counter2 > 0) {
    while (addedInteger < counter2) {
      addedInteger = addedInteger + 1;
      result = result + counter1;
    }
  } else if (counter1 < 0 && counter2 < 0) {
    while (addedInteger > counter2) {
      addedInteger = addedInteger - 1;
      result = result - counter1;
    }
  } else if (counter1 > 0 && counter2 < 0) {
    while (addedInteger > counter2) {
      addedInteger = addedInteger - 1;
      result = result - counter1;
    }
  } else {
    while (addedInteger < counter2) {
      addedInteger = addedInteger + 1;
      result = result + counter1;
    }
  }
  
  document.getElementById("answers").innerHTML = "Your answer is: " + counter1 + " x " + addedInteger + " = " + result;
}
