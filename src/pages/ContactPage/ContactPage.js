import React, { useState } from 'react';
import './ContactPage.scss';

export default function ContactForm({ contactAdded }) {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [services, setServices] = useState(0);
  const [text, setText] = useState(0);

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setServices('');
    setText('');
  };
  const submitContact = async (e) => {
    e.preventDefault();
    try {
      await fetch('/.netlify/functions/contacts', {
        method: 'POST',
        body: JSON.stringify({ firstname, lastname, email, services, text }),
      });
      resetForm();
      contactAdded();
    } catch (err) {
      console.error(err);
    }
    console.log(firstname, lastname, email, services, text);
  };
  return (
    <div className="card">
      <div className="card-header">Love to hear from you.</div>
      <div className="card-body">
        <form className="" onSubmit={submitContact}>
          <div className="form-group">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              name="firstname"
              value={firstname}
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={lastname}
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="select">I'd like to chat about...</label>
            <input
              type="select"
              name="select"
              value={services}
              className="form-control"
              onChange={(e) => setServices(e.target.value)}
            />
            
          </div>
          <div className="form-group">
            <label htmlFor="text">Chat</label>
            <input
              type="text"
              name="text"
              value={text}
              className="form-control"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}


