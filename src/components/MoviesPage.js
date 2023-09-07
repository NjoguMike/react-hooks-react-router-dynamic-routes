import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {

  const match = useParams()
  console.log(match)

  // 
  return (
    <div>
      <h3>Welcome, Please select a Movie</h3>
      <MoviesList movies={movies} />
      <Routes>
        <Route path={`/:id`} element={<MovieShow movies={movies}/>}/>
      </Routes>
    </div>
  );
}
export default MoviesPage;
