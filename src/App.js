import "./App.css";
import MovieList from "./pages/MovieList";
import Nav from "./components/Nav";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
