// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// establish what character lists include and empty password for gen to fill in
var specialCharList = '@#$%^&*()';
var numcharlist = '0123456789';
var lowercaseCharList = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseCharList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var possibleCharacterList = '';
var password = '';

// Write password to the #password input
function writePassword() {
//establish password length and yell at them if they choose bad
  var passlength = prompt('How long do you want password to be? 8-128 chars','');
  if(passlength < 8){alert ('password must be at least 8 characters.');}
  else if(passlength > 128){alert('password must be less than 128 characters.')};
  
//establish variables for attribute alerts
  var specialCharacters = confirm('Would you like to use special characters?');
  var numericCharacters = confirm('would you like to use numbers?');
  var lowercaseCharacters = confirm('would you like to use lowercase characters?');
  var uppercaseCharacters = confirm('would you like to use uppercase characters?');



//ask if they want to use special characters
  if (specialCharacters === true) {
    possibleCharacterList += specialCharList
};

//ask if they want to use numbers
  if (numericCharacters === true) {
    possibleCharacterList += numcharlist
  };

//ask if they want to use lowercase
  if (lowercaseCharacters === true) {
    possibleCharacterList += lowercaseCharList
  };

//ask if they want to use uppercase
  if (uppercaseCharacters === true) {
    possibleCharacterList += uppercaseCharList
  };

  // create password with attributes accepted
  for (var i = 0; i < passlength; i++) {
    password += possibleCharacterList.charAt(Math.floor(Math.random() * possibleCharacterList.length));
}
// put the password into the text box
passwordText.textContent = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
