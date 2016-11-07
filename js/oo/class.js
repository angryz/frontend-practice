/**
 * Created by zzp on 11/7/16.
 */

// Class
function Person(firstName) {
    // properties
    this.firstName = firstName;
    // constructor
    alert("Person instantiated");
}
// or
//var Person = function () { }

// Method
Person.prototype.sayHello = function () {
    alert("Hello, I'm " + this.firstName);
};

// Object ( Instance of Class )
var person1 = new Person("Alice");
var person2 = new Person("Bob");

person1.sayHello();
person2.sayHello();
