import React from "react";

function FormComponent(props) {
  const { firstName, lastName, age, gender, destination, terms } = props;

  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          value={firstName}
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="lastName"
          value={lastName}
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          name="age"
          placeholder="age"
          value={age}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor="">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />

        <label htmlFor="">
          Dietary restriction
          <br />
          <label htmlFor="">
            Vegan
            <input
              name="isVegan"
              type="checkbox"
              checked={props.dietaryRestrictions.isVegan}
              onChange={props.handleChange}
            />
          </label>
          <label htmlFor="">
            Kosher
            <input
              name="isKosher"
              type="checkbox"
              checked={props.dietaryRestrictions.isKosher}
              onChange={props.handleChange}
            />
          </label>
          <label htmlFor="">
            Lactose Free
            <input
              name="isLactoseFree"
              type="checkbox"
              checked={props.dietaryRestrictions.isLactoseFree}
              onChange={props.handleChange}
            />
          </label>
        </label>

        <br />
        <label htmlFor="">
          Destination
          <select
            name="destination"
            value={destination}
            id=""
            onChange={props.handleChange}
          >
            <option value="">---Select Option---</option>
            <option value="europe">europe</option>
            <option value="asia">asia</option>
            <option value="africa">africa</option>
            <option value="america">america</option>
          </select>
        </label>
        <br />
        <label htmlFor="">
          Acepto los términos y condiciones
          <input
            name="terms"
            type="checkbox"
            checked={terms}
            onChange={props.handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <p>
        <h1>Entered information</h1>
        <h3>First Name:{firstName}</h3>
        <h3>Last Name:{lastName}</h3>
        <h3>Age:{age}</h3>
        <h3>Sex:{gender}</h3>
        <h3>Destination:{destination}</h3>
      </p>
    </div>
  );
}

export default FormComponent;