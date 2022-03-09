import React, { Component } from "react";
import Title from "./components/Title";
import {Switch , Route} from 'react-router-dom'
import SearchForm from "./components/SearchForm";
import "./App.css";
import MoviesList from "./components/MoviesList";
import "bulma/css/bulma.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      usedSearch: false
    };
  }

  _handleResults = (result) => {
    this.setState({ results: result, usedSearch:true });
  };

  _renderResults=()=>{
    return this.state.results.length === 0 ? (
      <p>Sorry results not found</p>
    ) : (
      <MoviesList results={this.state.results} />
    )
  }

  render() {
    const { results,usedSearch } = this.state;


    return (
      <div className="App">
        <Title>Search Movie</Title>
        <div className="s-w">
          <SearchForm onResults={this._handleResults} />
        </div>

        {usedSearch ? 
          this._renderResults()
         : 
          <small>Use the form to serch a movie</small>
        }
      </div>
    );
  }
}

export default App;
