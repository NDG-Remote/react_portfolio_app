import React, { Component } from 'react';
import ButtonContact from './ButtonContact';

class ContactForm extends Component {
  // You can handle form submissions and events using React's methods
  handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };

  render() {
    return (
      <div>
        <form styles={`mt-10`} onSubmit={this.handleSubmit}>
          {/* Your form fields here */}
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <button type="submit">Submit</button>
          <ButtonContact styles={`mt-10`} />
        </form>
      </div>
    );
  }
}

export default ContactForm;
