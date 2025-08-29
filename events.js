// let btn1 =document.querySelector('#btn1');

//  btn1.onclick = () => {
//     console.log('Button 1 clicked');
//     let a = 25;
//     a++;
//     console.log(a);
//  }
  
//  let div = document.querySelector('div');
//     div.onmouseover = () => {
//     console.log('Mouse is over the div');
//     }

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
   let body = document.querySelector("body");
   let currMode="light"; //dark

   modebtn.addEventListener("click", () => {
       if (currMode === "light") {
          currMode = "dark";
        body.classList.add("dark");
         body.classList.remove("light");

       } else {
          currMode = "light";
            body.classList.add("light");
         body.classList.remove("dark");
       }
      console.log(currMode);
   });


  