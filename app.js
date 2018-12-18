// let studentMarks=+prompt("enter your percentage", '');
// if (studentMarks>=90 && studentMarks<=100) {
//   prompt("your grade is A+") 
// }
// if (studentMarks>=90 && studentMarks<=100) {
//   alert(" your Grade is A+"); 
//   // break;
// }
// else if (studentMarks >= 80 && studentMarks <90){
//   alert("your Grade is B");
// }
// else if (studentMarks >= 70 && studentMarks <80){
//   alert("your Grade is C");
// }
// else if (studentMarks >= 60 && studentMarks <70){
//   alert("your Grade is D");
// }
// else if (studentMarks >= 50 && studentMarks <60){
//   alert("your Grade is E");
// }
// else{
//   alert("sory you are fail");
// }

let StudentName = prompt("Enter your Name :",'');
document.write("student name: " + StudentName + "<br/>");
let comp= +prompt("Enter your computer marks:");
document.write("computer " + comp+"<br/>");
let maths=+prompt("Enter your mathematics marks:");
document.write("Maths " + maths + "<br/>");
let english=+prompt("Enter your English marks:");
document.write("Englis " + english + "<br/>");
let urdu=+prompt("Enter your Urdu marks:");
document.write("Urdu " + urdu + "<br/>");
let total=comp+maths+english+urdu;
document.write(" Total:" + total + "<br/>");
let avreage = total / 4 ;
document.write("Average:" + avreage + "<br/>");
let percentage=total/400*100;
document.write("percentage :" + percentage + "%" + "<br/>")

if(percentage>=80 && percentage<=100){
  document.write("Grade: A+");
}else if(percentage>=70 && percentage<=79){
  document.write("Grade: A");
}else if(percentage>=60 && percentage<=69){
  document.write("Grade: B");
}else if(percentage>=50 && percentage<=59){
  document.write("Grade: C");
}else if(percentage>=40 && percentage<=49){
  document.write("Grade: D");
}
else{
  document.write("Grade :Fail");
}





