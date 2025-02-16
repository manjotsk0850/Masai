function outerFunction() {
    let message = "Hello, this is a closure!";
    
    return function innerFunction() {
      console.log(message);
    }
  }
  
  const storedFunction = outerFunction();
  storedFunction(); 