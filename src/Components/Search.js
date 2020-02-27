import React from "react";
import Rate from "./Rate";

class Search extends React.Component {
  state = {
    inputValue: "",
    ratingValue: 1
  };

  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Type movie name to search"
          onChange={e => {
            this.setState(
              {
                inputValue: e.target.value
              },
              () => this.props.searchMovie(this.state.inputValue)
            );
          }}
        />
        <Rate
          starIndex={x =>
            this.setState({ ratingValue: x }, () =>
              this.props.searchByRating(this.state.ratingValue)
            )
          }
          rating={this.state.ratingValue}
        />
      </div>
    );
  }
}

export default Search;
