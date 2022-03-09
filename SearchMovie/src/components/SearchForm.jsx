import React, { Component } from "react";

const API_KEY='891db679'

class SearchForm extends Component {
    constructor(){
        super()
        this.state={
            inputMovie:"",
        }
    }

    _handleChange=(event)=>{
        this.setState({inputMovie: event.target.value})

    }

    _handleSubmit=(event)=>{
        event.preventDefault()
        const {inputMovie}=this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
        .then(response=>response.json())
        .then(data=>{
          const {Search=[] , totalresults="0"}= data
          console.log({Search,totalresults})
          this.props.onResults(Search)

        })

    }


  render() {
    return (
        <form action="" onSubmit={this._handleSubmit}>
      <div className="field has-addons">
        <div className="control">
        <input className="input" type="text" placeholder="Movie to search..." onChange={this._handleChange}/>
        </div>
        <div className="control">
          <button className="button is-info">Search</button>
        </div>
        <div>
            
        </div>
      </div>
      </form>
    );
  }
}

export default SearchForm;
