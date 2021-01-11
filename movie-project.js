const movies = [
  "Inception",
  "Legally Blonde",
  "500 Days of Summer",
  "The Notebook",
  "Seven",
  "The Incredibles",
  "The Ring",
  "The Green Mile",
  "Kill Bill",
  "Twilight",
  "Mean Girls",
]

const randomMovie = Math.floor(Math.random() * movies.length);

// Generating a random movie from the 'movies' array

document.querySelector(".demo").innerHTML = movies[randomMovie];

// Pasting that random movie in to the p element with class demo in the HTML document.

function reloadPage() {
  location.reload();
}

// Function to reload the page
