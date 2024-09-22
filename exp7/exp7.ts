// Experiment 7
function student(name: String, branch: String, cgpa: number) {
    console.log("student name:" + name)
    console.log("student branch:" + branch)
    console.log("student cgpa:" + cgpa)
}
function studentdefault(name: string = "Rohit", branch: string = "AI&DS", cgpa: number = 9.5) {
    console.log("student name:" + name)
    console.log("student branch:" + branch)
    console.log("student cgpa:" + cgpa)
}
function studentdetails(name: string, rollno: string, sgpa: number) {
    console.log("student name:" + name)
    console.log("student rollno:" + rollno)
    console.log("student sgpa:" + sgpa)
}
function studentmarks(...s: number[]) {
    var i;
    var sum: number = 0;
    var avg;
    for (i = 0; i < s.length; i++) {
        sum = sum + s[i];
    }
    avg = sum / (s.length)
    console.log("total marks:" + sum)
    console.log("Average marks:" + avg)
}
student("Sowmya", "AI&DS", 9.8)
studentdefault()
studentdetails("Parasram", "CSE", 8.5)
studentmarks(94, 97, 99, 66, 89, 85)
studentdetails("Noharika", "512", 9.0)
studentmarks(100, 67, 83, 76, 98, 90);