// Assignment code here
const lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

let length = 0;
let characters = "";
let passwordG = 0;
let lowers = false;
let uppers = false;
let numbereds = false;
let specails = false;
let test1 = false;
let test2 = false;
let test3 = false;
let test4 = false;
let z = 0;

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
function getCharType(type) {
  let charTypes = prompt(" do you want " + type + " characters ?", "yes or no");
  //ask if they want type case
  while (
    charTypes !== "yes" &&
    charTypes !== "y" &&
    charTypes !== "no" &&
    charTypes !== "n"
  ) {
    //insure yes or no
    charTypes = prompt(
      " error you must enter 'yes' or 'no' Do you want " +
        type +
        " characters ?",
      "yes or no"
    );
  }
  if (charTypes === "yes" || charTypes === "y") {
    var confirmChar = window.confirm(
      //confirm yes
      charTypes + " I want " + type + " characters included?"
    );
    if (confirmChar === true) {
      console.log(charTypes + "confirmed");
      charTypes = "yes";
    } else {
      charTypes = "no"; //switch value if cancel is clicked
      console.log("changed their mind");
    }
  } else {
    //if chartype === no
    var confirmChar = window.confirm(
      //confirm no
      charTypes + " I do not want " + type + " characters included?"
    );
    if (confirmChar == true) {
      console.log(charTypes + "confirmed");
    } else {
      charTypes = "yes";
      console.log("changed their mind");
    }
  }

  // add type of characters
  if (type === "lowercase" && charTypes === "yes") {
    characters += "abcdefghijklmnopqrstuvwxyz";
    lowers = true;
  }
  if (type === "uppercase" && charTypes === "yes") {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    uppers = true;
  }
  if (type === "numbered" && charTypes === "yes") {
    characters += "0123456789";
    numbereds = true;
  }
  if (type === "specialcase" && charTypes === "yes") {
    characters += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    specails = true;
  }
}
function generatePassword() {
  getLength();
  getCharType("lowercase");
  getCharType("uppercase");
  getCharType("numbered");
  getCharType("specialcase");

  var charactersLength = characters.length;
  var goodToGo = false;

  while (goodToGo == false) {
    // fill password arrray //insure all selected char types are included

    //randomly fill password with characters
    for (i = 0; i < length; i++) {
      passwordG.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    //the check to see if char type is presant
    if (lowers === true) {
      test1 = passwordG.some((el) => lower.includes(el));
    } else {
      //if its not supposed to be there make it pass goodtogo check
      test1 = true;
    }
    if (uppers === true) {
      test2 = passwordG.some((el) => upper.includes(el));
    } else {
      test2 = true;
    }
    if (numbereds === true) {
      test3 = passwordG.some((el) => numbers.includes(el));
    } else {
      test3 = true;
    }
    if (specails === true) {
      test4 = passwordG.some((el) => special.includes(el));
    } else {
      test4 = true;
    }
    z = z + 1; // counter for how many attemps untill good to go passed
    // if all the selected char types are present then move on to displaying password
    if (test1 === true && test2 === true && test3 === true && test4 === true) {
      goodToGo = true;
    }
  }
  console.log("included characters " + characters);
  console.log("this ran  " + z + "  times");
  return passwordG.join("");
}
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
