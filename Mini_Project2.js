//Building a Simple Grading System Using JavaScript Variables, Data Types, Operators, and Control Structures

console.log("welcome to grade display darshbord ");

let name="saman anjana";
let level="Level one";
let IctMarks=75;
let LogicMarks=55;
let EconMarks=66;

let totalMarks=IctMarks+LogicMarks+EconMarks;
let AvgOfMarks=totalMarks/3;

var Status;
    if (AvgOfMarks >= 75) {
        Status = "You have A pass";
    } else if (AvgOfMarks >= 65) {
        Status = "You have B pass";
    } else if (AvgOfMarks >= 55) {
        Status = "You have C pass";
    } else if (AvgOfMarks >= 35) {
        Status = "You have S pass";
    } else {
        Status = "You have failed this exam";
    }

console.log("Student Detals ");
console.log("name of the Student:"+name);
console.log("Level of the Student:"+level);
console.log("Marks of the ICT:"+IctMarks);
console.log("Marks of the Logic:"+LogicMarks);
console.log("Marks of the Econ:"+EconMarks);
console.log("TotalMarks:"+totalMarks);
console.log("AVGMarks:"+AvgOfMarks);
console.log("Acadamic Status of the Student:"+Status);