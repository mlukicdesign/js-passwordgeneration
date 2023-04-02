// Assignment Code

// Ask User password length  (8 - 128 characters) 
//    - Display error if length is incorrect 


//Ask if symbols are required 
// Ask if user wants lowercase characters 
// Ask if user wants uppercase characters 
// Ask if user wants numbers 

// Generate pass based on criteria 
// Return generated password
// update DOM

let generateBtn = document.querySelector("#generate");


//Generate password Function

function generatePassword() {

//Password Length 
let length = parseInt(prompt("Enter the desired password length (between 8 and 128 characters):"));
if (isNaN(length)) {
// If User Clicks Cancel
  alert("Password generation cancelled.");
  return "Your Secure Password"
}
while (length < 8 || length > 128) {
  length = parseInt(prompt("Password length must be between 8 and 128 characters. Enter the desired password length:"));
  if (isNaN(length)) {
    alert("Password generation cancelled.");
    return "Your Secure Password"
  }
}

// Password characteristics confirmation

  let lowercase = confirm("Include lowercase letters?");
  let uppercase = confirm("Include uppercase letters?");
  let numbers = confirm("Include numbers?");
  let symbols = confirm("Include symbols (!, @, #, $, %)?");
  

// If True add & assign characters

  let charset = "";
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) charset += "0123456789";
  if (symbols) charset += "!@#$%";

  // Check At least one character is confimed

  if (!lowercase && !uppercase && !numbers && !symbols) {
    alert("You must select at least one password characteristic.");
    alert("Password generation cancelled.");
    return "Your Secure Password"
  }
  
  // Password 'For' loop random generation
  // When number is less then length (), add random character
  // Returns password
  
  let password = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
return password;
}


// Write password to the #password input

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
