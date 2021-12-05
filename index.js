var screenResult = ""; // frist time screen is empty

//Function Definitions : 

//Creating a function  which will do the following :  everytime binary button 1 or 0 is press
function getInput(str) { //  returns a  string with the 2 inputs and the operator and prints it in the screen
  //console.log(screenResult);  
  screenResult += str;
  document.getElementById("ans").innerHTML = screenResult;
}

function calculating() { // calculates the binary operation and prints the result
  if (screenResult.indexOf("+") != -1) {
    var inputNum = screenResult.split("+");
    console.log(inputNum);
    var binaryNum1 = parseInt(inputNum[0], 2);// converts a string into an integer,using binary system 2 convert it to decimal number 
    var binaryNum2 = parseInt(inputNum[1], 2);
    var sum = binaryNum1 + binaryNum1;
    var ans = sum.toString(2);// converts a number  in decimal to a string binary number
  } else if (screenResult.indexOf("-") != -1) {
    var inputNum = screenResult.split("-");
    console.log(inputNum);
    var binaryNum1 = parseInt(inputNum[0], 2);
    var binaryNum2 = parseInt(inputNum[1], 2);
    var sub = binaryNum1 - binaryNum2;
    var ans = sub.toString(2);
  } else if (screenResult.indexOf("*") != -1) {
    var inputNum = screenResult.split("*");
    console.log(inputNum);
    var binaryNum1 = parseInt(inputNum[0], 2);
    var binaryNum2 = parseInt(inputNum[1], 2);
    var mul = binaryNum1 * binaryNum2;
    var ans = mul.toString(2);
  } else if (screenResult.indexOf("/") != -1) {
    var inputNum = screenResult.split("/");
    console.log(inputNum);
    var binaryNum1 = parseInt(inputNum[0], 2);
    var binaryNum2= parseInt(inputNum[1], 2);
    var div = binaryNum1 / binaryNum2;
    var ans = div.toString(2);
  }
  screenResult = ans; //update screen result 
  document.getElementById("ans").innerHTML = screenResult; // print it in the screen 
}

function clear() { // clears the result variable  and the screen
  screenResult = "";
  document.getElementById("ans").innerHTML = screenResult;
};


// Calling the functions when pressing the button 
const btnEql = document.getElementById("btnEql");
btnEql.addEventListener("click",calculating);

const btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click",clear);