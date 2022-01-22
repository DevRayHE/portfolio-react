import React, { useState } from 'react';

function ContactForm() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const invalidEmail = "Invalid email address!";
  const validEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return (
      name === 'name' ? setName(value) : "",
      name === 'email' ? setEmail(value) : "",
      name === 'message' ? setMessage(value) : ""
    );
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${name} ${email} your message is: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  }; 

  return (
    <div className="container d-felx flex-row align-items-center">
      <header className="contact__header text-center">
					<h2 className="border-bottom border-secondary border-3 fw-bold align-items-center">
						Contact Form
					</h2>
			</header>

      <form className="form">
        <div className="form__input mb-3">
          <p>Name:</p>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
        </div>
        
        <div className="form__input mb-3">
        <p>Email address:</p>
          <input
            // value="text"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Email address"
          />
        </div>

        { validEmailRegex.test(email)
        ? ""
        : <p>{invalidEmail}</p>
        }

        <div className="form__input mb-3">
        <p>Message:</p>
          <textarea
            className="form-control"
            // value="text"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            rows="8"
            placeholder="Drop me a message here..."
          />
        </div>
        
        <button className="btn btn-secondary" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
