// Assignment Code
var generateBtn = document.querySelector("#generate");


var capschar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowchar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var spechar = ["!","@","#","$","%","^","&","*","(",")"];
var num = ["0","1","2","3","4","5","6","7","8","9"];

  
  function generatePassword(){
    var possiblechar = [];
    var password = [];
    var userconfirm = window.confirm("Shall we?");
      if (!userconfirm) {
        return;
      }

    var lengthchoice = window.prompt ("Please select your password length: (8-128) characters.");
    
    lengthchoice = parseInt(lengthchoice);  
    
    while (lengthchoice < 8 || lengthchoice > 128) {
         alert("sorry, no can do");
         lengthchoice = window.prompt ("Please select your password length: (8-128) characters.");
        };

    var capschoice = window.confirm ("Do you want Caps letters?");
      
    var lowchoice = window.confirm ("Do you want lowercase letters?");
    
    var numchoice = window.confirm ("Do you want numbers?");
    
    var specchoice = window.confirm ("Do you want special characters?");

    // add while 

    

      
      while (capschoice===false && lowchoice === false && numchoice === false && specchoice === false){
        alert("You did not select any characters. Please try again.");
        capschoice = window.confirm ("Do you want Caps letters?");
        lowchoice = window.confirm ("Do you want lowercase letters?");
        numchoice = window.confirm ("Do you want numbers?");
        specchoice = window.confirm ("Do you want special characters?");
      }

      if (capschoice){
        possiblechar= possiblechar.concat(capschar)
      } 
  
      if (lowchoice){
          possiblechar= possiblechar.concat (lowchar)
        
        }  
      if (numchoice){
          possiblechar= possiblechar.concat (num)
        }
  
      if (specchoice){
          possiblechar= possiblechar.concat(spechar)
        }
  
        console.log (possiblechar);
    for (let i = 0; i < lengthchoice; i++) {
      let randomIndex = Math.floor(Math.random() * possiblechar.length);
      let randomElement = possiblechar[randomIndex];
      password.push(randomElement)
    
    }
    
    console.log(password);
    
    
  // step one: prompt user //
  // 1.a. length of password 8-128
  // 1.b. lowercase, uppercase, special, numeric
  
  
  // step two: validate selections//
  //step three: execute function//
  // step four: display password//
  
    return password.join('')
  }

  

  function writePassword() {
    var password = generatePassword();
    
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





















// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page