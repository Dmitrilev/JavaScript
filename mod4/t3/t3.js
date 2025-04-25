"use strict"

const divEl = document.createElement("div")
divEl.id = "results"
document.body.appendChild(divEl)

document.getElementById("search").addEventListener("submit", async function(event) {
      event.preventDefault()

      const query = document.getElementById("query").value
      const url = `https://api.tvmaze.com/search/shows?q=${query}`

      try {
        const response = await fetch(url);
        const data =  await response.json()

        divEl.innerHTML = ''

        const art = document.createElement("article")

        const h2 = document.createElement("h2")
        h2.innerHTML = data[0].show.name
        art.appendChild(h2)

        const a =document.createElement("a")
        a.target = "_blank"
        a.href = data[0].show.url
        a.innerHTML = data[0].show.url
        art.appendChild(a)

        const img = document.createElement("img")
        img.src = data[0].show?.image?.medium
        img.alt = data[0].show?.name
        art.appendChild(img)

        const div = document.createElement("div")
        div.innerHTML = data[0].show.summary
        art.appendChild(div)

        divEl.appendChild(art)


      }
      catch (eror){
        console.log(eror.message)
      }

    })