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
let passwordArray = [];
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
  length = parseFloat(
    //to allow decimals monintairaly
    window.prompt(
      "Please enter number of characters, theres a minimum of 8 and a max of 128",
      "8"
    )
  );

  while (length < 8 || length > 128 || Number.isInteger(length) === false) {
    //insure length range and no decimals
    length = parseFloat(
      prompt("invalid input: an integer between 8 and 128 is required", "8")
    );
  }

  // confirm  wants length
  let confirmLength = window.confirm(
    "Are you sure you want a password length of " + length
  );

  if (confirmLength) {
    console.log(length + " confirmed");
  } else {
    length = parseFloat(
      prompt(
        "Please enter number of characters, theres a minimum of 8 and a max of 128",
        "8"
      )
    );

    while (length < 8 || length > 128 || Number.isInteger(length) === false) {
      // insure length
      length = parseFloat(
        prompt("invalid input a minimum of 8 and a max of 128 is required", "8")
      ); // forced interger no more chances to change
    }
  }
}

function getCharType(type) {
  let charTypesPrompt = prompt(
    " do you want " + type + " characters ?",
    "yes or no"
  );
  //ask if they want type case
  let charTypes = charTypesPrompt.toLowerCase();
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
      "Yes I want " + type + " characters included?"
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
      "No I do not want " + type + " characters included?"
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

function insureChar() {
  if (characters === "") {
    var confirmDefaultChar = window.confirm(
      // call them a moron and give them a default or reload page
      " Characters must be included, to go with default settings select ok, to start over select cancel"
    );

    if (confirmDefaultChar === true) {
      //default is lower upper number
      characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      lowers = true;
      uppers = true;
      numbereds = true;
    } else {
      //refresh page
      location.reload;
    }
  }
}
function generatePassword() {
  //reset values if genertor is run agaian
  characters = "";
  length = 0;
  lowers = false;
  uppers = false;
  numbereds = false;
  specails = false;
  test1 = false;
  test2 = false;
  test3 = false;
  test4 = false;
  z = 0;

  getLength();
  getCharType("lowercase");
  getCharType("uppercase");
  getCharType("numbered");
  getCharType("specialcase");

  // if they said no to all char types
  insureChar();
  //end of prompts

  var charactersLength = characters.length;
  var goodToGo = false;

  while (goodToGo == false) {
    // fill password arrray //insure all selected char types are included
    passwordArray = []; //empty array for each loop

    //randomly fill password with characters
    for (i = 0; i < length; i++) {
      passwordArray.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    //the check to see if char type is presant
    if (lowers === true) {
      test1 = passwordArray.some((el) => lower.includes(el));
    } else {
      //if its not supposed to be there make it pass goodtogo check
      test1 = true;
    }
    if (uppers === true) {
      test2 = passwordArray.some((el) => upper.includes(el));
    } else {
      test2 = true;
    }
    if (numbereds === true) {
      test3 = passwordArray.some((el) => numbers.includes(el));
    } else {
      test3 = true;
    }
    if (specails === true) {
      test4 = passwordArray.some((el) => special.includes(el));
    } else {
      test4 = true;
    }
    z++; // counter for how many attemps untill good to go passed

    // if all the selected char types are present then move on to displaying password
    if (test1 === true && test2 === true && test3 === true && test4 === true) {
      goodToGo = true;
    }
  }
  console.log("included characters " + characters);
  console.log("this ran  " + z + "  times");
  return passwordArray.join("");
} //end of the generatepassword function

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
