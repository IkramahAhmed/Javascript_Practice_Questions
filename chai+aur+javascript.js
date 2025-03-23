// In JavaScript, the this keyword refers to an object.

// This Documantiaion
// https://www.w3schools.com/js/js_this.asp



//bowsere kay andar consoe.log(this) karen to window object aye ga
//window object global object he
// console.log(this) //window object
//wohi same agar hum apne vs code men karengay toh consoile.lo(this)toh empty array aiga

//Thia basciacclay current context ko refer krta he
// const user = {
//     username: 'chai aur javascript',
//     age: 20,

//     welcome:function(){

//         console.log(`${this.username},welcome`)
//     }
// }

// user.welcome() //chai aur javascript,welcome

// function kay andar this kam nai krnraha he sirf object kay andar he kam krta he jaisa kay uoer wala example he
// function chai(){
//     let username ="hitesh"
//     console.log(this.username);//undefined
// console.log(this);  // function kay andar this window object ko refer krta he
// }
// chai();

 //arrow or normla funtion dono kay andar this undefind ata he
//arrow function kay andar this undefined ata he
//  const chai = () => {
//     let username ="hitesh"
//     console.log(this.username);
//         console.log(this);
//     }
//     chai(); //undefined

// Arrow Function
// Do tareeqa ay say hum this deined kr saktay hen
// const addTwo = (a,b) => {
//     console.log(this);
//     return a+b
// }
// console.log(addTwo(2,3)); 

// // secomd Way to define arrow function its implicit return
//  const addthree =(a,b) => a+b
//     console.log(addthree(2,3)); //5
 

    //arrow function kay andar object ko return karnay kay liay usko paremthesie kay andar wrape krna perhta he 
    // const addfour =(num1,num2) => ({username: "ikramaha"})
    // console.log(addfour(3,4))

    // 🔹 7. this in Event Listeners

    
    // document.getElementById("myBtn").addEventListener("click", function () {
    //     console.log(this); // Refers to the button element
    // });
    

    //alone node env kay andar 
    //console.log(this)karengay toh node env ke waja say empty object aiga wahi agar hum consolle.log (this browsser pr chlaengay toh windo object aiga
    