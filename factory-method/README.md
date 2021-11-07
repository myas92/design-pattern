# Factory Method (Creational)
It defines an interface for creating a single object and lets child classes decide which class to instantiate.

the factory method pattern uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created. 

This is done by creating objects by calling a factory method — either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes — rather than by calling a constructor.


### When our object or component setup involves a high level of complexity.

When we need to easily generate different instances of objects depending on the environment we are in.

When we’re working with many small objects or components that share the same properties.

When composing objects with instances of other objects that need only satisfy an API contract (a.k.a., duck typing) to work. This is useful for decoupling.
