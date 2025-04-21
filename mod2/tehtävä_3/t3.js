"use strict"
const dogs_names = []
for (let i = 0; i<6; i++) {
  dogs_names.push(prompt(`Anna koiran ${i+1} nimi: `))
}
const names_ordered = dogs_names.sort().reverse()

const list = document.querySelectorAll("#target li")
for (let i = 0; i<6; i++) {
  list[i].textContent = names_ordered[i]
}