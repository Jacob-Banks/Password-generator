// Assignment code here
function getLength() {
  // get the length
  length =
    //toallow decimals monintairaly
    window.prompt(
      "Please enter number of characters, theres a minimum of 8 and a max of 128",
      "8"
    );

  while (length < 8 || length > 128) {
    //insure length range
    length = prompt(
      "invalid input: an integer between 8 and 128 is required",
      "8"
    );
  }

  if (length >= 8 && length <= 128) {
    // confirm  wants length
    let confirmLength = window.confirm(
      "Are you sure you want a password length of " + length
    );

    if (confirmLength === true) {
      console.log(length + " confirmed");
    } else {
      length = prompt(
        "Please enter number of characters, theres a minimum of 8 and a max of 128",
        "8"
      );
    }
    while (length < 8 || length > 128) {
      // insure length
      length = prompt(
        "invalid input a minimum of 8 and a max of 128 is required",
        "8"
      ); // forced interger no more chances to change
    }
  }
}
getLength();
console.log(length);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
