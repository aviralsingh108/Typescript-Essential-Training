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



//Challenge 1
enum ToDoStatus {
    Done = 'done',
    NotDone = 'notDone'
}

interface TodoItems{
    id: number,
    item: string
    todoStatus?: ToDoStatus
}

const todoItems: TodoItems[] = [
    {id:1, item: 'first', todoStatus: ToDoStatus.Done},
    {id:1, item: 'first'},
    {id:1, item: 'first', todoStatus: ToDoStatus.NotDone}
]

console.log(todoItems);



// Union Types 
interface Contact3{
    id: number;
    name: string;
    status: ContactStatus;
}
// enum ContactStatus {
//     Single = "single",
//     Married = "married"
// }
type ContactStatus = "single" | "married"

const contact3: Contact3 = {
    id: 1,
    name:'abc',
    status: "married"
}



// Keyof Operator

interface Contact4{
    id: number;
    name: string;
    status: ContactStatus;
}
type ContactField = keyof Contact4

const custContact : ContactField = "name"

const contact4: Contact4 = {id:1, name:'abc', status: "single"}

function getValue(source, propertyName: keyof Contact4){
    return source[propertyName]
}
console.log(getValue(contact4, "name"))


// typeof operator
const num = {min: 1, max: 100}
function save(recNum: typeof num){}



//Record
let x1: Record<string, string | number> = {name: 'abc'}
x1.na= 1