/**
 * Created by zzp on 11/7/16.
 */

// Class
function Person(firstName) {
    // properties
    this.firstName = firstName;
    // constructor
    console.log("Person instantiated");
}
// or
//var Person = function () { }

// Method
Person.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.firstName);
};

Person.prototype.walk = function () {
    console.log("I'm walking.");
}

// Object ( Instance of Class )
var person1 = new Person("Alice");
var person2 = new Person("Bob");

person1.sayHello();
person2.sayHello();

var helloFunc = person1.sayHello;
helloFunc.call(person2);


// Extent
function Student(firstName, subject) {
    // 调用父类构造器, 确保(使用Function#call)"this" 在调用过程中设置正确
    Person.call(this, firstName);

    // 初始化Student类特有属性
    this.subject = subject;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.firstName + ". I'm studying " + this.subject);
};

Student.prototype.sayGoodBye = function () {
    console.log("Goodbye!");
}

var student1 = new Student("Janet", "Applied Physics");
student1.sayHello();
student1.walk();
student1.sayGoodBye();
