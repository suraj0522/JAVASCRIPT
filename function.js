function myfun() {
  console.log("Hello there");
  console.log("This is my first function");
}
myfun();
myfun();

function letter(msg) {
  console.log(msg);
}

letter("This is a message from the letter function");

function add(a, b) {
  s = a + b;
  return s;
}
let sum = add(5, 10);
console.log("The sum is:", sum);

const arrowsum = (a, b) => {
  console.log(a + b);
};

function multiple(a, b) {
  return a * b;
}
arrowsum(5, 10);

const arrowmultiple = (a, b) => {
  console.log(a * b);
};

const printHello = () => {
  console.log("Hello");
};
printHello();

function countvowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  console.log(count);
}
countvowels("hey there i am telling you to stop");

let arr = [1, 2, 3, 4, 5];

arr.forEach((val) => {
  console.log(val);
});

let square= [2,4,5,6,104,78,136];

// square.forEach((square)=>{
//   console.log(square * square );
// }); 
 
let calcsquare = (num) => {
  console.log(num * num);
};
square.forEach(calcsquare); //its also the same mathoed
hhgu
