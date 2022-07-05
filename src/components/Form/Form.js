import React, { Component } from "react";
import { nanoid } from "nanoid";

class Form extends Component {
  state = {
    name: "",
    number: "",
    id: "",
  };

  onInputChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
      id: nanoid(),
    });
    console.log(e.currentTarget.value);
    // console.log(this.state.name);
  };

  nameCheck = (someName) => {
    
  }


  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log(`Точто пришло с APP ${this.props.contacts}`)
    this.props.propsForSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

    render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Name
            <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onInputChange}
          />
          </label>
          <label>Phone
            <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            required
            onChange={this.onInputChange}
          />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default Form;
