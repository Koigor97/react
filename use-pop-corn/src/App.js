import { useEffect, useState } from "react";
import { WatchedMovieSummary } from "./WatchedMovieSummary";
import { WatchMovieList } from "./WatchMovieList";
import { SelectedMovie } from "./SelectedMovie";
import { MovieList } from "./MovieList";
import { MovieBox } from "./MovieBox";

////////////////////////////////////////////////////////////////////

export const KEY = "9d0e2ab0";

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

/////////////////////////////////////////////////////////////////
export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectMovie(movieId) {
    setSelectedId((selectedId) => (selectedId === movieId ? null : movieId));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatchedMovie(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatchedMovie(movieId) {
    setWatched((watched) =>
      watched.filter((movie) => movie.imdbID !== movieId)
    );
  }

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!response.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await response.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
          // console.log(data.Search);
          setError("");
        } catch (error) {
          if (error.name !== "AbortError") {
            setError(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <>
      <NavBar>
        <SearchBar query={query} setQuery={setQuery} />
        <NumOfSearchResults movies={movies} />
      </NavBar>
      <Main>
        <MovieBox>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </MovieBox>
        <MovieBox>
          {selectedId ? (
            <SelectedMovie
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatchedMovie={handleAddWatchedMovie}
              watched={watched}
            />
          ) : (
            <>
              <WatchedMovieSummary watched={watched} />
              <WatchMovieList
                watched={watched}
                onDelete={handleDeleteWatchedMovie}
              />
            </>
          )}
        </MovieBox>
      </Main>
    </>
  );
}

// /////////////////////////////////////////////////
// // Isloading component
export function Loader() {
  return <p className="loader">Loading...</p>;
}

// /////////////////////////////////////////////////
// // Error component
function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔️</span>
      {message}
    </p>
  );
}

///////////////////////////////////////////////////////////////
// NavBar large component
function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

////////////////////////////////////////////////////////////
// Main component
function Main({ children }) {
  return <main className="main">{children}</main>;
}

//////////////////////////////////////////////////////////////////
// Search Bar component
function SearchBar({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

/////////////////////////////////////////////////////////////////
// Logo component
function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

////////////////////////////////////////////////////////////////
// NumberOfSearchResults component
function NumOfSearchResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
