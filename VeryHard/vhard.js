//Person constructor
function Person(name, job, age) {
  this.name = name;
  this.job = job;
  this.age = age;
  //option A  WHY DO THESE APPEAR WITH THE PROGRAMMER
  this.exercise = function () {
    return "Wake up every morning at 6:00am to exercise.";
  };
  this.fetchJob = function () {
    return this.name + " is an " + this.job;
  };
}

let individual = new Person("Yareline", "Apprentice", 23);
// console.log(individual);
console.log(individual.exercise());
console.log(individual.fetchJob());

//option B
// Person.prototype.exercise = function () {
//   return "Wake up every morning at 6:00am to exercise.";
// };

// Person.prototype.fetchJob = function () {
//   return this.name + " is an " + this.job;
// };
// Programmer.prototype = Person.prototype;

//Programmer Constructor with inherited properties
function Programmer(name, job, age, languages) {
  Person.call(this, name, job, age);
  this.languages = languages;
  this.busy = true;
  this.completeTask = function () {
    this.busy = false;
    return this.busy;
  };
  this.acceptNewTask = function () {
    this.busy = true;
    return this.busy;
  };
  this.offerNewTask = function () {
    if (this.busy === true) {
      return "This person is working on previous responsibilities.";
    } else {
      return "This person is available for new responsibilities.";
    }
  };
  //can only add one language at a time
  this.learnLanguage = function (lan) {
    languages.push(lan);
  };
  this.listLanguages = function () {
    console.log(languages);
  };
}

let persona = new Programmer("Alexis", "Student", 23, ["HTML", "JavaScript"]);
let persona2 = new Programmer("Fher", "Graduate", 24, ["HTML", "CSS"]);

// console.log(persona.completeTask());
// console.log(persona.offerNewTask());
// persona.learnLanguage("CSS");
// console.log(persona.listLanguages());
// // console.log(persona);

// console.log(persona2.completeTask());
// console.log(persona2.offerNewTask());
// persona2.learnLanguage("JavaScript");
// console.log(persona2.listLanguages());
