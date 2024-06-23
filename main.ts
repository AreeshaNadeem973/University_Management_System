class Person {
    name: string;
    age: number;

constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
}
};

class Student extends Person {
    rollNumber: string;
    courses: course [] = [];
    
   constructor(name: string, age: number, rollNumber: string) {
       super(name, age)
       this.rollNumber = rollNumber
   }
   registerForCourse(course : course) {
       this.courses.push(course);
   }
}


class Instructor extends Person {
     salary : number;
     courses: course [] = [];
     
    constructor(name: string, age: number, salary : number) {
        super(name, age)
        this.salary = salary;
    }
    assigncourse(course : course) {
        this.courses.push(course);
    }
}


const std1 = new Student("areesha", 20, "1234");
const std2 = new Student("ali" , 22, "1342");

const instructor1 = new Instructor("arham", 30, 1000000)
const instructor2 = new Instructor("usama", 30, 50000)

class course {
    id: number;
    name: string;
    students: Student[] = []
    instuctors: Instructor[] = []

    constructor(id: number, name: string){
        this.id = id;
        this.name = name
    }
    addStudent(std: Student) {
        this.students.push(std)
    }
    setInstuctor(instuctor: Instructor) {
        this.instuctors.push(instuctor)
    }
}   

class Department {
    name: string;
    courses:course[] = []
    constructor(name: string) {
        this.name = name;
}
addCourse(course:course){
    this.courses.push(course)
}
}

const course1 = new course(1, "Blockchain");
const course2 = new course(2, "Metaverse");

course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std1);

course1.setInstuctor(instructor1)
course2.setInstuctor(instructor2)


console.log(course1.students);
console.log(course2.students);

const d1 = new Department("computer science")
d1.addCourse(course1);
console.log(d1.courses[0]);


