# Singleton pattern (Creational)

It ensures that there’s only one object created for a particular class.


## Description

In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one “single” instance. This is useful when exactly one object is needed to coordinate actions across the system.

# Problem

The Singleton pattern solves two problems at the same time, violating the Single Responsibility Principle:

- Ensure that a class has just a single instance. Why would anyone want to control how many instances a class has? The most common reason for this is to control access to some shared resource—for example, a database or a file.
  
  Here’s how it works: imagine that you created an object, but after a while decided to create a new one. Instead of receiving a fresh object, you’ll get the one you already created.

  Note that this behavior is impossible to implement with a regular constructor since a constructor call must always return a new object by design.

- Provide a global access point to that instance. Remember those global variables that you (all right, me) used to store some essential objects? While they’re very handy, they’re also very unsafe since any code can potentially overwrite the contents of those variables and crash the app.

  Just like a global variable, the Singleton pattern lets you access some object from anywhere in the program. However, it also protects that instance from being overwritten by other code.

  There’s another side to this problem: you don’t want the code that solves problem #1 to be scattered all over your program. It’s much better to have it within one class, especially if the rest of your code already depends on it.


## Helpful link

- [reafactoring](https://refactoring.guru/design-patterns/singleton)
- [devexpert](http://devexpert.ir/javascript/%D8%A7%D9%84%DA%AF%D9%88%DB%8C-%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-singleton-%D8%AF%D8%B1-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA/)