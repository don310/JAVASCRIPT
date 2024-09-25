// // first.insertAdjacentHTML('beforebegin', '<div class="test"> beforebegin</div>');
// // first.insertAdjacentHTML('beforeend', '<div class="test"> beforeend</div>');
// // first.insertAdjacentHTML('afterbegin', '<div class="test"> afterbegin</div>');
// // first.insertAdjacentHTML('afterend', '<div class="test"> afterend</div>');
// // first.remove()

// // first.class = "text-black red"

// // first.className = "text-black red"
// // first.classList
// // first.classlist.remove("red") 
// // first.classList.add("red")
// // first.classList.toggle("red")
// // first.classList.contains("red")

// // document.write("Hello")

// // const sum = (a, b, c) => {
// //     console.log("Yes I am running " + (a + b + c))
// //     a+b
// // }

// // setTimeout(sum, 1000, 1, 2, 7)
// // setInterval(function () {
// //    alert("setinterval")
// // }, 3000)

// // let a = setTimeout(function() {
// //     alert("I am inside of settimeout")
// // }, 5000)

// // let b = prompt("Do you want to run the settimeout?")
// // if("n" == b){
// //     clearTimeout(a)
// // }

// // console.log(a)

// // let a = document.getElementsByClassName("container")[0]
// // a.onclick = () =>{
// //     let b = document.getElementsByClassName("container")[0]
// //     b.innerHTML = "Hello World!"
// // }

// // let x = function(e) {
// //     console.log(e.target)
// //     console.log(e)
// //     // alert("Hello World1!")
// // }

// // // let y = function(e) {
// // //     console.log(e)
// // //     alert("Hello World2!")
// // // }

// // btn.addEventListener('click', x)

// // btn.addEventListener('click', y)

// // let a = prompt("What is your favorite number?");

// // if(a== "2") {
// //     btn.removeEventListener('click', x)
// // }

// // Callbacks
// function loadScript(src, callback) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function() {
//         console.log("loaded script with SRC: " + src)
//         callback(null, src);
// }
//     script.onerror = function(){
//         console.log("Error loading with SRC: " + SRC);
//     }
//       document.body.appendChild(script);
//   }


//   function hello(error, src) {
//     if(error){
//         console.log(error);
//         return
//     }
//     alert("Hello World! + src");
//   }

//   function goodmorning(error, src) {
//     if(error){
//         console.log(error);
//   function hello(error, src) {
//  sendEmergencyMessageToCeo();
//         return
//     }
//     alert("Good Morning + src");
//   }

  

//   loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", goodmorning)