import "./App.css";
import MovieList from "./pages/MovieList";
import Nav from "./components/Nav";
import { MovieProvider } from "./context/MovieContext";
import SearchBar from "./components/SearchBar";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <MovieProvider>
      <SearchProvider>
        <div className="App">
          <section style={{ maxWidth: "144rem", margin: "0 auto" }}>
            <Nav />
            <br />
            <h1
              style={{
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "500",
                color: "rgba(255, 25, 25, 0.801)",
                padding: "2rem",
              }}
            >
              Movies in Theatres
            </h1>
            <MovieList />
          </section>
        </div>
      </SearchProvider>
    </MovieProvider>
  );
}

export default App;
