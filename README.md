# js-passwordgeneration
A Javascript based password generator for module 3's challenge

Please view the deployed application via the link below:
https://mlukicdesign.github.io/js-passwordgeneration/

<img src="assets/Screenshot 2023-04-05 at 9.52.30 pm.png">

---
<h1>Acceptance Criteria</h1>
- GIVEN I need a new, secure password
- WHEN I click the button to generate a password
- THEN I am presented with a series of prompts for password criteria
- WHEN prompted for password criteria
- THEN I select which criteria to include in the password
- WHEN prompted for the length of the password
- THEN I choose a length of at least 8 characters and no more than 128 characters
- WHEN asked for character types to include in the password
- THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
- WHEN I answer each prompt
- THEN my input should be validated and at least one character type should be selected
- WHEN all prompts are answered
- THEN a password is generated that matches the selected criteria
- WHEN the password is generated
- THEN the password is either displayed in an alert or written to the page


---

<h1>Project Pseudo Code:</h1>

1. Ask users desired length;
2. Ask user if they would like to include symbols.
3. Ask user if they would like to include numbers
4. Ask user if they would like to include uppercase
5. Ask user if they would like to include numbers
6. Generate Password based on user's selected criteria 
7. Insert text to output


---

<h1> Function Process </h1>


The generatePassword functions uses prompts to ask the user for their desired password characterstics. 

I have utilised a 'white' loop to check if characters are above 8 and below 128. This will continue until the desired range is provided. Additionally, if the user cancels the operation, an alert is displayed to improve usability.

Each characteristic of the password has been assigned a variable with a confirmation prompt. The function first creates an empty charset string and then checks the boolean values of the four arguments to determine which characters to include in the charset. If a boolean value is true, the corresponding set of characters is added to the charset using "+=" operator. 

An if statement has been added to display an alert if no password characteristics are selected. If all of the boolean variables lowercase, uppercase, numbers, and symbols are false, which indicates that no password characteristics were selected, the function is then reset and the user is notified. It then uses a loop to randomly select length characters from the charset string and add them to the password variable.

The function writePassword adds the password to frotnend with it's associated css ID. 

Another if statement has been added to check if the user cancels at the password length prompt using the isNaN() function. If the user cancels, an alert is displayed and the function returns. This increases usability.

-----




