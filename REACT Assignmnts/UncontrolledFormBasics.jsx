import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const enteredText = inputRef.current.value;
    
    if (enteredText) {
      alert(`Entered Text: ${enteredText}`);
      inputRef.current.value = '';
    } 
    else {
      alert('Please enter some text');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter something"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;