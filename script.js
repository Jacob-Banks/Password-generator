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
  let confirmLength = false;
  while (confirmLength === false) {
    length = prompt(
      "Please enter number of characters, theres a minimum of 8 and a max of 128",
      "8"
    );
    if (isNaN(length) === false) {
      //if input is a number change its type from string to number
      length = length / 1;
      console.log(typeof length + " should be number");
    }

    while (length < 8 || length > 128 || Number.isInteger(length) === false) {
      // insure length and integer
      length = prompt(
        "invalid input: a interger between 8 and  128 is required",
        "8"
      );
      if (isNaN(length) === false) {
        length = length / 1;
        console.log(typeof length + " should be number");
      }
    }
    // confirm  wants length
    confirmLength = window.confirm(
      "Are you sure you want a password length of " + length
    );
    if (confirmLength) {
      console.log(length + " confirmed");
    }
  }
}

function getCharType(type) {
  var confirmChar = window.confirm(
    "Do you want  " + type + " characters included?"
  );
  console.log(type + " " + confirmChar + " is confirmed");
  // add type of characters
  if (type === "lowercase" && confirmChar === true) {
    characters += "abcdefghijklmnopqrstuvwxyz"; // adds chartype characters to posiible characters
    lowers = true; //makes goodtogo confirm passW contains chartype
  }
  if (type === "uppercase" && confirmChar === true) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    uppers = true;
  }
  if (type === "numbered" && confirmChar === true) {
    characters += "0123456789";
    numbereds = true;
  }
  if (type === "specialcase" && confirmChar === true) {
    characters += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    specails = true;
  }
}

function insureChar() {
  // if no chartypes were accepted
  if (characters === "") {
    var confirmDefaultChar = window.confirm(
      //  give them a default or reload page
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
    // fill password arrray
    //insure all selected char types are included

    passwordArray = []; //empty the array for each loop

    //randomly fill password with characters
    for (let i = 0; i < length; i++) {
      passwordArray.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    //the check to see if char type is presant
    if (lowers === true) {
      test1 = passwordArray.some((char) => lower.includes(char));
    } else {
      //if its not supposed to be there make it pass goodtogo check
      test1 = true;
    }
    if (uppers === true) {
      test2 = passwordArray.some((char) => upper.includes(char));
    } else {
      test2 = true;
    }
    if (numbereds === true) {
      test3 = passwordArray.some((char) => numbers.includes(char));
    } else {
      test3 = true;
    }
    if (specails === true) {
      test4 = passwordArray.some((char) => special.includes(char));
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
  document.getElementById("headline").innerHTML = "Your Password Is:";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
