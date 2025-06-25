// for (let count =1; count<=5;count++){
//      console.log("anime is love");

// }
// console.log("loop is ended");

let sum=0;
let n= 5;
for (let i=1; i<=n; i++){
     sum = sum+i;
}
console.log("sum =",sum);

console.log("start the loop");

let obj={
      Fname:"srj",
      age:"20",
      city:"delhi",
} 
console.log("object is",obj);

for(let count= 1; count<= 100; count++){

     console.log("heloo i am doing this again")
}
for(let j=1; j<=5; j++){
      console.log("j=",j);
}

let j=1;
while(j<=5){
     console.log("j=",j)
     j++;
}

do{
     console.log("j=",j);
     j++;
}while(j<=8);

let str= "suraj";

for(let i of str ){
     console.log("i=",i);
}

let student = {
      name: "suraj",
      age: 19,
      cgpa: 7.5,
      ispass:  true,

};



for(let key in student){
     console.log((key), "=", student[key]);
}

for( let numb=0; numb<=100; numb++){


     if(numb%2==0){
           console.log("numb",numb);
     }
}

let gamenum=25;
let usernum= prompt("enter the number between 1 to 50");
while(usernum != gamenum){
  usernum = prompt("you entered wrong number, try again");

}
console.log("you entered the correct number", usernum);