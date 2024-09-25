  //--> Promise Topic <--//
//   let promise = new Promise(function (resolve, reject) {
//     alert("Hello")
//     resolve(56)
//   })
  
//   console.log("Hello One");
//   setTimeout(function () {
//     console.log("Hello Two in 2 seconds");
//   }, 2000);
  
//   console.log("My name is " + "Hello Three");
//   console.log(promise)
  
  // Fetch google.com homepage  ==> console.log(google.com homepage done)
  // Fetch data from the data api
  // Fetch pictures from the server
  // Print downloading
  // Rest of the script

       //-----------> Uses of .then(); or .catch(); <-------------\\

//   let p1 = new Promise((resolve, reject)=>{
//     console.log("Promise is pending")
//     setTimeout(()=>{
//         // alert("I am  a promise and I am fullfilled")
//         resolve(true)
//     }, 5000)
//   })

//   let p2 = new Promise((resolve, reject)=>{
//     console.log("Promise is pending")
//     setTimeout(()=>{
//         // alert("I am  a promise and I am rejected")
//         reject(new Error("I am an error"))
//     }, 5000)
//   })

//   p1.then((value)=>{
//     console.log(value)
//   })

//   p2.then((value)=>{
//     console.log(value)
//   },(error)=>{
//     console.log(error )
//   })

// //To catch the error
// // p2.catch((value)=>{
// //     console.log("some error ocurred in p2")
// // })

//   console.log(p1, p2)

//--------->promise chaining .then() calls <-----------------\\\

// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Resolved after 2 seconds")
//         resolve(56)
//     }, 2000)
// })

// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>  {resolve("Promise 2") },2000 )
          
//         })
     
//     return p2;
// }).then((value)=>{
//     console.log("We are done")
//     return 2;
// }).then((value)=>{
//     console.log("Now we are pakkka done")
// })

// const loadScript = (src)=>{
//     return new Promise ((resolve,reject) =>{
//         let script = document.createElement("script")
//         script.type = "text/javascript"
//         script.src = src
//         document.body.appendChild(srcipt)
//         script.onload =()=>{
//             resolve("Script has been loaded sir")
//         }
//         script.onerror =()=>{reject(0)}
//     })
// }

// let p1 = loadScript("https://getbootstrap.com/docs/5.3/")
// p1.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log("We are sorry but we are having problems loading this script")
// })


// <-----------------------Attaching Multiple Handlers to a Promise ------------------------------>

// let p1 = new Promise((resolve, reject)=>{
//     alert("Hey i am not resolved")
//     setTimeout(()=>{
//         resolve(1)
//     })
// })

// p1.then(()=>{
//     console.log("Hurry") 
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(4)
//         }, 6000)
//     })
// }).then((value)=>{console.log(value)})

// p1.then(()=>{
//     console.log("Congratulations this promise is now resolved")
// })


// <-------------------------------Promise API------------------------------------------------------------>

// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value 1");
//     }, 11000);
// })

// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve("value 2");
//         reject(new Error("error"))
//     }, 2000);
// })

// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value 3");
//     }, 3000);
// })

// p1.then((value)=>{
//     console.log(value)
// })

// p2.then((value)=>{
//     console.log(value)
// })

// p3.then((value)=>{
//     console.log(value)
// })

// let promise_all = Promise.all([p1,p2,p3])
// let promise_all = Promise.allSettled([p1, p2, p3])
// let promise_all = Promise.race([p1, p2, p3])
// let promise_all = Promise.any([p1, p2, p3])
// let promise_all = Promise.resolve(6)
// let promise_all = Promise.reject(new Error("Hey"))
// promise_all.then((value)=>{
//     console.log(value)
// })

//------------------------------> Async/Await <-------------------------------//

// async function deepak() {
// let delhiWeather = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("27 Deg")
//     }, 1000)
// })


// let bangaloreWeather = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("21 Deg")
//     }, 2000)
// })

//     // delhiWeather.then(alert)
//     // bangalorWeather.then(alert)
//     console.log("Fetching Delhi Weather please wait ...")
//     let delhiW = await delhiWeather
//     console.log("Fetching Delhi Weather: " + delhiW)
//     console.log("Fetching Bangalore Weather please wait ...")
//     let bangaloreW = await bangaloreWeather
//     console.log("Fetching Bangalore Weather: " + bangaloreW)
//     return [delhiw, bangaloreW]


