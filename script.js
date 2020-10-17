// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //create separate groups for each set of characters
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let symbols = " !\"#$%&'()*+,-./:;<=>?@[]\\^_`{}|~";
  let nums = "1234567890";

  //set variables for what user wants in password
  let pwLength = prompt("Please enter a number from 8 to 128 for password length.");
  //check that the user entered a valid number
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    return alert("Dude, pick a number between 8 and 128!");
  }
  let lowerQuery = confirm("Do you want lowercase letters in your password?");
  let upperQuery = confirm("Do you want uppercase letters in your password?");
  let symbolQuery = confirm("Do you want symbols in your password?");
  let numsQuery = confirm("Do you want numbers in your password?");
  //create final password variable
  builtPassword = "";
  //used to create string of character types user wants
  selectedOptions = "";

  //logic to create string of all types of characters user wants in password
  if (lowerQuery === true) {
    if (upperQuery === true) {
      if (symbolQuery === true) {
        if (numsQuery === true) {
          //1 runs if user wants all 4 options
          builtPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
          builtPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
          builtPassword += symbols[Math.floor(Math.random() * symbols.length)];
          builtPassword += nums[Math.floor(Math.random() * nums.length)];
          selectedOptions = lowerCase + upperCase + symbols + nums;
          for (let i = 4; i < pwLength; i++) {
            builtPassword += selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
          }
          return builtPassword;
        } else {
          //2 runs if user wants lower, upper, symbols, not numbers
          builtPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
          builtPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
          builtPassword += symbols[Math.floor(Math.random() * symbols.length)];
          selectedOptions = lowerCase + upperCase + symbols;
          for (let i = 3; i < pwLength; i++) {
            builtPassword += selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
          }
        }
        return builtPassword;
      } else if (numsQuery === true) {
        //3 runs if user wants lower, upper, not symbols, numbers
        builtPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        builtPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
        builtPassword += nums[Math.floor(Math.random() * nums.length)];
        selectedOptions = lowerCase + upperCase + nums;
        for (let i = 3; i < pwLength; i++) {
          builtPassword += selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
        }
        return builtPassword;
      } else {
        //4 runs if user wants lower, upper, not symbols, not numbers
        builtPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        builtPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
        selectedOptions = lowerCase + upperCase;
        for (let i = 2; i < pwLength; i++) {
          builtPassword += selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
        }
        return builtPassword;
      }
    } else if (symbolQuery === true) {
      //5 runs if user wants lower, not upper, symbols, numbers
      if (numsQuery === true) {
        builtPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        builtPassword += symbols[Math.floor(Math.random() * symbols.length)];
        builtPassword += nums[Math.floor(Math.random() * nums.length)];
        selectedOptions = lowerCase + symbols + nums;
        for (let i = 3; i < pwLength; i++) {
          builtPassword += selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
        }
        return builtPassword;
      } else {
        //6 runs if user wants lower, not upper, symbols, not numbers
        builtPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        builtPassword += symbols[Math.floor(Math.random() * symbols.length)];
        selectedOptions = lowerCase + symbols;
        for (let i = 2; i < pwLength; i++) {
          builtPassword += selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
        }
        return builtPassword;
      }
      return builtPassword;
    } else if (numsQuery === true) {
      //7 runs if user wants lower, not upper, not symbols, numbers
      builtPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
      builtPassword += nums[Math.floor(Math.random() * nums.length)];
      selectedOptions = lowerCase + nums;
      for (let i = 2; i < pwLength; i++) {
        builtPassword += selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
      }
      return builtPassword;
    } else {
      //8 runs is user wants lower, not upper, not symbols, not numbers
      builtPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
      selectedOptions = lowerCase;
      for (let i = 1; i < pwLength; i++) {
        builtPassword += selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
      }
      return builtPassword;
    }
    return builtPassword;
  } else if (upperQuery === true) {
    if (symbolQuery === true) {
      if (numsQuery === true) {
        //9 runs if user wants no lower, upper, symbol, nums
        builtPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
        builtPassword += symbols[Math.floor(Math.random() * symbols.length)];
        builtPassword += nums[Math.floor(Math.random() * nums.length)];
        selectedOptions = upperCase + symbols + nums;
        for (let i = 3; i < pwLength; i++) {
          builtPassword += selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
        }
        return builtPassword;
      } else {
        //10 runs if user wants no lower, upper, symbol, no nums
        builtPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
        builtPassword += symbols[Math.floor(Math.random() * symbols.length)];
        selectedOptions = upperCase + symbols;
        for (let i = 2; i < pwLength; i++) {
          builtPassword += selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
        }
        return builtPassword;
      }
    } else if (numsQuery === true) {
      //11 runs if user wants no lower, upper, no symbol, nums
      builtPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
      builtPassword += nums[Math.floor(Math.random() * nums.length)];
      selectedOptions = upperCase + nums;
      for (let i = 2; i < pwLength; i++) {
        builtPassword += selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
      }
      return builtPassword;
    } else {
      //12 runs if user wants no lower, upper, no symbol, no nums
      builtPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
      selectedOptions = upperCase;
      for (let i = 1; i < pwLength; i++) {
        builtPassword += selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
      }
      return builtPassword;
    }
  } else if (symbolQuery === true) {
    if (numsQuery === true) {
      //13 runs if user wants no lower, no upper, symbol, nums
      builtPassword += symbols[Math.floor(Math.random() * symbols.length)];
      builtPassword += nums[Math.floor(Math.random() * nums.length)];
      selectedOptions = symbols + nums;
      for (let i = 2; i < pwLength; i++) {
        builtPassword += selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
      }
      return builtPassword;
    } else {
      //14 runs if user wants no lower, no upper, symbols, no nums
      builtPassword += symbols[Math.floor(Math.random() * symbols.length)];
      selectedOptions = symbols;
      for (let i = 1; i < pwLength; i++) {
        builtPassword += selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
      }
      return builtPassword;
    }
  } else if (numsQuery === true) {
    //15 runs if user wants no lower, no upper, no symbol, nums
    builtPassword += nums[Math.floor(Math.random() * nums.length)];
    selectedOptions = nums;
    for (let i = 1; i < pwLength; i++) {
      builtPassword += selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
    }
    return builtPassword;
  } else {
    //16 runs if user doesn't select any set of character to use
    return alert("You must select at least 1 set of characters to use in your password!");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
