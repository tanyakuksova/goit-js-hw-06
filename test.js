// function greet(str) {
//     console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//     username: "Mango",
//     room: 27,
// };

// const poly = {
//     username: "Poly",
//     room: 191
// };

// greet.apply(mango, ['Welcome']);
// greet.call(poly, "Hello");

//************************************************* */

// const customer = {
//     username: "Jacob",
//     sayHello() {
//         console.log(`Hello, ${this.username}!`);
//     }
// };

// const user = {
//     username: "test user",
// };

// customer.sayHello(); // "Hello, Jacob!"

// // const greet = customer.sayHello;
// const greet = customer.sayHello.bind(user);

// greet(); // TypeError: Cannot read properties of undefined (reading 'firstName')

//************************************************* */


// const animal = {
//     legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog);

// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
// child.qa = true
// console.log(child);
// console.log(child.heritage);
// console.log(parent.isPrototypeOf(child));

// for (const key in child) {
//     // if (child.hasOwnProperty(key)) {
//     console.log(key);
//     // }
// }

// console.log(Object.keys(child));
// console.log(Object.values(child));

const objC = { c: "objC prop" };

const objB = Object.create(objC);
objB.b = "objB prop";

const objA = Object.create(objB);
objA.a = "objA prop";

console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
console.log(objC); // { c: "objC prop", [[Prototype]]: Object }