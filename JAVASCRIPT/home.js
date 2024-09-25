// document.getElementById('demo').innerHTML = "This time i am learn javascript"

// function myfunction(){
//     document.getElementById('demo').innerHTML = "My name is deepak suyal. I am pursuing my diploma from government polytecnic dehradun in inforamtion technology. this time i am work on html css javascript projects."
// }

// function myFunction(){
//     document.write(5+2)
// }


// ----------------->JavaScript Display Possibilities<----------------------------------------//
// ---------->JavaScript can "display" data in different ways:<------------------------------//

// document.getElementById("demo").innerHTML = 5 + 2
// document.write(5+2)
// window.alert(5+2) OR alert(5+2)
// console.log(5+2)

//----------->JavaScript Statements<---------//
// let x, y, z;
// x = 12;
// y = 5;
// z = x + y;
// // console.log(z)
// document.getElementById('demo').innerHTML = "The value of z is " + z + "."

//----------------> Variables are Containers for Storing Data <----------------------------------//
// JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const

// HomeWork -- Do you make a table using html content is below
//------------------> Difference Between var, let and const
// Scope	Redeclare	Reassign	Hoisted	Binds this
// var	No	Yes	Yes	Yes	Yes
// let	Yes	No	Yes	No	No
// const	Yes	No	No	No	No

// const price1 = 10;
// const price2 = 23;
// let = price1 + price2;
// document.getElementById('demo').innerHTML = "The total price is " + let + "."




// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date

// 1. String
// let car1 = "volvoxco";
// let car2 = "volvoXCo";

// // 2. Number
// let x1 = 2;
// let x2 = 5;

// // 3. Bigint
// let x = 121212121212121212;

// //4. Boolean
// let e = 13;
// let y = 13;
// let z = 12;

// (e == y) // true 
// (e == z) // false

// // 5. Undefined
// let car;

// // Array
// const de = ["black", "deepu", "dee"]
// document.getElementById('demo').innerHTML = de[0]
// console.log(de[0])
// console.log(de[1])
// console.log(de[2])


// //Objects
// const person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age     : 50,
//     eyeColor  : "blue"
//   };
  
//   document.getElementById("demo").innerHTML =
//   person.firstName + " is " + person.age + " years old.";


// Function to compute the product of p1 and p2

// function myfunction(p1, p2){
//     return p1*p2
// }

// // let result =  myfunction(2, 3)
// document.getElementById('demo').innerHTML = myfunction(2, 3);

//Convert to fahrenheit to celsius

// function toCelsius(fahrenheit){
//     return (5/9) * (fahrenheit-32)
// }

// let result = toCelsius(77);
// document.getElementById("demo").innerHTML = result;

//Methods are stored in properties as function definitions.

// const person = {
//     firstName: "deepak",
//     lastName: "suyal",
//     age: "12",
//     fullName: function deepak(){
//         return person.firstName + "" + person.lastName
//     }
// }
// let result = deepak()
// document.getElementById('demo').innerHTML = result;


// Common HTML Events
// Here is a list of some common HTML events:

// Event	Description
// onchange	An HTML element has been changed
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	The browser has finished loading the page

// function displayDate(){
// document.getElementById('demo').innerHTML = Date()
// }

//Basic Strings Methods

//  let text = "ABBBBBABHAJHSUJDHEWNDJDS";
// let length = text.length;
// let text = "HELLO WORLD";
// let char = text.charAt(0);
// let char = text.charCodeAt(0);
// const name = "Schools";
// let letter = name.at(2);
// let text = "Hello";
// let char = text[0];
// let text = "Apple, Banana, Orange"
// let part = text.slice(7, 13);
// let str = "Apple, Banana, Orange";
// let part = str.substring(7, 13)
// let str = "Apple, Banana, Orange";
// let part = str.substr(7, 6);
// let text = "Hello World";
// let part = text.toUpperCase();
// let part = text.toLowerCase();
// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat("", text2);

// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// let text = "5";
// let padded = text.padStart(4,"0");
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "Deepak");

// let text = "a,b,c,d,e,f";
// const myArray = text.split(",");
// text.split(",")    // Split on commas
// text.split(" ")    // Split on spaces
// text.split("|")    // Split on pipe


//------------------------String Searches Methods--------------//
// let text = " Please Welcome my industries";
// let search = text.indexOf("my")
// text.search("my");
//-------------------------String templates------------------------//
// let firstName = "Deepak";
// let lastName = "Suyal";
// let text = `Welcome ${firstName}, ${lastName}!`;

