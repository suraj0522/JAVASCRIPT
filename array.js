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
