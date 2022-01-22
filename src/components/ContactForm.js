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
    if (!name || !email || !message) {
      alert(`Please complete all fields`);
    }
    
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

      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form__input mb-3">
          {/* <p></p> */}
          <label>Name:</label>
          <br/>
          <input
            // required="required"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
            required
          />
        </div>
        
        <div className="form__input mb-3">
        {/* <p>Email address:</p> */}
          <label>Email address</label>
          <br/>
          <input
            // value="text"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Email address"
            required
          />
        </div>

        { validEmailRegex.test(email)
        ? ""
        : <p>{invalidEmail}</p>
        }

        <div className="form__input mb-3">
        {/* <p>Message:</p> */}
        <label>Message:</label>
        <textarea
          className="form-control"
          // value="text"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          rows="8"
          placeholder="Drop me a message here..."
          required
        />
        </div>
        <input type="submit" className="btn btn-secondary"  
        />
      </form>
    </div>
  );
}

export default ContactForm;
