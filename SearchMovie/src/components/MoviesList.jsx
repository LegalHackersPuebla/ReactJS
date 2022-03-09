import React, { Component } from "react";
import Movie from "./Movie";


class MoviesList extends Component {
  render() {
    const { results } = this.props;
    return (
      <div className="MoviesList">
        {results.map((elem) => {
          return (
            <div key={elem.imdbID} className="MoviesList-item">
              <Movie id={elem.imdbID} title={elem.Title} year={elem.Year} poster={elem.Poster} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default MoviesList;
