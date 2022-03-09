import React from "react";
import ToDoItems from "./ToDoItems";
import items from "./items.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: items,
    };    
    this.handle = this.handle.bind(this);
  }

  handle(id) {
    this.setState((prevState) => {
      const arr2 = prevState.data.map((ob) => {
        if (ob.id === id) {
          return{
            ...ob,
            completed: !ob.completed


          }
        }
        return ob
      });
      console.log(prevState.data)
      console.log(arr2)

      return{
        data:arr2
      }
    });
  }

  render() {
    const arr1 = this.state.data.map((obj) => (
      <ToDoItems
        key={obj.id}
        item={obj}
        handle={this.handle}
      />
    ));
    return <div>{arr1}</div>;
  }
}

export default App;
