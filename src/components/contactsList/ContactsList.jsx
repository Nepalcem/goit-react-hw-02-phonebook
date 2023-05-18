import React from 'react';

const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default ContactsList;
