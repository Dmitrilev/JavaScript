"use strict"

const lielement = document.createElement("li")
lielement.innerHTML = "First item";
const targetEL = document.getElementById("target")
targetEL.appendChild(lielement)

const lielement2 = document.createElement("li")
lielement2.innerHTML = "Second item"
targetEL.appendChild(lielement2)

const lielement3 = document.createElement("li")
lielement3.innerHTML = "Third item"
targetEL.appendChild(lielement3)

document.querySelectorAll("li")[1].classList.add("my-item")
