# Factory Method (Creational)
It defines an interface for creating a single object and lets child classes decide which class to instantiate.

the factory method pattern uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created. 

This is done by creating objects by calling a factory method — either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes — rather than by calling a constructor.


### When our object or component setup involves a high level of complexity.

When we need to easily generate different instances of objects depending on the environment we are in.

When we’re working with many small objects or components that share the same properties.

When composing objects with instances of other objects that need only satisfy an API contract (a.k.a., duck typing) to work. This is useful for decoupling.

# example

[factory_method_example](http://devexpert.ir/javascript/%D8%A7%D9%84%DA%AF%D9%88%DB%8C-%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-factory-method-%D8%AF%D8%B1-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA/)