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
`class Calculator {
static Calculations = []
    static Sum(a,b) {
        let calculation = new Calculation(a,b,Sum);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();`
### 2. Abstraction
### 3. Inheritance
### 4. Polymorphism

## SOLID JavaScript Principles
### 1. S - Single Responsibility Principle
### 2. O - Open-Closed Principle
### 3. L - Liskov Substitution Principle
### 4. I - Interface Segregation Principle
### 5. D - Dependency Inversion Principle