var firstName = "Kate";
var lastName = "Ladenheim";
var num1 =10*10;
var num2=100/10;
var num3=50-17;
var num4=50+17;
console.log("hello!")

document.write(num1 + '<br/>');
document.write(num2 + '<br/>');
document.write(num3 + '<br/>');
document.write(num4 + '<br/>');
document.write(firstName + " " + lastName);

//function definition

function doSomething(){
	alert('do not worry, you will be green soon');
	myPara.style.color = "green";
}

document.getElementById('greeting').style.color = "red";

var myPara = document.getElementById('myPara');

//myPara.style.color = "green";

myPara.onclick = doSomething;