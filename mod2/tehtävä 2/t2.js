participants_count = parseInt(prompt("Anna osallistujen määrä: "))
participants_ordered = []
for (let i = 0; i < participants_count; i++) {
  participants_ordered.push(prompt(`Anna osallistujan ${i+1} nimi: `))
}
const targetElem = document.querySelector('#target')
targetElem.innerHTML = participants_ordered.sort().join(", ")