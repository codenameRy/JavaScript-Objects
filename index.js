//Example of Square brackets
// let user = {
//   name: "John",
//   age: 30
// };

// let key = prompt("What do you want to know about the user?", "name");

// // access by variable
// alert( user[key] ); // John (if enter "name")

//Objects: The Basics

//Challenge 1 - Hello Object

let user = {
  name: 'John',
  surname: 'Smith',
}

user.name = 'Pete'
delete user.name

console.log((user.name)); //undefined

//Challenge 2 - Check for emptiness
//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.


let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty() {
  for (let key in schedule) {
    return false
  }
  return true
}

//Challenge 3 - Sum Object properties
//Answer should be 390

//Solution - For in Loop
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log((sum)); 

//Challenge 4 - Multiply numeric properties by 2

// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

//Solution 1 - Type of

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//       }
//   }
// }

//Solution 2 - !isNaN
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (!isNaN(obj[key])) {
      obj[key] *= 2;
      }
  }
}

//July 18 - Object Methods "This"

//Challenge 1- Use "this" in object literal

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
};

let user2 = makeUser();

alert( user2.ref().name ); // John

//Challenge 2 - Create a calculator

/* Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.*/

//Solution
let calculator = {
  sum() {
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  },
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//Challenge 3 - Chaining: There’s a ladder object that allows to go up and down:

/* Before applying the chaining methods
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1


*/

//Solution

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};


ladder.up().up().down().showStep(); // 1