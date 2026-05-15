// var chintu = "chintu";

// console.log(`Hello my name is ${chintu}`);

// var chintu = "dancing"
// console.log(`Hello my name is ${chintu}`);


// let college = "Aitam"

// console.log(college);


// const gender = "male"
// console.log(gender);

// college = "GMRIT";
// console.log(college);


// var a = "welcom to srikakulam";
// console.log(a);

// console.log(a.length);

// test = 12 > 19;
// console.log(test);


// r = 34 < 90 < 567;
// console.log(r);

// document.write("my name is p Harshavardhanreddy<br>");

// document.write(23456789)

// document.write("<h3>welcome to my website</h3>")




// let sample = null;
// console.log(sample);


// let num1 = 12.23;
// console.log(num1);

// let banana = "yellow";
// console.log(banana);


// let q = ["aitam", 55, { country: "India" }, "gmrit", "gitam", "vignan"];

// console.log(q);


// const details =
// {
//     name: "Harsha",
//     country: "india",
//     age: 21,
//     IPL: "SRH",

// }
// console.log(details);

// console.log(typeof details)

// console.log(Array.isArray(q));

// console.log(Array.isArray(details));

// var a = 10;
// var b = 20;
// document.write("sum of ", a, " and ", b, " is  =", a + b + "<br>");
// document.write("subtraction of ", a, " and ", b, " is  =", b - a + "<br>");
// document.write("multiplication of ", a, " and ", b, " is  =", a * b + "<br>");
// document.write("division of ", a, " and ", b, " is  =", a / b + "<br>");
// document.write("modulo of ", a, " and ", b, " is  =", a % b + "<br>");


// var c = 60;

// c++

// document.write(c + "<br>");
// var b = 60;
// b--
// document.write(b + "<br>");


// var age = 19;
// if (age >= 20) {
//     document.write("You are eligible for voting<br>");
// }
// else {
//     document.write("You are not eligible for voting<br>");
// }

// var age = 26;
// if (age <= 10) {
//     document.write("your the child")
// }
// else if (age == 18) {
//     document.write("your the teenager")
// }
// else if (age == 20) {
//     document.write("your the adult")
// }
// else {
//     document.write("your the old <br>")
// }



// var w = 20;
// var e = 15;
// var r = 30;

// if (w > e || r < e) {
//     document.write("yes is one correct <br>")
// }
// else {
//     document.write("no it was not correct <br>")
// }


// document.write(4 + 6 == 9 ? " is correct" : " is not correct" + "<br>");


// //dialog box


// var Boy = confirm("are you boy");

// if (Boy) {
//     let name = prompt("Please enter your name");
//     document.write("hellow Mr." + name + " how are you" + "<br>");
// }
// else {
//     let name = prompt("Please enter your name");
//     document.write("hellow Ms ." + name + " how are you" + "<br>");
// }



// var a = "55"

// var b = 44

// document.write(typeof a + "<br>");
// document.write(typeof b);

// var z = parseInt(a);
// document.write(typeof z);





// var name = prompt("please enter your name");
// var marks = prompt("please enter marks");

// switch (true) {
//     case marks >= 90 && marks <= 100:
//         result = ("greate your the topper");
//         break;
//     case marks >= 80 && marks <= 90:
//         result = ("first class");
//         break;
//     case marks >= 70 && marks <= 80:
//         result = ("second class");
//         break;
//     case marks >= 60 && marks <= 70:
//         result = ("third class");
//         break;
//     default:
//         result = ("better luck next time");
//         break;
// }

// document.write("<br>" + name + " your the " + result + "<br>");

// //Functions
// function Harsha() {
//     document.write("Welcome to my website<br>");


// }
// Harsha();


// function uday() {
//     console.log("i love srikakulam");

// }

// uday();
// uday();
// uday();
// uday();
// uday();


// //scopes

// //gloabl scope
// var apple = "red";
// let banna = "yellow";
// const orange = "orange";

// function fruit() {
//     document.write(apple + "<br>");
//     document.write(banna + "<br>");
//     document.write(orange + "<br>");
// }

// fruit();


