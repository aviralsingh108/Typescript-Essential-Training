# Typescript
## Type Casting in ts

    Type for a variable is usually given, but for e.g.,
    let x : number = 10;
    x = "abc"; // Invalid because type is declared as number
    1Sol: We can change the type at the time of variable declaration or make it as any,
    2Sol:
    x = "abc" as any

## Interfaces

    Interfaces are meant for providing TYPE Information to Typescript,
    and it can only exist during compile time, and never available during runtime.

#### Type Alias

    Type Aliases are just alias for the other types, just an alternate name,
    they are by no means another type by themselves

    e.g.,
    let address: string;
    Sol:
    let address: customerAddress;
    type customerAddress = string;

#### Enumerable Types

    For all the expected known values for any variable, we can define an Enum
    e.g.,
    let status: customerStatus;
    enum customerStatus {
        Single = "single",
        Married = "married"
    }


#### Generics

    Generics helps to create type which can be used repeatedly for classes, functions and 
    types aliases, it helps to avoid defining the types explicitly, this makes the code reusable.
    e.g.,
    function clone(source: Contact): Contact{}
    Sol:
    function clone<T>(source: T): T{}
    const a: Contact = clone({id:1, name: 'abc'});
    clone(a);
    *Here, while the function call itself, typescript infers the type from function      parameters. So, on hovering over the clone function calling statement, the type will
    be shown as Contact*
    
    function clone<T1,T2>(source: T1): T2{}
    clone<Contact, Date>({id:1, name:'abc'})

    **To atleast, match the first generic type parameter**
    function clone<T1, T2 extends T1>(source: T1): T2{}