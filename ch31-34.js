// 1. Write a program that displays current date and time in
// your browser.

// let x = new Date();
// console.log(x);

// 2. Write a program that alerts the current month in words.
// For example December.




// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"];

// var d = new Date();
// document.write("The current month is " + monthNames[d.getMonth()]);
  

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
// var weekNames = ["mon", "tue", "wed", "thu", "fri", "sat","sun"]
// var d = new Date();
//  document.write("Today is " + weekNames[d.getDay()]);


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }else if(c === "Mon"){
//     document.write()
// }else if(c === "Tue"){
//     document.write()
// }else if(c === "Wed"){
//     document.write()
// }else if(c === "Thr"){
//     document.write()
// }else if(c === "Fri"){
//     document.write()
// }


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month


// var today = new Date();

// if (today.getDay() <=15 ) {
//   console.log("First fifteen days of the month");

// } else {
//   console.log("Last days of the month");
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var today = new Date();
console.log(today);



// 7.Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

//  var today = new Date();

//  if(today.getHours() <=12){
//     console.log("its AM");
//  }
//  else{
//     console.log("its PM");

//  }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
//  var a = new Date();

// a.setDate(31);
// a.setMonth(11);
// a.setFullYear(2020);
// a.setHours(00);
// a.setMinutes(00);
// a.setSeconds(00);

// console.log(a);

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
// var a = new Date();
// console.log(a);

// var b = new Date();
// var day = b.getDay();
// var month = b .getMonth();
// var date = b .getDate();
// var year = b .getFullYear();
// var time = b .getUTCMilliseconds();



// var c =b.getHours()-1;
//     var min = b.getMinutes();
//     var sec = b.getSeconds();

//     console.log (day+ " : "+month+ " : "+date+ " : "+year+ " : "+c+ " : "+ min + " : "+ sec+" : "+ time);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.




// var a = new Date ("7-30-2020");
// var b = new Date ();




// // console.log(a.getMonth());
// // console.log(a.getFullYear());
// // console.log(a.getDate());


//  let d = (b-a) / (1000*60*60*24*365);
//  console.log(Math.floor(d));
 






// const today = new Date();
// const someday = new Date();
// someday.setFullYear(2100, 0, 14);

// if (someday > today) {
//   text = "Today is before January 14, 2100.";
// } else {
//   text = "Today is after January 14, 2100.";
// }
// document.write("The current month is " + monthNames[d.getMonth()]);

