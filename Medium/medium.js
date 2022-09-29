function cutPizzaSlices(x) {
  return x;
}
// console.log(cutPizzaSlices(8));

function sharePizza(y) {
  var amountPizza = cutPizzaSlices(8);
  // var finalSlices =
  return "Each person gets " + amountPizza / y + " slices of pizza";
}

console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3));
// prints "Each person gets 2.67 slices of pizza"
