// ES6 Arrow function with parameters
const addTwoNumbers = (a, b) => {
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single line Arrow function with parameters
const addTwoNumbers2 = (a, b) => a + b;
// const addTwoNumbers2 = (a, b) => (a + b); -> also valid! Required with multilines code
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);

// Implicit returns
const saySomething = message => console.log(message);
saySomething("Hello there!");

const sayHello = () => console.log("hello");
sayHello();

// Returning multiple lines
const returnMultipleLines = () => (
    `<p> 
      This is a multiline string!
    </p>`
)
console.log(returnMultipleLines());