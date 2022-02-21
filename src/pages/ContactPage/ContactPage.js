import React from 'react';
import './ContactPage.scss';

/*
* I know this contact form goes nowhere HA, but I working on getting my airtable api to connect with my form and auto fill it for me
*
* */


export default function Contact() {
  return (
    <main id="contact-page">
      <section className="section-contact">
        <div className="container">
          <h1 className="font-loader">Contact Me!</h1>
          <p className="font-loader">
            Discuss a project or just want to say hi? My Inbox is open for all.
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="firstname">First name*</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                required
                className="form-element"
                placeholder="John"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last name*</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                required
                className="form-element"
                placeholder="Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address*</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form-element"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-element"
                placeholder="(666)666-1111"
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                name="company"
                id="company"
                className="form-element"
                placeholder="I work for..."
              />
            </div>
            <div className="form-group full">
              <label htmlFor="message">What are you looking for?</label>
              <textarea
                name='message'
                 id='message'
                  className='form-element'
                 placeholder='I want a website please...'
                 />
            </div>
            <div className="submit-group">
              <input type="submit" value="SEND MESSAGE" />
            </div>
          </form>
        </div>
      </section>
    </main>
    )

}
