// Experiment 7
function student(name, branch, cgpa) {
    console.log("student name:" + name);
    console.log("student branch:" + branch);
    console.log("student cgpa:" + cgpa);
}
function studentdefault(name, branch, cgpa) {
    if (name === void 0) { name = "Rohit"; }
    if (branch === void 0) { branch = "AI&DS"; }
    if (cgpa === void 0) { cgpa = 9.5; }
    console.log("student name:" + name);
    console.log("student branch:" + branch);
    console.log("student cgpa:" + cgpa);
}
function studentdetails(name, rollno, sgpa) {
    console.log("student name:" + name);
    console.log("student rollno:" + rollno);
    console.log("student sgpa:" + sgpa);
}
function studentmarks() {
    var s = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        s[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    var avg;
    for (i = 0; i < s.length; i++) {
        sum = sum + s[i];
    }
    avg = sum / (s.length);
    console.log("total marks:" + sum);
    console.log("Average marks:" + avg);
}
student("Sowmya", "AI&DS", 9.8);
studentdefault();
studentdetails("Parasram", "CSE", 8.5);
studentmarks(94, 97, 99, 66, 89, 85);
studentdetails("Noharika", "512", 9.0);
studentmarks(100, 67, 83, 76, 98, 90);
