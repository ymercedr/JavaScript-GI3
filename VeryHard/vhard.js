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

//option B
// Person.prototype.exercise = function () {
//   return "Wake up every morning at 6:00am to exercise.";
// };

// Person.prototype.fetchJob = function () {
//   return this.name + " is an " + this.job;
// };
// Programmer.prototype = Person.prototype;

let individual = new Person("Yareline", "Apprentice", 23);
// console.log(individual);
// console.log(individual.exercise());
// console.log(individual.fetchJob());

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
    if ((this.busy = true)) {
      return "This person is available for new responsibilities.";
    } else {
      return "This person is working on previous responsibilities.";
    }
  };
  //   this.learnLanguage = function () {};
  //   this.learnLanguage = function (lan) {languages.push(lan)};
  this.listLanguage = function () {
    console.log(languages);
  };
}

let persona = new Programmer("Alexis", "Student", 23, "JavaScript");

console.log(persona.completeTask());
console.log(persona.offerNewTask());
console.log(persona);
