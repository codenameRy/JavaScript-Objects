let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")

//Objects: The Basics

//Challenge - Hello Object

let user2 = {
  name: 'John',
  surname: 'Smith',
}

user2.name = 'Pete'
delete user2.name

alert (user2.name)

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

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let totalSal = salaries.reduce()=> {

}