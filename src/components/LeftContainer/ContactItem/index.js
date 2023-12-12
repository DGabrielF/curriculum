import React from "react";

export default function ContactItem ({contact}) {
  return (
    <div className="contact-item" key={contact.name}>
      <h4>{contact.name}</h4>
      {(contact.link)?<a href={contact.link}>{contact.text}</a>:<span>{contact.number}</span>}
    </div>
  )
}