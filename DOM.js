// alert("hello!");


 document.body.childNodes[3].innerText = 'hello this is a new dom';

let heading = document.getElementById('heading');
console.dir(heading);

let heading12 =document.getElementsByClassName("heading2");
console.dir(heading12);
console.log(heading12);

let para = document.getElementsByTagName("p");
console.dir(para);
console.log(para);

let firstel = document.querySelector("p");
console.dir(firstel);

let secondel = document.querySelectorAll("p");
console.dir(secondel);

console.dir(document.body.firstChild);

console.log(document.querySelector("div").children);

let div = document.querySelector("div");
console.dir(div);

let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + " is changed now";
console.dir(h2.innerText);

let box = document.querySelectorAll(".box");
 console.dir(box);
let idx =1;
 for(div of box){
     div.innerText = `this is div ${idx}`;
     idx++;
     
} //this is a loop system of js 
