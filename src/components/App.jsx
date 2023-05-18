import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactsList from './contactsList/ContactsList';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  // handleChange = e => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  submitHandler = e => {
    e.preventDefault();
    const userObj = {
      id: nanoid(),
      name: e.target.elements.name.value,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, userObj],
    }));
  }


  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <h1>PhoneBook</h1>
          <label>
            <p>Name:</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              // onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
        <div className="contacts">
          <h2>Contacts List:</h2>
          <ContactsList contacts={this.state.contacts}></ContactsList>
        </div>
      </div>
    );
  }
}
