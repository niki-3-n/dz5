import React, { Component } from 'react';
import ContactItem from './ContactItem';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    
    return (
      <ul>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={() => onDeleteContact(contact.id)}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList; 