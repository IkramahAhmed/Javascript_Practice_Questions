// 1. Write a function that displays current date & time in your
// browser.

// function currentTime(){
//     var a = new Date();
// console.log(a);




    
// }
// currentTime()

// Write a function that takes first & last name and then it
// greets the user using his full name.

// function salam(firstName,lastName){
  
//    document.write("Assalam-o-alaikum", firstName+ lastName);
// }
// salam("ikramah","zafar")


// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers
//return in functions
// function multiply(num1,num2){
    
//     return num1+num2;
//   }
//   let c= multiply(2,3);
//   document.write(c);

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser

// function calculator(num1,num2){
// var a =prompt("What are you performing");
//     if(a=='+'){
//         console.log(num1+num2);
//     }
//   else  if(a=='-'){
//         console.log(num1-num2);
//     }
//     else  if(a=='/'){
//         console.log(num1/num2);
//     }
//     else  if(a=='*'){
//         console.log(num1*num2);
//     }
//     else {
//         console.log("you are not enter any operation");
//     }
    
// }
// calculator(2,5)

// 5. Write a function that squares its argument.

// function square(s){
//         var ans=s*s;
//         console.log(ans)
//     }
//     square(5);
//     square(6);


// 6. Write a function that computes factorial of a number.
// function factorial(num){

// var f=1;
// for(i=1;i<=num;i++){
//     f =f * i;//1x1
//                  //1x2
//                   //2x3
//                    //6x4=24
              
// }
// console.log(f);    
// }
// factorial(4);


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function outer(base,perp){
   
//     let hyp = (base*base)+(perp*perp);

//     function inner(){
//  let b=Math.sqrt(hyp)
// console.log("the hypotenius is",b);


//     }
//     inner()

// }
// outer(2,2)


// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function area(width,height){
// let a =width *height;
// console.log("the area of parameter is",a);
// }
// area(5,2)


// Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// function palindrom(same){
// //pandrome karnay kay liay sub say pehlay sub words ko character banana parhay ga split kay through uskay bad us string ko reverse karna hoga or phr sub ko join karna hoga
  
//      let stringreverse = same.split("").reverse().join("");
//     console.log(stringreverse);

//     if(same ==stringreverse){//orignal value ko reverse value say compare kara he
//         console.log("this is palindrom ");
//     }
//     else{
//         console.log("this is not palindrom");

//     }
// }
// palindrom("rar")

// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

//charAt kam he string men say first chahrcter ko nikalna
//slice karay ga kay 1st character ko hata kr baqi saray day dega
// function up(first){
//   var a = first.split(" ");
//   console.log(a); 
// for(var i=0;i<=a.length;i++){
//     var b = a[i].charAt(0).toUpperCase()+ a[i].slice(1);
//     console.log(b); 

// }
// const str2 = a.join(" ");
// console.log(str2);


// }
// up("the quick brown fox")
 

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));

// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occu

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('w3resource.com', 'o'));


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".


// function calcCircumference(radius1){
//     var pie1 = 3.14;
//     var circle = 2*(pie1)*(radius1);
//     console.log("Circumference of circle is",circle); 


//     function calcArea(radius2){
// var pie2 = 3.14;
// var area = (pie2)*(radius2*radius2);
// console.log("Area of circle",area); 
//     }
//     calcArea(6)

// }
// calcCircumference(7)




//   var string=prompt("enter user name");
// var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

// //The test() method of JavaScript executes a search for a match between a regular expression and a specified string. If the match is found, it will return true. Otherwise, it will return false.
// //.test ka seen yeh he kay agar string ya expression darmian men ajae to woh bata day ga
// if(format.test(string)){
//   console.log("please enter valid username");
// } else {
//     console.log("correct user name");

// }



// function char_count(str, letter) 
// {
//   var a =  str.split(" ");
//   console.log(a);
//  var letter_Count = 0;
 
//  for (var position = 0; position < a.length; position++) 
//  {
//     if (a.match(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('The quick brown fox jumps over the lazydog', 'the'));
// The string:
// var str = " quick brown fox jumps over the  lazydog the";
// var a = 
// // Look for "Hello"
//  var letter_Count = 0;

// var patt = /the/g;
// if(patt.test(str)){
//   letter_Count += 1;
// }
// console.log(letter_Count);
// var result = patt.test(str); 

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// DATE METHODS | JAVASCRIPT
// Page 5 of 5
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


// var customername = "ikramah";
// var currentMonth = "febrauary"
// var numberOfunits=416;
// var chargeperunit=16;
// console.log(customername);
// console.log(currentMonth);

// var netamount=numberOfunits*chargeperunit;
// console.log(netamount);

// var latepaymentsubcharges=350;
// var grossamountpayable=netamount +latepaymentsubcharges;
// console.log(grossamountpayable);