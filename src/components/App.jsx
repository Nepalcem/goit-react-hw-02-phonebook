import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactsList from './contactsList/ContactsList';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const userObj = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [userObj, ...contacts],
    }));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addContact}></Form>
        {/* <Filter value={this.filter}></Filter> */}
        <ContactsList contacts={this.state.contacts}></ContactsList>
      </div>
    );
  }
}
