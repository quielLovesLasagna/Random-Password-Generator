"use strict";

// Elements
const pwBox = document.getElementById("password");
const generateBtn = document.getElementById("generate-btn");
const copy = document.getElementById("copy");
// End of Elements

// password length
const pwLength = 12;

// password characters
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=";
const allChars = upperCase + lowerCase + nums + symbols;

// Functions
// generate random password
const createPW = () => {
  let password = "";
  for (let i = 0; i < pwLength; i++) {
    const randomIndx = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndx];
  }
  pwBox.value = password;
};

// copy generated pw
const copyPw = () => {
  pwBox.select();
  document.execCommand("copy");
};
// End of Functions

// Event listeners
// generate pw when generate btn is clicked
generateBtn.addEventListener("click", createPW);

// copy pw when copy is clicked
copy.addEventListener("click", copyPw);
// End of Event listeners
