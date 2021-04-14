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
    var passLength = window.prompt("Please enter a number between 8 and 128", 0);
    
    //verify is number and length
    while ( isNaN(passLength) || passLength < 8 || passLength > 128 ) {
      window.alert("Invalid Criteria");
      var passLength = window.prompt("Please enter a number between 8 and 128");
    }
    
    
    
      var isLowerCase = "n";
      var isUpperCase = "n";
      var isNumeric = "n";
      var isSpecialChar = "n";
    while (isLowerCase === "n" && isUpperCase === "n" && isNumeric === "n" && isSpecialChar === "n"){
      
      //prompt user for lowercase
      isLowerCase = window.prompt("Would you like to include lowercase letters? y/n")
      //check for isLowerCase proper input
      while (isLowerCase  != "y" && isLowerCase !="n" ) {
        window.alert("Invalid Criteria");
        isLowerCase = window.prompt("Would you like to include lowercase letters? y/n")
      }
      
      //prompt user for isUpperCase
      isUpperCase = window.prompt("Would you like to include UPPERCASE letter? y/n")

      //checking isUpperCase criteria
      while (isUpperCase != "y" && isUpperCase !="n"){
        window.alert("Invalid Criteria");
        isUpperCase = window.prompt("Would you like to include UPPERCASE letter? y/n")
      }

      //prompt user for isNumeric
      isNumeric = window.prompt("Would you like to include Numeric? y/n")

      //checking for isNumberic crtieria
      while(isNumeric != "y" && isNumeric != "n"){
        window.alert("Invalid Criteria");
        isNumeric = window.prompt("Would you like to include Numeric? y/n")
      }
      //checking for isSpecial Char
      isSpecialChar = window.prompt("Would you like to include special characters? y/n")
      //verify input is y or n
    
      while(isSpecialChar != "y" && isSpecialChar != "n"){
        window.alert("Invalid Criteria");
        isSpecialChar = window.prompt("Would you like to include special characters? y/n");
      }

      if (isLowerCase === "n" && isUpperCase === "n" && isNumeric === "n" && isSpecialChar === "n"){

        
        window.alert("Failed to initlialize variables for Password.");
        window.alert("Please enter y to Lowercase, Uppcase, Numeric, or SpecialChar");
        console.log("passLength: " + passLength);
        console.log("isLowerCase: " + isLowerCase);
        console.log("isUpperCase: " + isUpperCase);
        console.log("isNumeric: " + isNumeric );
        console.log("isSpecialChar: " + isSpecialChar);
      
      }

      
    }



    console.log("passLength: " + passLength);
    console.log("isLowerCase: " + isLowerCase);
    console.log("isUpperCase: " + isUpperCase);
    console.log("isNumeric: " + isNumeric );
    console.log("isSpecialChar: " + isSpecialChar);


    //randomly select character based on criteria
    
    
      
    //create password 
    //for loop based on initial passLength
    var lowerCase = 'abcdefghijklmonpqrstuvwxyz';
    //create lowerCase array
    var arrLower = lowerCase.split('');

    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var arrUpper = upperCase.split('');

    var numbers = '1234567890';
    var arrNumbers = numbers.split('');
    console.log ( arrNumbers);

    var specialChars = '~!@#$%^&*()_-+=<>?/|{}[]:;';
    var arrSpecialChar = specialChars.split('');

    const characterset = [];

    if ( isLowerCase === 'y'){
      for( i = 0 ; i < arrLower.length ; i++){
        characterset.push(arrLower[i]);
        console.log("Item added to array : " + arrLower[i]);
      }
      
    } 
      
    if ( isUpperCase === 'y'){
      for ( i = 0 ; i < arrUpper.length ; i++){
        characterset.push(arrUpper[i]);
        console.log("Item added to array : " + arrUpper[i]);
      }
      
    } 

    console.log("Pre ArrNumbers Loop Point")

    if ( isNumeric === 'y' ){
      console.log("In if statement ")
      for( i = 0 ; i < arrNumbers.length ; i++){
        characterset.push(arrNumbers[i]);
        console.log("Item added to array : " + arrNumbers[i]);
      }
      
    } 

    if ( isSpecialChar === 'y'){
      for( i = 0 ; i < arrSpecialChar.length ; i++){
        characterset.push(arrSpecialChar[i]);
        console.log("Item added to array : " + arrSpecialChar[i]);
      }
      
    }



    console.log(characterset);

    //create an array of characters based on condition to pull from 
    //do some math floor to complete return array

    var newPassword = '';

    for ( i = 0 ; i < passLength.length ; i++ ) {
      var newChar = characterset[ Math.floor(Math.random() * characterset.length)];
      newPassword.concat(newChar);
      //newPassword.push(newChar);
      console.log("Added item : " + newChar);
      console.log("We have looped : " + i)

    } 

    console.log("if escape");
    console.log(newPassword);

  return newPassword ;

    //WHEN prompted for character types to include in the password
    // THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
    


  


}