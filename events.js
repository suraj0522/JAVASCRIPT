let btn1 =document.querySelector('#btn1');

 btn1.onclick = () => {
    console.log('Button 1 clicked');
    let a = 25;
    a++;
    console.log(a);
 }
  
 let div = document.querySelector('div');
    div.onmouseover = () => {
    console.log('Mouse is over the div');
    }

// let btn2 = document.querySelector('#btn2');
//    btn2.onclick = (evt) => {
//       console.log(evt);
//        console.log(evt.type);
//        console.log(evt.target);
//    }

   // btn2.addEventListener("click", (evt) => {
   //    console.log("button was clicked");
   //    console.log(evt);
   //  console.log(evt.type);

   // });

   let modebtn = document.querySelector("#mode");
   let currMode="light";

   modebtn.addEventListener("click", () => {
       if (currMode === "light") {
          currMOde ="dark";

       }else {
          currMode = "light";
       }
      console.log(currMode);
   });


  