// //function scope
// function fruit() {
//     var x = 100;
//     let a = 1234;
//     const b = 900;
//     document.write(x + "<br>");
//     document.write(a + "<br>");
//     document.write(b + "<br>");
// }


// //blok scope

// function sports() {
//     if (10 < 20) {
//         var chess = "gukesh is the chess player"
//         let cricket = "i love cricket";
//         const football = "i lovefootball";

//         document.write(chess);
//         document.write(cricket);
//         document.write(football);

//     }
// }
// sports();

// document.write("<br>----------------------------------<br>")

// //return function
// //fuction expressions

// var a = function apple() {
//     document.write("hellow world welcome to my website <br>")

// }
// a();


// //Anonymous function
// var b = function () {
//     document.write("my fovarite place is vizag<br>")
// }
// b();

// //function with prameters and return value

// function score(a, b) {
//     return a + b;

// }

// document.write(score(10, 20) + "<br>");
// document.write(score(110, 201) + "<br>");
// document.write(score(210, 270) + "<br>");
// document.write(score(108, 230) + "<br>");
// document.write(score(102, 208) + "<br>");


// function places(x, y) {
//     return document.write("my fovourite place is " + x + " and " + y + "<br>");
// }

// places("vizag", "bhubaneswar");
// places("amravati", "banglore");
// places("hydrabad", "vizianagram");


// var username = prompt("enter your good name");

// function welcome(username) {
//     return document.write("welcome to my website - " + username + "<br>")
// }

// welcome(username);

// //methods in array

// document.write("\n-------------------------------<br>");
// let games = ["cricket", "football", "hockey", "badminton", "tennis"];

// games.push("volleyball");

// document.write(games + "<br>");



// document.write("\n-------------------------------<br>");
// games.pop();

// document.write(games + "<br>");




// document.write("\n-------------------------------<br>");
// games.unshift("kabaddi");
// document.write(games + "<br>");

// document.write("\n-------------------------------<br>");

// games.shift();
// document.write(games + "<br>");
// document.write("\n-------------------------------<br>");




// //concat method
// let a1 = ["a", "b", "c"];
// let a2 = ["d", "e", "f"];

// let a3 = a1.concat(a2);
// var a4 = a3.join("$");

// document.write(a3 + "<br>");
// document.write(a4 + "<br>");


// //slice method

// let cricet_team = ["india", "australia", "england", "south africa", "new zealand"];

// let team1 = cricet_team.slice(0, 3);
// document.write(team1 + "<br>");

// //splice method

// let team2 = cricet_team.splice(2, 2, "srilanka", "pakistan");
// document.write(team2 + "<br>");
// document.write(cricet_team + "<br>");

// //slice and splice method

// //removeing elements from array using splice method
// let volleyball_team = ["india", "italy", "brazil", "usa", "france"];
// volleyball_team.splice(0, 3)
// document.write(volleyball_team + "<br>");

// //adding elements to array using splice method
// volleyball_team.splice(0, 0, "japan", "germany", "australia");
// document.write(volleyball_team + "<br>");

// //adding without removing elements using splice method
// volleyball_team.splice(2, 0, "china", "canada");
// document.write(volleyball_team + "<br>");

// volleyball_team.splice(2, 5, "ukraine", "vatican city");
// document.write(volleyball_team + "<br>");

// //index of method
// let students = ["harsha", "uday", "sai", "vishnu", "sumanth"];


// if (students.indexOf("vishnu") !== -1) {
//     document.write("vishnu is present in the array<br>");
// }
// let index = students.indexOf("vishnu");
// document.write(index + "<br>");


// //foreach method
// let scores = [1, 2, 3, 4, 5];
// let students1 = ["harsha", "uday", "sai", "vishnu", "sumanth"];

// students1.forEach(function (items, index) {
//     document.write(index + 1 + "-" + items + "<br>");
// });

// scores.forEach(function (score) {
//     document.write(score * 2 + "<br>");
// });


// //single dimensional array
// let std = ["Harsha", "Uday", "Sai", "Vishnu", "Sumanth"];
// document.write("my name is " + std[1] + "<br>");
// document.write("my name is " + std[3] + "<br>");

