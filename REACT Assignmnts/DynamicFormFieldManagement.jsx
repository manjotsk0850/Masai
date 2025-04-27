import React, { useState } from 'react';

const DynamicEmailForm = () => {
  const [emails, setEmails] = useState(['']);
  const [errors, setErrors] = useState({});

  // Function to handle changes to the email inputs
  const handleEmailChange = (e, index) => {
    const newEmails = [...emails];
    newEmails[index] = e.target.value;
    setEmails(newEmails);

    // Validate email format
    const newErrors = { ...errors };
    if (!validateEmail(newEmails[index])) {
      newErrors[index] = 'Invalid email format';
    } else {
      delete newErrors[index];
    }
    setErrors(newErrors);
  };

  // Function to add a new email input field
  const addEmailField = () => {
    setEmails([...emails, '']);
  };

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <form>
        {emails.map((email, index) => (
          <div key={index}>
            <input
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(e, index)}
              placeholder="Enter email"
            />
            {errors[index] && <p style={{ color: 'red' }}>{errors[index]}</p>}
          </div>
        ))}
        <button type="button" onClick={addEmailField}>
          Add Email
        </button>
      </form>

      <div>
        <h3>Submitted Emails:</h3>
        {emails.map((email, index) => (
          <p key={index}>{email}</p>
        ))}
      </div>
    </div>
  );
};

export default DynamicEmailForm;