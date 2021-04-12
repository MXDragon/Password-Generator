// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// make generatePassword function 

function generatePassword(){
  //Welcome user prompt
  window.alert("Welcome to Password Generator 5000: Written by Bryan Bentz");
  window.alert("Please bear with the Generator through these prompts");

    //Grab variable for length
    //inital pass
    var passLength = window.prompt("Please enter a number between 8 and 128");
    
    //verify is number and length
    if ( isNaN(passLength) || passLength < 8 || passLength > 128 ) {
      var passLength = window.prompt("Please enter a number between 8 and 128");
    }else {
    //has confirmed Length and type
    window.alert("Thank you, that was a valid entry");
    };


    //WHEN prompted for character types to include in the password
    // THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
    


  


}