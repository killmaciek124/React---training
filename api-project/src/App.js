import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // wazny koncept..
  // ... do loadingState'a!!!
  const fetchMoviesHandler = () => {
    fetch("https://swapi.dev/api/films")
      .then((x) => {
        setIsLoading(true);
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
          };
        });
        setMovies(transformedMovies);
      })
      .then((x) => {
        setIsLoading(false);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* using loadingState: */}
        {!isLoading && movies.length > 0 && <MoviesList movies={dummyMovies} />}
        {!isLoading && movies.length === 0 && <p>no movies foound</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
