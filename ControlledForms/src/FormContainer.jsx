import React from "react";
import FormComponent from "./FormComponent";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: {
        isVegan: true,
        isKosher: true,
        isLactoseFree: true,
      },
      terms: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //console.log(event)
    const { name, value, type, checked } = event.target;
    console.log(event.target.checked);
    console.log(type);
    console.log(name);

    type === "checkbox"
      ? this.setState((prevState) => {
          return {
            dietaryRestrictions: {
              ...prevState.dietaryRestrictions,
              [name]: checked,
            },
            [name]:checked
          };
        })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    return (
      <div>
        <FormComponent handleChange={this.handleChange} {...this.state} />
      </div>
    );
  }
}

export default Form;
