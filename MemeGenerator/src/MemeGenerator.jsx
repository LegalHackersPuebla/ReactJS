import React, { Component } from "react";
import "./style.css";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
      topInput: "",
      bottomInput: "",
    };

    this.handleOnchange = this.handleOnchange.bind(this);
    this.randomMeme = this.randomMeme.bind(this);
  }

  handleOnchange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((obj) => {
        const { memes } = obj.data;
        this.setState({
          allMemeImgs: memes,
        });
      });
  }

  submit = (e) => {
    e.preventDefault();
  };

  randomMeme() {
    const { allMemeImgs } = this.state;
    const randomNum = Math.floor(Math.random() * allMemeImgs.length);
    const randomUrl = allMemeImgs[randomNum].url;
    console.log(randomNum);
    this.setState({ randomImage: randomUrl });
  }

  render() {
    const {
      topInput,
      bottomInput,
      randomImage,
      allMemeImgs,
      prueba,
    } = this.state;

    return (
      <div>
        <form className="meme-form" onSubmit={this.submit}>
          <input
            type="text"
            name="topInput"
            placeholder="Texto Superior"
            value={topInput}
            onChange={this.handleOnchange}
          />
          <input
            type="text"
            name="bottomInput"
            placeholder="Texto Inferior"
            value={bottomInput}
            onChange={this.handleOnchange}
          />

          <button onClick={this.randomMeme}>Gen</button>
        </form>
        <div className="meme">
          <img src={randomImage} alt="" />
          <h2 className="top">{topInput}</h2>
          <h2 className="bottom">{bottomInput}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
