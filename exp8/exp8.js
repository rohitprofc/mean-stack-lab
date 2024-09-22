// Experiment 8
var Student = /** @class */ (function () {
    function Student(code, name, grade) {
        this.studname = name;
        this.studcode = code;
        this.grade = grade;
    }
    Student.prototype.display = function () {
        console.log("name:", this.studname);
        console.log("code:", this.studcode);
        console.log("grade:", this.grade);
    };
    return Student;
}());
var obj1 = new Student(9494214912, 'Rohit', 'A+');
obj1.display();
