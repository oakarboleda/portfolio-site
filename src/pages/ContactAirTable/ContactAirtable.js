import React from 'react';
import './ContactPage.scss'


export class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Edit form needs the record data. empty for create form
      name: this.props.record ? this.props.record.fields.Name : '',
      email: this.props.record ? this.props.record.fields.Email : ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.createRecord = this.createRecord.bind(this);
    this.updateRecord = this.updateRecord.bind(this);
  }

  // handle multiple inputs
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,


    }
    if (this.props.record) {
      data.recordId = this.props.record.id;
      this.updateRecord(data);
    } else {
      this.createRecord(data);
    }
  }

  createRecord(data) {
    fetch('/.netlify/functions/airtableCreate/airtableCreate.js', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(() => this.props.listRecords())
      .catch((error) => {
        console.error('Error:', error);
      });

    this.setState({
      name: '',
      notes: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col form-group">
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
              className="form-control form-control-sm" />
          </div>
          <div className="col form-group">
            <label>Notes</label>
            <input
              name="Recruiting Company" // name should matched with your airtable table field
              type="text"
              value={this.state.notes}
              onChange={this.handleInputChange}
              className="form-control form-control-sm"
              placeholder="Recruiting Company"
            />
          </div>
          {/*<input*/}
          {/*  name="Phone" // name should matched with your airtable table field*/}
          {/*  type="Phone"*/}
          {/*  placeholder="Phone"*/}

          {/*  onChange={handleInput}*/}
          {/*/>*/}
          {/*<input*/}
          {/*  name="Email" // name should matched with your airtable table field*/}
          {/*  type="Email"*/}
          {/*  placeholder="Email"*/}
          {/*  required*/}
          {/*  onChange={handleInput}*/}
          {/*/>*/}

          {/*<input*/}
          {/*  name="How did you find me?"*/}
          {/*  type="select"*/}
          {/*  placeholder="How did you find me?"*/}
          {/*  onChange={handleInput}*/}
          {/*/>*/}
          {/*<textarea*/}
          {/*  name="message" // name should matched with your airtable table field*/}
          {/*  placeholder="Message"*/}
          {/*  onChange={handleInput}*/}
          {/*/>*/}
          <input name="submit" type="submit" value="Send" />
        </div>
      </form>

    )
  }
}


