// let div = document.querySelector("div");

// console.log(div);

// div.style.backgroundColor = "purple";

let newbtn = document.createElement("button");
newbtn.innerText = "Click Me!";
console.log(newbtn);

let div = document.querySelector("div");
div.prepend(newbtn);

let heading = document.createElement("h1");
heading.innerText = "Hi i am new!";
console.log(heading);

let body = document.querySelector("body");
body.prepend(heading);






