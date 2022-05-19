import React, { useState, useEffect } from 'react';
import './App.css';
import Movie from "./Movie"


const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgPath = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {

    getMovies(apiUrl)

  }, [])


  const getMovies = (api) => {

    fetch(api).then((res) => res.json()).then((data) => {
      console.log(data)
      setMovies(data.results)
    })

  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getMovies(SEARCHAPI + searchTerm)
    setSearchTerm("")
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input type="text"
            className="input"
            placeholder="Search"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="main">

        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}

      </div>
    </div>
  );
}

export default App;
