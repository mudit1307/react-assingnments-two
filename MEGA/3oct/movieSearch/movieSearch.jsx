import axios from 'axios';
import React, { useState } from 'react'

function MovieSearch() {
  const [movieName, setMovieName] = useState("");
  const API_KEY = "d31e11db431cab35af56986bca00a1b9";
  const [movies, setMovies] = useState([]);


  function searchMovie(e) {
    e.preventDefault();
    let x;
    async function apiCalling() {
      await axios('https://api.themoviedb.org/3/search/movie?query=' + movieName + '&include_adult=false&language=en-US&page=1&api_key=' + API_KEY)
        .then((result) => {
          console.log(result.data.results);
          // x= "https://image.tmdb.org/t/p/original/" + result.data.results;
          setMovies([...result.data.results]);
        })
    }
    apiCalling();
  }

  return (
    <>
      <div>
        <input type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
        <button onClick={searchMovie}>Search</button>
      </div>
      <div>
        {
          movies.map(
            (movie, indx) => {
              console.log(movie.poster_path);
              return (
                <div style={{display:'flex'}}>
                  <div className="card" style={{border:"1px solid black",width:"auto" ,margin:" 20px",padding:'0px',borderRadius:"10px"}}>
                    <img src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} alt="photo" key={indx} style={{ height: "200px",borderRadius:"10px 10px 0px 0px"}} /> <br />
                    <label>{movie.title}</label>
                  </div>
                </div>
              )
            })
        }
      </div>
    </>
  )
}

export default MovieSearch