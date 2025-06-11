import React, { Component } from 'react';

class ContactItem extends Component {
  render() {
    const { contact, onDelete } = this.props;
    
    return (
      <li>
        {contact.name}: {contact.number}
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </li>
    );
  }
}

export default ContactItem; 