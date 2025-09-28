import React from 'react';

interface MovieListProps {
  movies: string[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => (
  <div className="card">
    <h2>Movie List</h2>
    <ul>
      {movies.map((movie, i) => <li key={i}>{movie}</li>)}
    </ul>
  </div>
);

export default MovieList;
