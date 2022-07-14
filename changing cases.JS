/* changing case

 to upper case to upper case

 let input = prompt ("write anything you want");
 console.log (input.toUpperCase());


 to lower case to lower case

 let input = prompt ("write anything you want");
 console.log (input.toLowerCase()); */


/* string: measuring length and extracting parts

 let input = prompt("your favorite mobile model");
 document.write(input.length);

let input =prompt ("write anything");
document.write(input.charAt(input.length-1));*/


//string: finding segment 

// let value = "pakistani";
// let index = value.indexOf(`n`);
// document.write(index);

// let inputName =prompt ("write your name here");
// let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

// if(format.test(inputName)){
//     document.write("please enter valid name")
// } else {
//     document.write("thank you");
// }

let string = "the quick brown fox jump over the lazy dog";
let a = string.split(" ");
let charector = "the";
let count = 0;

for(var i = 0; i < a.length; i++){
   //  console.log(a[i]);
    if(a[i] === charector){
      
      count = count +1;
      // count+=1 both are same
      
    }
}   
 
console.log(count);
 /*strings: finding a charector at location?

 let word = "pakistani";
 console.log(word[2])*/
 

/*  string: replacing charector

 let string = "hyderabad";
 let newstring = string.replace("hyder","islam");
 console.log(newstring);

 let string = "“Ali and Sami are best friends. They play cricket and football together";
let newString = string.replace(/and/g, "&");
 console.log(newString);*/

 // rounding number

//  let input = (prompt("write value"));

/*   if(input >= 0){
    console.log(Math.round(input));
    console.log(Math.floor(input));
    console.log(Math.ceil(input));
    console.log(Number(input));
 } else {
   console.log("negative")
  } */ 



/*let input = (prompt("write value"));

if(input < 0){
 console.log(Math.round(input));
 console.log(Math.floor(input));
 console.log(Math.ceil(input));
 console.log(Number(input));
} else {
 console.log("positive")
} */ 




/*generating Number

var a=Math.random();
 console.log(a); 

toss program
 var toss = Math.round(Math.random() * 1);
 console.log(toss);
 if(toss !== 0){
   console.log("head");
 } else{
   console.log("tail");
 }

let user = prompt("enter a number");
let num = "8";

for(var i = 1; i <= 10; i++){
    if (user==num){
       console.log("congratulation");
    } else {
       alert("try again please");
    }
}*/