// //multi dimensional array
// let marks1 = [
//     [
//         ["harsha", "uday", "sai", "vishnu", "sumanth"],
//         ["english", "telugu", "hindi", "maths", "science"],
//     ]
//     [90, 80, 70, 60, 50],
//     [85, 75, 65, 55],
//     [95, 85, 75, 65],
//     [33, 44, 55, 66]
// ];


// //String methods
// //string split

// var string = "i love srikakualam ";
// document.write(string.split("") + "<br>");

// console.log(string.split(""));
// //trim

// var std1 = "           Harsha     ";
// document.write(std1.trim() + "<br>");
// console.log(std1 + "<br>");
// console.log(std1.trim());

// //charAT

// var str = "Hello World";
// document.write(str.charAt(0) + "<br>");
// document.write(str.charAt(6) + "<br>");
// document.write(str.charAt(-1) + "<br>");

// //loops
// //for loop
// for(var a = 1; a <= 5; a++){
//     document.write(a + ". " + " i love my country" + "<br>");
// }

// document.write("\n-------------------------------<br>");    

// for(var a = 7; a >= 0; a--){
//     document.write(a + ". " + " i love my country" + "<br>");
// }

// //while loop

// let g = 0;
// while(g <= 5){
//     document.write("Hellow everyone" + "<br>");
//     g++;
// }

// //do while loop
// let u = 0;
// do{
//     document.write("welcome to srikakulam" + "<br>");
//     u++;    
// }
// while(u < 5);


// //loop Practice
// var amount = 1000;
// var days = 30;
// var interest = 2;

// for(let i = 1; i <= days; i++){
//     if(i % 4 === 0){
//         amount += interest;
//     }
//     document.write("your amount for day " + i + " is " + amount + "<br>");
// }


// var a = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
// var b = [];

// for(let i = 0; i < a.length; i++){
//     if(!b.includes(a[i])){
//         b.push(a[i]);
//     }
// }

// document.write("Unique numbers: " + b + "<br>");

// // Dom manipulation
// //getElementById
// //inner html
// var t = document.getElementById("title");
// t.innerHTML = "Welcome to MERN Stack";

// //style
// t.style.color = "blue";
// t.style.fontSize = "40px";
// t.style.textAlign = "center";

// var logo = document.getElementById("logo");
// logo.style.backgroundColor = "orange";
// logo.style.color = "white";
// logo.style.padding = "10px 20px";
// logo.style.border = "none";
// logo.style.borderRadius = "5px";
// logo.style.cursor = "pointer";

// logo.onmouseenter = function(){
//     logo.style.backgroundColor = "darkorange";
// }
// logo.onmouseenter = function(){
//     logo.style.padding = "15px 25px";
//     logo.style.backgroundColor = "orange";
// }   
//  logo.onmouseleave = function(){
//     logo.style.backgroundColor = "orange";
// }
// logo.onmouseleave = function(){
//     logo.style.padding = "10px 20px";
//     logo.style.backgroundColor = "orange";
// }   

// logo.addEventListener("click", function(){
//     alert("You clicked the MERN button!");
// });

// var nav = document.getElementsByClassName("Home")
// nav[0].textContent = "Home page";

// nav[0].addEventListener("mouseenter", function(){
//     nav[0].style.color = "red";
// });
// nav[0].addEventListener("mouseleave", function(){
//     nav[0].style.color = "black";
// });

// var B = document.getElementsByClassName("Blog");
// B[0].textContent = "Blog page";

// B[0].addEventListener("mouseenter", function(){
//     B[0].style.color = "red";
// });

// B[0].addEventListener("mouseleave", function(){
//     B[0].style.color = "black";
// });

// var a = document.getElementsByClassName("About");
// a[0].textContent = "About page";
// a[0].addEventListener("mouseenter", function(){
//     a[0].style.color = "red";
// });
// a[0].addEventListener("mouseleave", function(){
//     a[0].style.color = "black";
// });

// var c = document.getElementsByClassName("Contact");
// c[0].textContent = "Contact page";

