// Scope:
let Name = "Rabeya"; //Global Scope variable

function greet() {
  // let LastName = "Akter"; //Local Scope/Functional Scope variable
  console.log(Name, LastName);
  if (Name == "Rabeya") {
    //Block Scope
    // console.log("Hi", Name, LastName);
  }
  function inner() {
    //Laxical Scope
    // console.log("this is from laxical scope", Name, LastName);
  }
  // inner();
}

// greet();

// Closure:

function bank() {
  let money = 1000;
  function BankManager() {
    console.log(money);
  }
  function deposit() {
    let amount = 500;
    newMoney = money + amount;
    console.log("Deposit", newMoney);
  }
  // deposit();

  // BankManager();
}

// bank();

// var x = 10;

// function test() {
//   console.log(x);
//   var x = 20;
// }

// test();

// function show() {
//   console.log(this);
// }

// show();

const person = {
  name: "Rabeya",
  greet() {
    // console.log(this.name);
    const inner = () => {
      console.log(this.name);
    };
    inner();
  },

  greet2: () => {
    // console.log(this.name); // undefined because arrow function doesn't have its own this keyword
  },
};
// console.log(person.greet());
// const greetFunc = person.greet;
// greetFunc();
// console.log(person.greet2());
// person.greet(); //Rabeya , Arrow function take this from greet() method which is inside person object

function Person2(name) {
  this.name = name;
}

const p2 = new Person2("Rabeya");
// console.log(p2.name); //Rabeya when we use constructor function with new keyword then this keyword points to the newly created object
