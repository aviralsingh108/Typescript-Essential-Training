// Type Casting
let x = 5;
console.log(x)
// let x : any
x = "Hello" as any
console.log(x)



// Creating custom types with Interfaces
interface Contact extends Address{
    id: number;
    name: string;
    birthDate?: Date;
}
interface Address{
    address: string,
    pinCode?: string
}
let contact: Contact = {
    id:1,
    name: 'abc',
    birthDate: new Date,
    address: 'IN'
}



// Type Alias
// let address: string;
let address: customerAddress;
type customerAddress = string;
address = 'abcdef'
console.log(address)



//Enum Types
enum CustomerStatus {
    Single = "single",
    Married = "married"
}
let customerStatus: CustomerStatus = CustomerStatus.Single;
console.log(customerStatus)



//Typing functions
interface Contact1 {
    id: number;
    name: string;
}
function clone(source: Contact1): Contact1{
    return Object.apply({}, source)
}
const a: Contact1 = clone({id:1, name: 'abc'});
const b = clone(a);



// Generics

interface Contact2 {
    id: number;
    name: string;
}
function clone2<T1, T2>(source: T1): T2{
    return Object.apply({}, source)
}
const a2: Contact2 = clone2({id:1, name: 'abc'});
const b2 = clone2<Contact2, Date>(a2);

console.log('b2',b2)
console.log(new Date)