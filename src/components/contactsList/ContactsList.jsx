import React from 'react';

const ContactsList = ({ contacts, removeContact }) => {
  return (
    <div className="contacts">
      <h2>Contacts List:</h2>
      <ul>
        {contacts.map(({ name, id, number }) => (
          <li key={id}>
            <span>{name}</span>: <span>{number} </span>
            <button onClick={() => removeContact(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
