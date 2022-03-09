import React, { useState } from "react";

function Info(props) {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div style={{ border: "1px solid #000", margin: 5, padding: 5 }}>
      <h3>Joke:</h3>
      <p>{props.question}</p>
      <p>{props.answer}</p>
      <button onClick={increment}>Like {counter}</button>
    </div>
  );
}

export default Info;
