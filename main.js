var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, rollNumber) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.rollNumber = rollNumber;
        return _this;
    }
    Student.prototype.registerForCourse = function (course) {
        this.courses.push(course);
    };
    return Student;
}(Person));
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.salary = salary;
        return _this;
    }
    Instructor.prototype.assigncourse = function (course) {
        this.courses.push(course);
    };
    return Instructor;
}(Person));
var std1 = new Student("areesha", 20, "1234");
var std2 = new Student("ali", 22, "1342");
var instructor1 = new Instructor("arham", 30, 1000000);
var instructor2 = new Instructor("usama", 30, 50000);
var course = /** @class */ (function () {
    function course(id, name) {
        this.students = [];
        this.instuctors = [];
        this.id = id;
        this.name = name;
    }
    course.prototype.addStudent = function (std) {
        this.students.push(std);
    };
    course.prototype.setInstuctor = function (instuctor) {
        this.instuctors.push(instuctor);
    };
    return course;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this.courses = [];
        this.name = name;
    }
    Department.prototype.addCourse = function (course) {
        this.courses.push(course);
    };
    return Department;
}());
var course1 = new course(1, "Blockchain");
var course2 = new course(2, "Metaverse");
course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std1);
course1.setInstuctor(instructor1);
course2.setInstuctor(instructor2);
console.log(course1.students);
console.log(course2.students);
var d1 = new Department("computer science");
d1.addCourse(course1);
console.log(d1.courses[0]);
