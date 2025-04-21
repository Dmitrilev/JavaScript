"use strict"
const store = []
let count = parseInt(prompt("Paljonko ehdokkaita?"))
for (let i=0; i< count ;i++) {
  let name = prompt(`Name for candidate ${i+1}`)
  store.push({name: name, votes: 0})
}

const voters = parseInt(prompt("Paljonko äänestäjiä?"))
for (let i = 0; i<voters; i++) {
  let vote = prompt("Ketä äänestät?")
  if (vote !== "" && vote !== null) {
    for (let i = 0;i<count ; i++) {
      if (vote === store[i]["name"]) {
        store[i]["votes"] += 1
        break

      }
    }
  }
}
const store_sorted = store.sort((a, b) => {
  return b.votes - a.votes
});

let winer = document.getElementById("win")
winer.innerHTML = `The winner is ${store[0]["name"]} with ${store[0]["votes"]} votes`
let resultHTML = "<ul>";
resultHTML += "<li>results:</li>"
for (const candidate of store) {
  resultHTML += `<li>${candidate.name}: ${candidate.votes} votes</li>`;
}
resultHTML += "</ul>";

let targetElem = document.getElementById("target");
targetElem.innerHTML = resultHTML;

