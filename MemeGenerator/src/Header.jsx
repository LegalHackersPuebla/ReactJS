import React from "react";
import MemeGenerator from "./MemeGenerator";

function Header() {
  return (
    <header style={{ border: "1px solid #000", marginTop: 10, padding: 10 }}>
      <img
        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
        alt="Problem?"
        width="100" 
        height="200"
      />
      <p>Meme Generator</p>
    </header>
  );
}

export default Header;
