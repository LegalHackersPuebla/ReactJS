import React from "react";
import Info from "./info";
import data from "./data.json";

function App() {
    const arr1= data.map(elem=><Info key={elem.id} question={elem.punchLine} answer={elem.question}/>)
  return (
    <div>
      <h3>Joke-o-Meter</h3>
      {arr1}
    </div>
  );
}

export default App;
