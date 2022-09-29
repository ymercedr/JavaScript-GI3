function exercise(x) {
  return "Today's exercise: " + x;
}

function run() {
  var run = exercise("running");
  return run;
}

function swim() {
  var swim = exercise("swimming");
  return swim;
}

console.log(run());
// prints "Today's exercise: running"
console.log(swim());
// prints "Today's exercise: swimming"
