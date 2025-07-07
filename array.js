let marks= [89,49,48,68,64];
console.log(marks);
console.log(marks[0]);
console.log(marks[1]=85);

let names = ["suraj","subhan", "amnjubg"];

for(let idx =0; idx<names.length; idx++){
    console.log(names[idx]);
}

console.log(names);

let cities = ["delhi","mumbai","pune","ranchi"];

for(let city of cities){
     console.log(city.toUpperCase());

}

let numbers = [45,78,45,85,69];

let sum = 0;
for(let num of numbers){
    sum += num;
}
let avg = sum / numbers.length;
console.log(`avg marks of = ${avg}`);

let fooditeams = ["biryani","pasta","pizza","burger"];
 fooditeams.push("chips","icecreame","chocolate");
 fooditeams.pop();
console.log(fooditeams);
console.log(fooditeams.toString());

let marvel = ["ironman","spiderman","thor"];
marvel.unshift("hulk");
let dc = ["batman","superman"];
dc.unshift("flash");
let heroes = marvel.concat(dc);
console.log(heroes);

marvel.shift();
console.log(marvel);

let arr = [1,2,3,4,5,6,7,8,9];
arr.splice(2,2,105,160);
console.log(arr);

let companies = ["google","microsoft","uber","apple","amazon"];
companies.splice(0,1);
console.log(companies);
companies.splice(1,1,"Ola");
companies.push("netflix");
console.log(companies);
