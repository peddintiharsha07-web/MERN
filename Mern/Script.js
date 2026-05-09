var chintu = "chintu";

console.log(`Hello my name is ${chintu}`);

var chintu = "dancing"
console.log(`Hello my name is ${chintu}`);


let college = "Aitam"

console.log(college);


const gender = "male"
console.log(gender);

college = "GMRIT";
console.log(college);


var a = "welcom to srikakulam";
console.log(a);

console.log(a.length);

test = 12 > 19;
console.log(test);


r = 34 < 90 < 567;
console.log(r);

document.write("my name is p Harshavardhanreddy<br>");

document.write(23456789)

document.write("<h3>welcome to my website</h3>")




let sample = null;
console.log(sample);


let num1 = 12.23;
console.log(num1);

let banana = "yellow";
console.log(banana);


let q = ["aitam", 55, { country: "India" }, "gmrit", "gitam", "vignan"];

console.log(q);


const details =
{
    name: "Harsha",
    country: "india",
    age: 21,
    IPL: "SRH",

}
console.log(details);

console.log(typeof details)

console.log(Array.isArray(q));

console.log(Array.isArray(details));

var a = 10;
var b = 20;
document.write("sum of ", a, " and ", b, " is  =", a + b + "<br>");
document.write("subtraction of ", a, " and ", b, " is  =", b - a + "<br>");
document.write("multiplication of ", a, " and ", b, " is  =", a * b + "<br>");
document.write("division of ", a, " and ", b, " is  =", a / b + "<br>");
document.write("modulo of ", a, " and ", b, " is  =", a % b + "<br>");


var c = 60;

c++

document.write(c + "<br>");
var b = 60;
b--
document.write(b + "<br>");


var age = 19;
if (age >= 20) {
    document.write("You are eligible for voting<br>");
}
else {
    document.write("You are not eligible for voting<br>");
}

var age = 26;
if (age <= 10) {
    document.write("your the child")
}
else if (age == 18) {
    document.write("your the teenager")
}
else if (age == 20) {
    document.write("your the adult")
}
else {
    document.write("your the old <br>")
}



var w = 20;
var e = 15;
var r = 30;

if (w > e || r < e) {
    document.write("yes is one correct <br>")
}
else {
    document.write("no it was not correct <br>")
}


document.write(4 + 6 == 9 ? " is correct" : " is not correct" + "<br>");


//dialog box


var Boy = confirm("are you boy");

if (Boy) {
    let name = prompt("Please enter your name");
    document.write("hellow Mr." + name + " how are you" + "<br>");
}
else {
    let name = prompt("Please enter your name");
    document.write("hellow Ms ." + name + " how are you" + "<br>");
}



var a = "55"

var b = 44

document.write(typeof a + "<br>");
document.write(typeof b);

var z = parseInt(a);
document.write(typeof z);





var name = prompt("please enter your name");
var marks = prompt("please enter marks");

switch (true) {
    case marks >= 90 && marks <= 100:
        result = ("greate your the topper");
        break;
    case marks >= 80 && marks <= 90:
        result = ("first class");
        break;
    case marks >= 70 && marks <= 80:
        result = ("second class");
        break;
    case marks >= 60 && marks <= 70:
        result = ("third class");
        break;
    default:
        result = ("better luck next time");
        break;
}

document.write("<br>" + name + " your the " + result + "<br>");

//Functions
function Harsha() {
    document.write("Welcome to my website<br>");


}
Harsha();


function uday() {
    console.log("i love srikakulam");

}

uday();
uday();
uday();
uday();
uday();


//scopes

//gloabl scope
var apple = "red";
let banna = "yellow";
const orange = "orange";

function fruit() {
    document.write(apple + "<br>");
    document.write(banna + "<br>");
    document.write(orange + "<br>");
}

fruit();


//function scope
function fruit() {
    var x = 100;
    let a = 1234;
    const b = 900;
    document.write(x + "<br>");
    document.write(a + "<br>");
    document.write(b + "<br>");
}


//blok scope

function sports() {
    if (10 < 20) {
        var chess = "gukesh is the chess player"
        let cricket = "i love cricket";
        const football = "i lovefootball";

        document.write(chess);
        document.write(cricket);
        document.write(football);

    }
}
sports();

document.write("<br>----------------------------------<br>")

//return function
//fuction expressions

var a = function apple() {
    document.write("hellow world welcome to my website <br>")

}
a();


//Anonymous function
var b = function () {
    document.write("my fovarite place is vizag<br>")
}
b();

//function with prameters and return value

function score(a, b) {
    return a + b;

}

document.write(score(10, 20) + "<br>");
document.write(score(110, 201) + "<br>");
document.write(score(210, 270) + "<br>");
document.write(score(108, 230) + "<br>");
document.write(score(102, 208) + "<br>");


function places(x, y) {
    return document.write("my fovourite place is " + x + " and " + y + "<br>");
}

places("vizag", "bhubaneswar");
places("amravati", "banglore");
places("hydrabad", "vizianagram");


var username = prompt("enter your good name");

function welcome(username) {
    return document.write("welcome to my website - " + username + "<br>")
}

welcome(username);

//array methods

let collection =["shiva",30, True,{name:uday}]

//push

let arr = [1, 2, 3, 4, 5,];
arr.push(6);

//pop

arr.pop();

//unshift

arr.unshift(-1)

//shift()
arr.shift();