//     const mukul = async() =>{
//         console.log("Hey I am cherry and I am not waiting")
//     }
    
// }
// const main1 = async () =>{
// console.log("Welcome to weather control room")
// let a = await deepak()
// let b = await mukul()

// }
// main(); 

//-------------------------------------->Error Handling - Try and Catch<------------------------------------------//

// setTimeout(()=>{
//     console.log("Hacking wifi...........Please wait....")
// }, 1000)

// try{
//     setTimeout(()=>{
//         try{

//         } catch (error){

//         }
//         console.log(rahul)
//     }, 100)
    
// }
// catch(error){
//     console.log("balle balle!")
// }

// setTimeout(()=>{
//     console.log("Fetching username and password.... Please wait...")
// }, 2000)

// setTimeout(()=>{
//     console.log("Hacking Rahul's facebook id...........Please wait....")
// }, 3000)

// setTimeout(()=>{
//     console.log("Username and password of Rahul (+91232332323) Fetched...........Please wait....")
// }, 4000)


//------------------------------------------->Error Object & Custom Errors----------------------------------------->
// try {
// let age = prompt("Enter your age")
// age = Number.parseInt(age)
// if(age>150){
//     throw new ReferenceError("This is probably not true")
// }
                       
// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// }
// console.log("This script is still running")

//--------------------------------------------->The Finally Clause------------------------------------------>\\

// const f = ()=>{
// try{
//     let a = 0;
//     console.log(program)
//     console.log("program run successfully")
//     return
// }
// catch(err){
//     console.log("This is an error")
//     console.log(p)

// }

// finally{
//     console.log("I am a good boy")
//     // Close the file
//     // Exit the loop
//     // Write to the log file
// }
// }

// f()
// console.log("End")

//------------------> Practice Set Chapter-9 <----------------------//

// const loadScript = async (src) => {
//   return new Promise((resolve, reject) => { // corrected syntax of arrow function
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(src + "Done Success");
//     };
//     document.head.append(script);
//   }); // corrected syntax of arrow function
// };

// Problem NO 1
//   let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
//  a.then((value)=>{
//       console.log(value)
//  })

// Problem No 2
// const main2 = async () => {
//   console.log(new Date().getMilliseconds());
//   let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
//   console.log(a);
//   console.log(new Date().getMilliseconds());
// };

// main2();

//Problem No 3
// let p = () =>{
//   return new Promise ((reject, resolve)=>{
//   setTimeout(()=>{
//         reject(new Error("Please this is not acceptable"))
//   }, 3000)
// })
// }

// let a = async () =>{
//   try{
//     let c = await p()
//     console.log(c)
//   }
//   catch(err){
//     console.log("This error has been handled")
//   }
// }
// a()

// Problem 4

// let p1 = async ()=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(30)
//     }, 3000)
//   })
// }
// let p2 = async ()=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(30)
//     }, 3000)
//   })
// }
// let p3 = async ()=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(30)
//     }, 3000)
//   })
// }

// const run = async ()=>{
//   console.time("run")
//   // let a1 = await p1() //Fetch first 10 products from the database
//   // let a2 = await p2() //Fetch another 10 products from the database
//   // let a3 = await p3() //Fetch yet another 10 products from the database
  
//   let a1 =  p1() //Fetch first 10 products from the database
//   let a2 =  p2() //Fetch another 10 products from the database
//   let a3 =  p3() //Fetch yet another 10 products from the database
//   let a1a2a3 = await Promise.all([a1, a2, a3] )
//   console.log(a1a2a3)
//   // console.log(a1, a2, a3)
//   console.timeEnd("run")
// }

// run()

//--------------------->Fetch API<-----------------------//

// let p = fetch("https://newsapi.org/v2/top-headlines?country")
// p.then((response)=>{
//   console.log(response.status)
//   console.log(response.ok)
//   console.log(response.headers)
//     return response.json()
// }).then((value2)=>{
//     console.log(value2)
//   })

//------------>Post Request with fetch api
// const createTodo = async (todo) => {
//   let options = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json"
//     },
//     body: JSON.stringify(todo),
//   };

//   let p = await fetch('https://jsonplaceholder.typicode.com/posts/', options);
//   let response = await p.json();
//   return response;
// };

