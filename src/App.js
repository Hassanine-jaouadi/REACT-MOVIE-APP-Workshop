import React from "react";

import { moviesData } from "./Components/data";
import Search from "./Components/Search";
import MoviesList from "./Components/MoviesList";
import AddMovie from "./Components/AddMovie";
import LoaderHOC from "./Components/HOC/LoaderHOC"; // import the HOC

import "./App.css";

// instead of returning the MoviesList  we will wrapping it into HOC
const WithLoaderList = LoaderHOC(MoviesList);
class App extends React.Component {
  state = {
    minRating: 1,
    nameFilter: "",
    moviesData: moviesData,
    isLoading: false
  };

  AddMovie = newMovie => {
    this.setState({
      moviesData: [...this.state.moviesData, newMovie]
    });
  };

  searchMovie = x => {
    this.setState({
      nameFilter: x
    });
  };

  searchByRating = x => {
    this.setState({
      minRating: x
    });
  };

  render() {
    return (
      <div className="App">
        <Search
          searchMovie={this.searchMovie}
          searchByRating={this.searchByRating}
        />
        <WithLoaderList
          moviesData={this.state.moviesData}
          nameFilter={this.state.nameFilter}
          minRating={this.state.minRating}
        />
        <AddMovie AddMovie={this.AddMovie} />
      </div>
    );
  }
}

export default App;
