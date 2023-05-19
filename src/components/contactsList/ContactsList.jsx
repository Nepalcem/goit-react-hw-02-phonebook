import React from 'react';

const ContactsList = ({ contacts }) => {
  return (
    <div className="contacts">
    <h2>Contacts List:</h2>
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>{name}: {number}</li>
      ))}
    </ul>
    </div>
  );
};

export default ContactsList;
