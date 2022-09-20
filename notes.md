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

## Type Alias

    Type Aliases are just alias for the other types, just an alternate name,
    they are by no means another type by themselves

    e.g.,
    let address: string;
    Sol:
    let address: customerAddress;
    type customerAddress = string;

## Enumerable Types

    For all the expected known values for any variable, we can define an Enum
    e.g.,
    let status: customerStatus;
    enum customerStatus {
        Single = "single",
        Married = "married"
    }


## Generics

    Generics helps to create type which can be used repeatedly for classes, functions and 
    types aliases, it helps to avoid defining the types explicitly, this makes the code reusable.
    e.g.,
    function clone(source: Contact): Contact{}
    Sol:
    function clone<T>(source: T): T{}
    const a: Contact = clone({id:1, name: 'abc'});
    clone(a);
*Here, while the function call itself, typescript infers the type from function parameters. So, on hovering over the clone function calling statement, the type willbe shown as Contact*

---
**Two different generic types**

    function clone<T1,T2>(source: T1): T2{}
    clone<Contact, Date>({id:1, name:'abc'})
    
---
**Matching the second generic type with properties common with the first generic type**

function clone<T1, T2 extends T1>(source: T1): T2{}

*Additionally, more properties can be added to T2, but T2 should have at least those common with T1*

## Union Types

**Union Types can be used to replace the enum types**
e.g.,
enum ContactStatus {
    Single = "single",
    Married = "married"
}
Sol:
interface Contact{
    id: number;
    name: string;
    status: ContactStatus;
}

type ContactStatus = "single" | "married"

const contact: Contact = {
    id: 1,
    name:'abc',
    status: "married"
}

## Keyof Operator

**Keyof is like instance of**
1. e.g.,
interface Contact4{
    id: number;
    name: string;
    status: ContactStatus;
}
type ContactField = keyof Contact4

const custContact : ContactField = "name"
*Here, for the variable custContact after the = sign, the compiler shows only 3 options, i.e., id, name and status, if something apart from this is written as an string, it shows that as an error*

2. 
function getValue(source, propertyName){
    return source[propertyName]
}
console.log(getValue(contact, "nname"))

*Here this function works fine, but while calling the function getValue with argument propertyName holding some value other than the existing properties for object Source, the function would return undefined*

Sol:
function getValue(source, propertyName keyof Contact){
    return source[propertyName]
}
console.log(getValue(contact, "name"))
*Here the compiler would show error for the argument other than id, name, status as mentioned in the interface Contact*


## Type Of Operators

typeof operators can be used to infer type from a value, just in case we are not sure about the types which could be defined through some interface
e.g.,

const num = {min: 1, max: 100}

function save(recNum: typeof num){}

*Here, the ts compiler can allow the variable num to be used as type for recNum parameter, without typeof it wouldn't have been possible, since values can't be used as type. On hovering over variable num, it shows const num: {min: number;max: number;}, hence it gives up the entire type for all the properties for the variable or object 'num'*

## Records - Dynamic but limited types

let x1: Record<string, string | number> = {name: 'abc'}
x1.na= 1

*Here, the property type has become dynamic*