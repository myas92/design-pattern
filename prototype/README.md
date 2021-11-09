# Prototype pattern

It creates new objects from the existing objects.


## Description

The prototype pattern is a creational design pattern in software development. It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects.


# Problem 

Say you have an object, and you want to create an exact copy of it. How would you do it? First, you have to create a new object of the same class. Then you have to go through all the fields of the original object and copy their values over to the new object.

Nice! But there’s a catch. Not all objects can be copied that way because some of the object’s fields may be private and not visible from outside of the object itself.

## Helpful link

- [refactoring](https://refactoring.guru/design-patterns/prototype)
- [devexpert](http://devexpert.ir/javascript/%D8%A7%D9%84%DA%AF%D9%88%DB%8C-%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-abstract-factory-%D8%AF%D8%B1-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA/)