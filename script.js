let y ="hello";
console.log(y);

var z;
z = true;
console.log(z);

var sum;
sum = 10; 
const x = sum;

var bodyClass;
bodyClass = document.body.className;
document.body.className = "Loading";
console.log(bodyClass);

var randomNumber;
randomNumber = Math.random();
console.log(randomNumber);



const mainClass = document.querySelector("main").className;
console.log(mainClass)

function hello()
{

   return alert("Hello World");
}
function hello2()
{
   return console.log("I am the hello function");

}

function hi(Name)
{

    return alert("Hi","Name")
}

function hi(Name)
{

    return console.log("Hi","Name")
}
var sum;
function add (num1, num2)
{
    sum = num1 + num2
    
 return sum;
}

function random5()
{

    return 5*Math.random();
}