// LOGGING OUTPUT
//alert('Hello World'); // Do not use for debugging. Stops script and only strings
/* console.log('Hello')
console.error('This is an error')
console.warn('This is a warning') * /

let
let age = 30;
// let can be re-assigned, const can not
age = 31

console.log(age)

let score;

score = 10;

console.log(score);

/* DATA TYPES - string, number, boolean, null, undefined 

const name = 'John'; 
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name); string
console.log(typeof age); number
console.log(typeof rating); number
console.log(typeof isCool); boolean
console.log(typeof x); null
console.log(typeof y); undefined
console.log(typeof z); undefined */

/* 
 // Strings  

// Concatenation 
 const name = 'John'; 
 const age = 30;

console.log('My name is ' +name + ' and I am ' + age)

// Templates literal (better)
 const hello = `My name is ${name} and i am ${age}`;

console.log(hello);
*/

/*
// String properties aand methods
const s = 'Technology, computers, IT, codes';

// To get the number of characters
console.log(s.length);

// To change the case
console.log(s.toUpperCase());

// To pull a substring ou of the string
console.log(s.substring(0, 15).toLowerCase());

// to split a string into an array
console.log(s.split(''))
console.log(s.split(', '))
*/

/*
// Arrays - variables that hold multiple values

const fruits = ['apples', 'oranges', 'pears'];

// Get one value - Arrays start at 0
//console.log(fruits[1]);

// Add value
fruits[3] = 'grapes';

//Add value using push
fruits.push('mangoes');

//Add to beginning
fruits.unshift('strawberries');

// Remove last value
fruits.pop();

// To check array
console.log(Array.isArray(fruits))

// To get index 
console.log(fruits.indexOf('oranges'))

console.log(fruits);
*/

/*
 //Object literals
const person =  {
    firstname: 'John',
    lastname: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '7 lawal str',
        city: 'Akowonjo',
        state: 'lagos'
    }
}

// To get single, double or more value
console.log(person.firstname, person.lastname, person.age);

// To get array values
console.log(person.hobbies[1])

// Get Emebbed object
console.log(person.address.city)

// Destructing- to create variables or want these as actual variables
const { firstname, lastname, address: {state } } = person;

console.log(state);

// Add properties
person.email = 'john@gmail.com';


console.log(person)
*/


/*
//Array of objects
const todos = [
    {
        id:1,
        text:'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text:'Dentist appointment',
        isCompleted: false
    },
];

console.log(todos);
*/


 // Loops

 /*
//For loop
for(let i = 0; i < 10; i++) {
    console.log(`for loop number: ${i}`);
}
*/


/*
// While loop
let i = 0;
while(i < 10) {
    console.log(`while loop number: ${i}`);
    i++;
}
*/

//Loop through Arrays

/*
// For loop
for(let i = 0; i < todos.length; i++) {
    //console.log(`for loop number: ${i}`);
    // tO LOGOUT THE TODO text
   console.log(todos[i].text);
}
*/


/*
// For of loop
for(let todo of todos) {
    console.log(todo.text);
}
*/


// HIGH ORDER ARRAY METHODS (suggested way to do any kind of iteration)

/*
//  forEach- Loops through array
todos.forEach(function (todo) {
    console.log(todo.text);
});
*/

/*
// Map -Loop through and create new array
const todoText = todos.map(function (todo) {
    return todo.text;
});


console.log(todoText)
*/


/*
// Filter
const todoCompleted  = todos.filter(function(todo) {
     // Return only todos where id is 1
    return todo.isCompleted === true
}).map(function(todo) {
    return todo.text;
})
console.log(todoCompleted);
*/

/*
//Conditionals

// Simple If/Else Statement
const x = 7;
const y = 11;

if(x === 10) {
    console.log('x is 10')
} else if (x > 10) {
    console.log('x is greater than 10')
}

else {
    console.log('x is less then 10')
}
*/

/*
// multiple conditions
if(x > 5 && y > 10) {
    console.log('x is more than 5 or y is more than 10')
};
*/

/*
// Ternary operator / Shorthand if statement
const x = '9';

const color = x > 7 ? 'red' : 'blue';

// To get the default
//const color = 'green';

console.log(color);

// Switch
switch(color) {
    case 'red':
    console.log('color is red');
    break;
    case 'blue':
    console.log('color is blue');
    break;
    default:
        console.log('color is NOT is red or blue')
}*/

/*
//Functions

function addnums(num1 = 1, num2 = 2, num3 = 3) {
return num1 + num2 + num3;
}           

console.log(addnums());
*/

/*
// ARROW FUNCTIONS
const addnums = (num1 = 1) => num1 + 4;

    
console.log(addnums(5));

todos.forEach((todo) => console.log(todo));
*/

//Object oriented program OOP


/*
// Constructor Function
function Person(firstname, lastname, DOB) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.DOB = new Date(DOB);
}
    this.getBirthYear = function() {
        return this.DOB.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstname} ${this.lastname}`;
    }
    this.getFullName = function() {
        return `${this.lastname} ${this.firstname}`
    }

   Person.prototype.getBirthYear = function() {
    return this.DOB.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstname} ${this.lastname}`;
}


/*
// ES6 CLASSES
class Person {
    constructor(firstname, lastname, DOB) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.DOB = new Date(DOB);
    }

    // Get Birth Year
    getBirthYear() {
        return this.DOB.getFullYear();
    }

     // Get Full Name
     getFullName() {
        return `${this.firstname} ${this.lastname}`;
     }    
}
*/

/*
//Instantial object
const person1 = new Person('John', 'Doe', '8-10,1983');
const person2 = new Person('Mary', 'Doe', '3-6,1970');

console.log(person2.DOB.getFullYear());
console.log(person1.getBirthYear());
console.log(person2.getFullName());
console.log(person1.getBirthYear());
*/


// WORKING WITH OUR HTML & CSS 

// Element Selectors

//console.log(window);

/*
 // Single element selector
console.log(document.getElementById('my-form'));//used to selcet ID
console.log(document.querySelector('h1')); // Used to select other things like classes, tags and the rest
*/

/*
// Multiple element selector
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item')); // to select classes only
console.log(document.getElementsByTagName('li')); // to select tags only
*/


/*
//Lopping through
const items = document.querySelectorAll('.item');

items.forEach(item => console.log(item));*/


/*
//Manipulating the DOM
const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Wagwan';
ul.children[1].innerText = 'Izzy';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn');

btn.style.background = 'red'*/

// Events

//Mouse Event
/*
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
//btn.addEventListener('mouseover', (e) => {
//btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    //console.log('click');
   // console.log(e);
    //console.log(e.target);
    //console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
    document.querySelector('.items').lastElementChild.style.color = '#333'
});
*/

/*// Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});*/

// # FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error')
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000)
  } else {
    // Create new list item with user
    const li = document.createElement('li');

     // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}
    : ${emailInput.value}`));

    // Append to ul
    userList.appendChild(li);

    //Clear the fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
  