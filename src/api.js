const button = document.querySelector("button")
const p = document.querySelector("p")


button.addEventListener("click", ()=>{
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then(response => response.json())
    .then(data => p.innerHTML = data.text)    
})