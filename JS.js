window.onload = function(){
document.querySelector("h1").style.color="blue";
document.querySelector("h1").style.fontSize="80px";
};
//single line comment
/*
double line comment
*/
window.alert("Hello From JS File");
document.write("<h1>Hello page</h1>");
console.log("Hello From %cJS %cFile","color:red;","color:blue;");
console.error("Error");
console.table(["Ali","ahmad","maha"]);
var b='Raghad';
console.log(b);
var n=45;
console.log(n);
var age= prompt('What is your age?!');
document.getElementById('text').innerHTML =age;
var n1=5.7;
console.log(5*10);
n1=n1+1;
console.log(n1);
n1--;
console.log(n1);
console.log(100/10);
n1+=10;
console.log(n1);

function fun(){
console.log('This is a function');
}
fun()
function Myname(){
var name='Raghad';
console.log('My name is '+name);
}
Myname();
function sum(n1,n2){
	console.log(n1+n2);
}
sum(10,20);

