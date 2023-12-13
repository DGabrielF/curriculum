import React from "react";

export default function ContactItem ({contact, index}) {
  return (
    <div key={Math.floor(Math.random() * 10001)} className="contact-item">
      <h4>{contact.name}</h4>
      {(contact.link)?<a href={contact.link}>{contact.text}</a>:<span>{contact.number}</span>}
    </div>
  )
}