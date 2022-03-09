import React, { Component } from "react";
import PropTypes from "prop-types";

class Movie extends Component {
 
  render() {
      const {id,title,year,poster}=this.props
    return (
        <div className="card">
  <div className="card-image">
    <figure className="image">
      <img src={poster} alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
    <p className="title is-4">{title}</p>
    <p className="subtitle is-6">{year}</p>
      </div>
    </div>
    </div>
    </div>

    )
  }
}

export default Movie;
