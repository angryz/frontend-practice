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

// Object ( Instance of Class )
var person1 = new Person("Alice");
var person2 = new Person("Bob");

person1.sayHello();
person2.sayHello();

var helloFunc = person1.sayHello;
helloFunc.call(person2);