// c[0].addEventListener("mouseenter", function(){
//     c[0].style.color = "red";
// });
// c[0].addEventListener("mouseleave", function(){
//     c[0].style.color = "black";
// });


// var s = document.getElementsByClassName("Services");
// s[0].textContent = "Services page";

// s[0].addEventListener("mouseenter", function(){
//     s[0].style.color = "red";
// });
// s[0].addEventListener("mouseleave", function(){
//     s[0].style.color = "black";
// });

// const q = document.getElementsByTagName("li");

// q[0].textContent = "Chinnu";

// q[2].innerHTML = "<b>Harsha</b>";


// for(let i = 0; i < q.length; i++){
//     q[i].addEventListener("mouseenter", function(){
//         q[i].style.color = "red";
//     }); 
//     q[i].addEventListener("mouseleave", function(){
//         q[i].style.color = "black";
//     });
// }

// //query selector

// const a = document.querySelector("h1");

// a.textContent = "my name is Harsha";


// //chaging all the elements with class name "Services"

// const b = document.querySelectorAll(".Services");

// for(let i = 0; i < b.length; i++){
//     b[i].textContent = "welcome to my website and hellow world";
// }

// target hidden element
// const targetHide = document.querySelector("p")
// //console.log(targetHide.innerText);

// console.log(targetHide.textContent);


// //attributs
// const t = document.querySelector("header").attributes.class.value;
// console.log(t);

// const h = document.querySelector("header").getAttribute("href");
// console.log(h);
// const s = document.querySelector("header").setAttribute("href", "https://www.google.com");
// const h1 = document.querySelector("header").getAttribute("href");
// console.log(h1);

// const r = document.querySelector("header").attributes.id.value;
// console.log(r);


//set attribute and css style
const tar =document.querySelector("ul");
tar.setAttribute("style", "border:5px solid red")

const tar1 = document.querySelector("button");
tar1.style.backgroundColor = "tomato";
tar1.style.padding = "10px 20px";
tar1.style.border = "none";
tar1.style.borderRadius = "5px";


tar1.addEventListener("mouseenter", function(){
    tar1.style.backgroundColor = "lightgray";
});

tar1.addEventListener("mouseleave", function(){
    tar1.style.backgroundColor = "tomato";
});


//removing attribute

const tarremove = document.querySelector("ul");
tarremove.removeAttribute("style");

//events

const b = document.querySelector("#changeColor");

b.addEventListener("click", function(){
    const header = document.querySelector("#headerId");
    header.style.color = "black";
    header.style.fontSize = "40px";
    header.style.textAlign = "center";
});
b.addEventListener("dblclick", function(){
    const header = document.querySelector("#headerId");
    header.style.color = "transparent";
    header.style.fontSize = "40px";
    header.style.textAlign = "center";
});


//Add and remove event listener
const btn = document.getElementById("btn");
const removeBtn = document.getElementById("removeBtn");

    // function create
    function showMessage() {
      alert("Button Clicked!");
    }

    // add event listener
    btn.addEventListener("click", showMessage);

    // remove event listener
    removeBtn.addEventListener("click", function () {
      btn.removeEventListener("click", showMessage);
      alert("Event Removed");
    });

//From events
//submit event
const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  alert("Form Submitted");
});


//input event
const input = document.getElementById("name");

input.addEventListener("input", function() {
  console.log(input.value);
});

//change events

const age = document.getElementById("age");

age.addEventListener("change", function() {
  alert(age.value);
});


//Focus point
const email = document.getElementById("email");

email.addEventListener("focus", function() {
  console.log("Input Focused");
});

//reset event
const form = document.getElementById("form");

form.addEventListener("reset", function() {
  alert("Form Reset");
});

//blur event

const phone = document.getElementById("phone");

phone.addEventListener("blur", function() {
  console.log("Focus Removed");
});


//class list 

 const title = document.getElementById("title");

    // Add class
    document.getElementById("addBtn")
      .addEventListener("click", function () {
        title.classList.add("active");
      });

          // Remove class
    document.getElementById("removeBtn")
      .addEventListener("click", function () {
        title.classList.remove("active");
      });

