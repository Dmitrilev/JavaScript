document.getElementById("source").addEventListener("submit", (event) => {
  event.preventDefault();
  const firstname = document.querySelector(`input[name="firstname"]`).value
  const lastdname = document.querySelector(`input[name="lastname"]`).value

  document.getElementById("target").innerHTML = `your name is ${firstname} ${lastdname}`
})