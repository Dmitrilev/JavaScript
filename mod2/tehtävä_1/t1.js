numbers = prompt("Anna luvut: ")
  row = []
  const num_rev = numbers.toString().split("").map(Number)
  for (let i= num_rev.length -1 ; i >= 0; i-=1) {
    row.push(num_rev[i])
  }

const targetElem = document.querySelector('#target');
targetElem.innerHTML = row.join("");