// const getTodo = async (id) => {
//   let p = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   let r = await p.json();
//   return r;
// };

// const mainFunc = async () => {
//   let todo = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   };
  
//   let todor = await createTodo(todo);
//   console.log(todor);

//   console.log(await getTodo(567));
// };

// mainFunc();

//----------------------------->Cookies in Javascript--------------------------->
// console.log(document.cookie);

// document.cookie = "name=deepak2323323";
// document.cookie = "name2=deepak2323323";
// document.cookie = "name=deepak";

// let key = prompt("Enter your key");
// let value = prompt("Enter your value");

// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
// console.log(document.cookie);


// usind decode the value-->this is using decodes on cookie
// name2=deepak2323323; albert={value}; name=deepak; a%3B%3B%3B=34 script.js:431:9
// decodeURIComponent("a%3B%3B%3B")
// "a;;;" 


///----------------------------->localstorage---------------------------------------------->///                  
// let key = prompt("Enter key you want to set");
// let value = prompt("Enter value you want to set");

// localStorage.setItem(key, value);
// console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

// if(key == 'red' || key == 'blue'){
//   localStorage.removeItem(key)
// }

// if(key ==  0){
//   localStorage.clear();
//}

///--------------------------------->SessionStorage----------------------------------------------?///
// sessionStorage.setItem("name", "Deepak")
// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")


///----------------------------------->Storage Event----------------->
// window.onstorage =(e)=>{
//   alert("changed")
//   console.log(e)
// }


//------------------------------->Practice Set 10------------------>

// let url = "https://openlibrary.org/search.json?q=the+lord+of+the+rings"
// let response = fetch(url)
// response.then((v)=>{
//   return v.json();
// }).then((books)=>{
//   console.log(books)
//   ihtml = ""
//   for(item in books){
//     console.log(books[item])
//     ihtml += `
//     <div id = "cardContainer" class="row">
//     <div class="card" style="width: 18rem;">
//         <img src="..." class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${books[item].name}</h5>
//           <p class="card-text"><a href="${books[item].url}">Visit Here.</a></p>
//           <p Starts at: ${books[item].start_time}</p>
//           <p Starts at: ${books[item].end_time}</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div> 
//     `
//   }
//   cardContainer.innerHTML = "ihtml";
// })
// let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-02-09&sortBy=publishedAt&apiKey=06828238400f47e0bddefa0ec5f8e84c";
// let response = fetch(url);
// response.then((v) => {
//     return v.json();
// }).then((data) => {
//     console.log(data);
//     let ihtml = "";
//     data.articles.forEach((article) => {
//         ihtml += `
//         <div class="row">
//             <div class="card" style="width: 18rem;">
//                 <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${article.title}</h5>
//                     <p class="card-text">Author: ${article.author ? article.author : "Unknown"}</p>
//                     <p class="card-text">Published At: ${article.publishedAt}</p>
//                     <a href="${article.url}" class="btn btn-primary">Read More</a>
//                 </div>
//             </div>
//         </div>`
//     })
//     document.getElementById("cardContainer").innerHTML = ihtml;
// });

//----------------------------Object Oriented Programming----------------------------------//
//---------------------PROTOTYPES--------------------------->//
// let a = {
//   name2 : "Deepak",
//   language: "JavaScript",
//     run: ()=>{
//       alert(" self run")
//     }
//   }
  

// console.log(a)

// let p = {
//   run: ()=>{
//     alert("run")
//   }
// }

// p.__proto__ = {
//   name: "Jackie"
// }

// a.__proto__ = p
// a.run()
// console.log(a.name)

//------------------------------------Class and Objects---------------------------------//

class Railwayform{
  submit(){
    alert(this.name + ": Your form is submitted for tain number: " + this.trainno)
  }
  cancel(){
    alert(this.name + ": This form is cancelled for tain number: " + this.trainno)
  }
  fill(givenname, trainno){
    this.name = givenname
    this.trainno = trainno
  }
}

//Create a form for deepak
let deepakForm = new Railwayform()
//Fill the form with deepak's details
deepakForm.fill("Deepak", 143746)

//Create a form for rohan
let rohanForm = new Railwayform()
//Fill the form with rohan's details
rohanForm.fill("Rohan", 112420)

deepakForm.submit();
rohanForm.submit();
rohanForm.cancel();