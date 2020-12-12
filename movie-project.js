const movies = [
  "Inception",
  "Legally Blonde",
  "500 Days of Summer",
  "The Notebook",
  "Seven",
  "The Incredibles"
]

const randomNumber = [Math.floor(Math.random() * movies.length)];

document.querySelector(".button").innerHTML = movies[randomNumber];
