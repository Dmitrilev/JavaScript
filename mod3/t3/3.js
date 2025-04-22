'use strict';
const names = ['John', 'Paul', 'Jones'];

const html = `
<li></li>
<li></li>
<li></li>`

document.getElementById("target").innerHTML = html

for (let i = 0; i<3; i++) {
  document.querySelectorAll("li")[i].innerHTML = names[i];
}