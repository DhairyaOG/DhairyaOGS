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
function returnMovies(url){
      fetch(url).then(res => res.json())
      .then(function(data){
      console.log(data.results);
      data.results.forEach(element => {
          const image = document.createElement('img');
          image.setAttribute('class', 'thumbnail');
          image.setAttribute('id', 'image');
          
          const title = document.createElement('h3');
          title.setAttribute('class', 'card-title');
          
          const center = document.createElement('center');
    
          title.innerHTML = `${element.title}`;
          image.src = IMG_PATH + element.poster_path;
    
        });
    
    
          center.appendChild(image);
          div_card.appendChild(center);
          div_card.appendChild(title);
          div_column.appendChild(div_card);
          div_row.appendChild(div_column);
    
          main.appendChild(div_row);
      });
    });
    }
    const overlayContent = document.getElementById('overlay-content');
/* Open when someone clicks on the span element */
function openNav(movie) {
  let id = movie.id;
  fetch(BASE_URL + '/movie/'+id+'/videos?'+API_KEY).then(res => res.json()).then(videoData => {
    console.log(videoData);
    if(videoData){
      document.getElementById("myNav").style.width = "100%";
      if(videoData.results.length > 0){
        var embed = [];
        var dots = [];
        videoData.results.forEach((video, idx) => {
          let {name, key, site} = video

          if(site == 'YouTube'){
              
            embed.push(`
              <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" class="embed hide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
          `)

            dots.push(`
              <span class="dot">${idx + 1}</span>
            `)
          }
        })
        
        var content = `
        <h1 class="no-results">${movie.original_title}</h1>
        <br/>
        
        ${embed.join('')}
        <br/>

        <div class="dots">${dots.join('')}</div>
        
        `
        overlayContent.innerHTML = content;
        activeSlide=0;
        showVideos();
      }else{
        overlayContent.innerHTML = `<h1 class="no-results">No Results Found</h1>`
      }
    }
  })

    