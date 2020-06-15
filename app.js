// //chapter1-Alerts
// //1. Greeting
// alert("Hello Customer!");
// //2.Paswd Error
// alert("Error! Please enter a valid password.");
// //3.Welcome
// alert("Welcome to JS Land...\nHappy Coding!");
// //4.Sequence
// alert("Welcome to JS Land..")
// alert("Happy Coding!\n\nPrevent this page from creating additional dialogs")
// //5.Console box
// console.log("Hello..I can run JS through my web browser's console");

// //chapter2.variableForStrings
// //1.username
// var username = "Omar";
// //2. myName
// var myName = "Omar Mohammad Warraich";
// //3. script message
// var message = "Hello World";
// alert(message)
// //4. script biodata
// var student = "Jhone Doe";
// var age = 15;
// var qualification = "Certified Mobile Application Development";
// alert(student);
// alert(age + " years old" )
// alert(qualification)
// //5. Script one JS variable
// let str = "PIZZA";{
//     alert(str + "\n" + str.slice(0,-1) + "\n" + str.slice(0,-2) + "\n" + str.slice(0,-3) + "\n" + str.slice(0,-4));
    
// }
// //6.email
// var email = "earthling986@gmail.com"
// alert("My email address is" + " " + email)

// //7.book
// var book = "A smarter way to learn JavaScript"
// alert("I am trying to learn from the Book" + " " + book)

// //8. HTML content
// document.write("Yah! I can write HTML content through JavaScript");

// //9. string in a variable
// var str ="---------------------------------&&iioii&&---------------------------------";
// alert(str)


// //Ch3. VariablesForNumbers

// //1. Age Variable
// var age = 38;
// alert("I am" + " " + age + " " + "years old.")

// //2. Track Website Visitor
// var visits = 15;
// alert("You have visted this site" + " " + visits + " " + "times.")

// //3. BirthYear Variable
// var birthYear = 1982;
// document.write("My birth year is" + " " + birthYear + "<br>" + "Data type of my declared variable is number");

//4. www.xyzClothing.com
// var visitorName = "John Doe";
// var productTitle = "T-shirt(s)".bold();
// var quantity = "5".bold();
// document.write(visitorName.bold() + " " + "ordered" + " " + quantity + " " + productTitle + " " + "on XYZ Clothing store." );

// //Ch4. VARIABLE NAMES: LEGAL & ILLEGAL
// //1. Declare 3 variables in 1 statement.
// var name = "John Vick",
//     age = 42,
//     height = 6;
// //2. 5 legal and illegal variables
// //Legal
// var name = "John Vick",
//     age = 42,
//     height = 6,
//     color = "white",
//     profession = "Assassin";
// //Illegal
// var 1name = 42,
//     birth year = 1978,
//     skin color = "white",
//     educational-qualification = "Graduate",
//     id# = "111";

// //3. Browser Display.
// document.write("<h1>Rules for naming JS variables</h1>" + "<br>");
// document.write("Variable names can only contain letters, numbers, $ and _ . For example: $my_1stVariable" + "<br>");
// document.write("Variables must begin with a letter, $ or _ . For example : $name, _name or name" + "<br>")
// document.write("Variable names are case sensitive." + "<br>")
// document.write("Variable names should not be JS keywords." + "<br>")

// //Ch5. MATH EXPRESSIONS
// //1. ADDING TWO NUMBERS
// var firstNumber = +prompt("Enter First Number");
// var secondNumber = +prompt("Enter Second Number");
// var sum = firstNumber + secondNumber;
// document.write("The sum of" + " " + firstNumber + " " + "and" + " " + secondNumber + " " + "is" + " " + sum + "<br>" ) 

//2. Repeat Task 1.
//Subtraction
// var firstNumber = +prompt("Enter First Number");
// var secondNumber = +prompt("Enter Second Number");
// var difference = firstNumber - secondNumber;
// document.write("The difference of" + " " + firstNumber + " " + "and" + " " + secondNumber + " " + "is" + " " + difference + "<br>")

// //Multiplication
// var firstNumber = +prompt("Enter First Number");
// var secondNumber = +prompt("Enter Second Number");
// var product = firstNumber * secondNumber;
// document.write("The product of" + " " + firstNumber + " " + "and" + " " + secondNumber + " " + "is" + " " + product + "<br>" ) 

// //Division
// var firstNumber = +prompt("Enter First Number");
// var secondNumber = +prompt("Enter Second Number");
// var division = firstNumber / secondNumber;
// document.write("The division of" + " " + firstNumber + " " + "and" + " " + secondNumber + " " + "is" + " " + division + "<br>")

// //Modulus
// var firstNumber = +prompt("Enter First Number");
// var secondNumber = +prompt("Enter Second Number");
// var modulus = firstNumber % secondNumber;
// document.write("The Modulus of" + " " + firstNumber + " " + "and" + " " + secondNumber + " " + "is" + " " + modulus + "<br>") 

//3. Do the following using JS Mathematic Expressions
var num; //a. Declare a variable.
document.write("Value after variable declaration is undefined" + "<br>") //b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
num = 5; //c. Initialize the variable with some number.
document.write("Initial Value:" + " " + num + "<br>")//d. Show the value of variable in your browser like “Initial value: 5”.
num = ++num; //e. Increment the variable.
document.write("Value after increment is:" + " " + num + "<br>") //f. Show the value of variable in your browser like “Value after increment is: 6”.
num = num + 7; //g. Add 7 to the variable.
document.write("Value after addition is:" + " " + num + "<br>") //h. Show the value of variable in your browser like “Value after addition is: 13”.
num = --num; //i. Decrement the variable.
document.write("Value after decrement is:" + " " + num + "<br>") //j. Show the value of variable in your browser like “Value after decrement is: 12”.
num = num % 3; //k. Show the remainder after dividing the variable’s value by 3.
document.write("The remainder is :" + " " + num + "<br>") //l. Output : “The remainder is : 0”.

