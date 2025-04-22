"use strict"
const html = `
<li>First item</li>
<li>Second item</li>
<li>Third item</li>`

const targetEl = document.getElementById("target")
targetEl.innerHTML = html

targetEl.classList.add("my-list")
