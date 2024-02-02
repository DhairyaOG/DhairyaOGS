// const moviePosterContainer = document.getElementById("moviePosterContainer");

// // Retrieve movie ID from the URL
// const urlParams = new URLSearchParams(window.location.search);
// const movieId = urlParams.get('id');

// // Fetch movie details based on the movie ID
// const MOVIE_DETAILS_API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=41ee980e4b5f05f6693fda00eb7c4fd4`;

// fetch(MOVIE_DETAILS_API)
//     .then(res => res.json())
//     .then(function(data) {
//         const posterPath = data.poster_path;
//         const moviePoster = document.createElement('img');
//         moviePoster.src = IMG_PATH + posterPath;
//         moviePosterContainer.appendChild(moviePoster);
//     })
//     .catch(error => console.error('Error fetching movie details:', error));


console.log(window.location.href);

const urlString = window.location.href;

let paramString = urlString.split('?')[1];

var movieId = 0;
movieId = paramString.split('=')[1];


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzRlZjhjZDRhNzM5MGFjNDBkYWVjMzQ4YWJhNDFmMCIsInN1YiI6IjY1YmE3OWRkZTlkYTY5MDE0OGYzNzY1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZykrF9ZSRy99WCigPCN3Ew_9CWa8TwuygYPRcUCahyU'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/' + movieId+'?language=en-US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));