import ReactDOM from 'react-dom/client';
import SearchMovies from "./searchMovies";

function App(){
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies/>
      </div>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)

