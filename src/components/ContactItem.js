import React from 'react';

function ContactItem({ contact, onDelete }) {
  return (
    <li>
      {contact.name}: {contact.number}
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default ContactItem; 