//------------->JavaScript Number-----------//
// let x = 3.14;    // A number with decimals
// let y = 3;       // A number without decimals
//----------------JavaScript Bigint---------//
// let x = 999999999999999;
// let y = 9999999999999999;

//---------------->JavaScript Number Methods--------------//
// let x = 123;
// x.toString();
// (123).toString();
// (100 + 23).toString();

// let x = 9.656;
// x.toExponential(2);
// let x = 9.656;
// x.toFixed(0);

// let x = 9.656;
// x.toPrecision();

// let x = 123;
// x.valueOf();

// Number.parseInt("years 10");

//----------------------->Arrays-------------------------//
// const cars = ["volvo", "mercidies", "thar"]
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById('demo').innerHTML = cars[3];
// document.getElementById('demo').innerHTML = fruits.toString();

//---------------------Arrary methods, search, sort-----------------------//
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();

//----------------------->Array Iteration----------------//
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt;

// function myFunction(value, index, array) {
//   txt += value + "<br>"; 
// }

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, array, index){
//     return value * 2;
// }

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//   return total + value;
// }

// // const d = new Date("2022-03-25");
// const d = new Date("2021-03-25");
// d.getFullYear();
// const d = new Date();
// d.setFullYear(2020);

//---------------------->JS Async------------------//

// function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   mySecond();
//   myFirst();

// function myDisplayer(some){
//     document.getElementById("demo").innerHTML = some;
// }

// function myfunction(num1, num2){
//     let sum = num1 + num2;
//     return sum;
// }

// let result = myfunction(5, 5)
//     mydisplayer(result);

// function mydisplayer(some){
//     document.getElementById('demo').innerHTML = some;
// }

// function myfunction(num1, num2, myCallback){
//     let sum = num1 + num2;
//     myCallback(sum)
// }

// myfunction(5, 5, mydisplayer)
// function mydisplayer(some){
//     document.getElementById('demo').innerHTML = some;
// }

//-------------------------JS Asynchronous-------------------------//
// setTimeout(myfunction, 3000)

// function myfunction(){
//     document.getElementById('demo').innerHTML = "I LOVE YOU";
// }

//-------------------------Promises-----------------//

// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
    
//       myResolve(); // when successful
//       myReject();  // when error
//     });
    
//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );
   
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // some code (try to change x to 5)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });


//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );
    
// let myPromise = new Promise(function(myResolve, myReject){
//     setTimeout(function() {
//          myResolve("I LOVE YOU")
//     }, 3000)
// })

// myPromise.then(function(value) {
//     document.getElementById("demo").innerHTML = value;
//   });

// async function mydisplay(){
//     let promise = new Promise (function(resolve, reject){
//          resolve("I LOVE YOU")
//     })
//     document.getElementById('demo').innerHTML = await promise;
// }

// mydisplay();


// async function  mydisplay(){
//     let promise = new Promise (function(resolve){
//         setTimeout (function(){
//             resolve('I LOVE YOU')
//         }, 3000)
//     })
//     document.getElementById('demo').innerHTML = await promise;
// }

// mydisplay();

// async function mydisplay(){
//    let promise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("I LOVE YOU")
//     }, 3000);
//    })
//    document.getElementById('demo').innerHTML = await promise;
// }
// mydisplay();

//Error try and catch

// function myfunction(){
//     const message = document.getElementById('demo');
//     message.innerHTML="";
//     let x = document.getElementById('mess').value;
//     try { 
//       if(x.trim() == "")  throw "empty";
//       if(isNaN(x)) throw "not a number";
//       x = Number(x);
//       if(x < 5)  throw "too low";
//       if(x > 10)   throw "too high";
//     }
//     catch(err) {
//       message.innerHTML = "Input is " + err;
//     }
// } 

//---------------------Finding HTML Elements by Tag Name-------------------------//
// const x = document.getElementById('main');
// const y = document.getElementsByTagName('p');

// document.getElementById('demo').innerHTML = "The paragraph index 0 main is " + y[0].innerHTML;

//-------------------Finding HTML Elements by Class Name---------------------------//
// const x = document.getElementsByClassName("intro");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;

//-----------------------Finding HTML Elements by CSS Selectors---------------//

// const x = document.querySelectorAll("p.intro");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;

//------------------------finds the form element------------------------//
// const x = document.forms["frm1"];
// let text = "";
// for (let i = 0; i < x.length; i++) {
//   text += x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

//-----------DOM HTML---------------------//
// const element = document.getElementById('myimage');
// element.innerHTML = "pic_bulboff.gif"

//----------DOM FOrm-----------//
//-----------------JavaScript Form Validation----------------------//
// function validateForm(){
//     let x = document.forms["myForm"]["fname"].value;
//     if(x == ""){
//         alert("Name must be filled out");
//         return false;
//     }
// }

//------------------JavaScript Can Validate Numeric Input------------------------//
// function myFunction() {
//     // Get the value of the input field with id="numb"
//     let x = document.getElementById("numb").value;
//     // If x is Not a Number or less than one or greater than 10
//     let text;
//     if (isNaN(x) || x < 1 || x > 10) {
//       text = "Input not valid";
//     } else {
//       text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }

//------------------------DOM CSS----------------------------------------//
function myfunction(){
    document.getElementById("p2").style.color = 'blue';
}

//--------------------------DOM Events-----------------------------------//
// function myfunction(d){
//     d.innerHTML='Ooops!';
// }

// function changeText(id){
//     id.innerHTML = "oops!";
// }

// document.getElementById("myBtn").onclick = displayDate;
// function displayDate(){
//     document.getElementById('demo').innerHTML = Date();
// }

// function displayDate(){
//     document.getElementById('demo').innerHTML = Date();
// }

// function uppercase() {
//     const x = document.getElementById("input");
//     x.value = x.value.toUpperCase();
//   }

// function checkCookies() {
//     let text = "";
//     if (navigator.cookieEnabled == true) {
//       text = "Cookies are enabled.";
//     } else {
//       text = "Cookies are not enabled.";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }
  
//----------Event Listener----------//
// document.getElementById('btn').addEventListener("click", displayDate)

// function displayDate(){
//     document.getElementById('demo').innerHTML = Date();
// }

// document.getElementById('btn').addEventListener("click", myFunction);

// function myFunction() {
//      alert("Hello World");
// }

// var x = document.getElementById("btn");
// x.addEventListener("mouseover", myFunction);
// x.addEventListener("click", mySecondFunction);
// x.addEventListener("mouseout", myThirdFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML += "Moused over!<br>";
// }

// function mySecondFunction() {
//   document.getElementById("demo").innerHTML += "Clicked!<br>";
// }

// function myThirdFunction() {
//   document.getElementById("demo").innerHTML += "Moused out!<br>";
// }


// //---------Dom Navigation--------------//
// // document.getElementById('demo1').innerHTML = document.getElementById('demo2').nodeName;
// // document.getElementById('demo1').innerHTML = document.getElementById('demo2').nodeValue;
// document.getElementById('demo1').innerHTML = document.getElementById('demo2').nodeType;

//----------Dom Node--------------------------//
// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);
// const element = document.getElementById("learn");
// element.appendChild(para);

// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);

// const element = document.getElementById("learn");
// const child = document.getElementById("demo1");
// element.insertBefore(para,child);

//---JS Browser BOM--->

//Javscript Popup Boxes--> Alert Boxes

// function myfunction(){
//     alert("Hello World");
// }

//Confirm Boxes

// function myfunction(){
//     if(confirm("Press a button!")){
//         txt = "You pressed OK";
//     }
//     else{
//         txt = "You pressed cancel";
//     }
//     document.getElementById('demo').innerHTML = txt;
// }

//Prompt Boxes

// function myfunction(){
//     let text;
//     let person = prompt("Please enter your name:", "Deepak Suyal");
//     if (person == null || person == "") {
//       text = "User cancelled the prompt.";
//     } else {
//       text = "Hello " + person + "! How are you today?";
//     }
//     document.getElementById("demo").innerHTML = text;
// }

//-----------JS Timing------------->
// function myfunction(){
//     alert('Hello World')
// }

// setInterval(myTimer, 1000);

// function myTimer() {
//   const d = new Date();
//   document.getElementById("demo1").innerHTML = d.toLocaleTimeString();
//   document.getElementById("demo2").innerHTML = d.toLocaleDateString();
// }


// let myVar = setInterval(myTimer, 1000);;
    
// function myTimer(){
//     const d = new Date();
//     document.getElementById("demo1").innerHTML = d.toLocaleTimeString();
// }

// //------------->JS  Cookiee------------>
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";


//JS Web api
const latlon = document.getElementById("mapholder");

function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch (error) {
        latlon.innerHTML = error.message;
    }
}

function showPosition(position) {
    latlon.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;

    let src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyC6z0srHXU4wQW4CPzI5S1aX2namJArOHo&q=Space+Needle,Seattle+WA";

    latlon.innerHTML += "<iframe width='600' height='450' frameborder='0' style='border:0' src='" + src + "' allowfullscreen></iframe>";
}

getLocation();