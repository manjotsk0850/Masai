function generatePassword(length, includeNum = true, includeSpecialCh = false) {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = "0123456789";
    const specialChars = "@#$!%&*?";
  
    let allChars = letters;
    if (includeNum) allChars += num;
    if (includeSpecialCh) allChars += specialChars;
  
    let password = "";
    let hasUpper = false, hasNumber = false, hasSpecial = false;
  
    while (password.length < length) {
      let char = allChars[Math.floor(Math.random() * allChars.length)];
      password += char;
  
      if (char >= 'A' && char <= 'Z') hasUpper = true;
      if (num.includes(char)) hasNumber = true;
      if (specialChars.includes(char)) hasSpecial = true;
    }
  
    if (!hasUpper) {
      password = password.slice(1);
      password += "A";
    }
  
    if (includeNum && !hasNumber) {
      password = password.slice(1);
      password += "1";
    }
  
    if (includeSpecialCh && !hasSpecial) {
      password = password.slice(1);
      password += "@";
    }
  
    return password.split('').sort(() => 0.5 - Math.random()).join('');
  }
  
  console.log(generatePassword(10, true, true)); 
  console.log(generatePassword(12, true, false)); 
  console.log(generatePassword(8, false, true)); 