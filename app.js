var English = parseFloat(prompt("Enter Your English Marks"));

if(isNaN(English)){
    alert("Not A Number");
}else if(English < 0){
    alert("Negative value are not accepted");
}else if(English > 100){
    alert("Above 100 are not accepted");
}else{
    alert("Value Accepted:"+ " " + English);
}

var Value1 = English;

// For Physics 
var Physics= parseFloat(prompt("Enter Your Physics Marks"));

if(isNaN(Physics)){
    alert("Not A Number");
}else if(Physics < 0){
    alert("Negative value are not accepted");
}else if(Physics > 100){
    alert("Above 100 are not accepted");
}else{
    alert("Value Accepted:"+ " " + Physics);
}

var value2=Physics;

// For Math 
var Math= parseFloat(prompt("Enter Your Math Marks"));

if(isNaN(Math)){
    alert("Not A Number");
}else if(Math < 0){
    alert("Negative value are not accepted");
}else if(Math > 100){
    alert("Above 100 are not accepted");
}else{
    alert("Value Accepted:"+ " " + Math);
}

var value3=Math;
// For Urdu 
var Urdu=  parseFloat(prompt("Enter Your Urdu Marks"));

if(isNaN(Urdu)){
    alert("Not A Number");
}else if(Urdu < 0){
    alert("Negative value are not accepted");
}else if(Urdu > 100){
    alert("Above 100 are not accepted");
}else{
    alert("Value Accepted:"+ " " + Urdu);
}

var value4=Urdu;

// For Computer
var Computer=  parseFloat(prompt("Enter Your Computer Marks"));

if(isNaN(Computer)){
    alert("Not A Number");
}else if(Computer < 0){
    alert("Negative value are not accepted");
}else if(Computer > 100){
    alert("Above 100 are not accepted");
}else{
    alert("Value Accepted:"+ " " + Computer);
}

var value5=Computer;

// For Total Marks
var totalMarks=500;
var Marks = Value1 + value2 + value3 + value4 + value5; 

var Percentage=(Marks/totalMarks)*100;

alert("Your Percentage:"+ " " +Percentage);

// For Grade
if(Percentage<=100 && Percentage >=90){
    alert("Congratulation You Got A+");
}else if(Percentage<=89 && Percentage >=80){
    alert("Congratulation You Got A");
}else if(Percentage<=79 && Percentage >=70){
    alert("Great You Got B");
}else if(Percentage<=69 && Percentage >=60){
    alert("Great You Got C");
}else if(Percentage<=59 && Percentage >=50){
    alert("Great You Got D");
}else if(Percentage>=0 && Percentage <=49){
    alert("You are Fail go work as a labour");
}
