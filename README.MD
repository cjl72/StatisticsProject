[![Coverage Status](https://coveralls.io/repos/github/cjl72/calculator219/badge.svg?branch=master)](https://coveralls.io/github/cjl72/calculator219?branch=master)
[![Build Status](https://www.travis-ci.com/cjl72/calculator219.svg?branch=master)](https://www.travis-ci.com/cjl72/calculator219)
## OOPS Principles
Object Oriented Programming, OOP, uses classes and objects to structure the program.
A class is used to create the objects, a constructor.  Classes also contain methods
which can be called on the object created by the class.  The best way to think about this is
as the class as a blueprint, a design, for an object.  Inside these blueprints it can create
objects and also tell the object what to do if called.

### 1. Encapsulation
Encapsulation is reached when an object is in a private state.  This prevents outside access into the
state of the object.  This protects it from change and such.  This can be exemplified by the 
Calculator.js class where the methods are inside the class Calculator.
```class Calculator {
static Calculations = []
    static Sum(a,b) {
        let calculation = new Calculation(a,b,Sum);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
```

### 2. Abstraction
Abstraction is a relatively easy OOP concept.  An object should only have one high-level mechanism
for using it.  An example of this is clicking a button to turn on the tv.  This button object turns on
the tv, but is very high level and simple.  When we simplify our code it is easy to see the inheritance
hierarchy which we will see in inheritance next.  The following code shows how one file for one function
does one thing.  simplifying the coding for the object itself.
```
function Sum (a,b) {
    return a + b;
}
module.exports = Sum;
```

### 3. Inheritance
The issue that inheritance tackles is that objects can be very similar but clearly different.
How inheritance fixes that is by creating child classes that have parent classes.  One example of this
is professors at the university.  They are all a professor object, but not all professors are the same.
Through this, objects can inherit the aspects of their parent object but also build upon it with their
own specific aspects.  The following is the example in the code on how inheritance is used in the calculator.
Here the StatisticsCalculator that will be made will inherit the Calculator object for basic functions.
```
class StatisticsCalculator extends Calculator{
}
```
### 4. Polymorphism
Polymorphism is the fourth principle which means "many shapes" in Greek.  Polymorphism is something that 
happens in the background.  The language is smart enough to tell when a parent and children objects
appear together, and sees they are different, the same method name, but different function.
The simplest possible example for this is with calculating the area of three shapes, they are all 
shapes but all different calculations.

## SOLID JavaScript Principles
These SOLID principles are OOP principles but catered more towards JavaScript.  Javascript can work
like the other object-oriented languages.  But in most cases you wanted to use different principles to 
keep the same amount of reliability.
### 1. S - Single Responsibility Principle
This first principle is very straight forward and not a trick.  The Single Responsibility Principle states
that every function should do exactly one thing.  This is a very simple rule, but when programming it is
very easy to look over.  I personally do this a lot where I try to do too much at one time.  In this
repository we followed this principle well which can be seen in the following code.  All the calculator 
functions are simple and only calculate one thing using only two numbers.
```
function Square (a) {
    return a * a;
}
```
This function clearly takes one number and squares is, that's it.  One simple function.

### 2. O - Open-Closed Principle
The second principle here is the Open-Closed Principle.  This principle simply put means that the 
JavaScript modules you are creating should be open for extension, but closed to any modification.
There should be functions built into your module so that you can access it from anywhere without
touching the file itself at all.

### 3. L - Liskov Substitution Principle
The Liskov Substitution Principle is in simple terms things that sound right or make sense in natural
language don't always work expected in code involving inheritance.  To follow this principle means that
a child and parent element are interchangeable in terms of the methods.  This will be clear when we build
the statistics calculator which inherits the original calculator.  Calling the Sum function will be the 
same in both the calculator and the statistics calculator.

### 4. I - Interface Segregation Principle
This is a simple principle in where simplicity is king once again.  You do not want to create interfaces
that are full of extra things needed to be implemented to do one function.  The essentials should always
be present but anything else should be optional.  This needs to be coded in, so one must remember this
principle day to day.  In this example code this method Difference is creating a new calculation, 
adding the calculation to Calculations and returning the result.  All we have to do though is call
Calculator.Difference(a,b);
```
static Difference(a,b) {
        let calculation = new Calculation(a,b,Difference);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
```
This makes it simple to work with your code.  This is very important when working in teams on coding projects.

### 5. D - Dependency Inversion Principle
The Dependency Inversion Principle can also be said as the Dependency Injection Principle.
With this principle the higher level modules should not rely on the lower level modules to work.
In our calculator code the calculator is able to create a calculation by calling one function, 
calculation.  By doing this we can define the type of calculation high level without having to call
different functions at all.
```
let calculation = new Calculation(10,5, Sum);
    expect(calculation.GetResults()).toBe(15);
```

## Design Patterns
### Creational
The creational design pattern that I implemented is the prototype design, also known as clone.
The basis of this design pattern is the clone method.  What this method is doing is cloning an object
through a common interface.  When an object supports cloning it is called a prototype.
In simple terms instead of having to construct a new object from scratch to duplicate an object
you can simply call the clone method. Here you can see my clone method and test
```
clone() {
        return Object.create(this);
    }
```
```
test('Testing clone method', () => {
    let calculation = new Calculation(25, 25, Sum);
    let cloneCalculation = calculation.clone();
    expect(calculation === cloneCalculation.prototype);
})
```
### Structural
The structural design pattern that I chose is the decorator patter.  This allows you to change object while inside
special wrappers.  Usually you can not change the aspects of an object after constructed.  The issue is that inheritance
is static, meaning you can't alter the behavior of the object after instantiation.  I created a decorator inside my
calculation class.  Following you can see the decorator class that adds the istransformed attribute and changes
the operation.
```
transform(calc, op) {
        calc.isTransformed = true;
        calc.op = op;
        return calc;
    }
```
```
test('Testing decorator', () => {
    let calculation = new Calculation(25, 25, Sum);
    calculation.transform(calculation, Difference);
    expect(calculation.GetResults()).toBe(0);
})
```
### Behavioral
