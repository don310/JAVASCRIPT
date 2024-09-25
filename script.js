
/*console.time("forLoop") 
for(i=0; i<53; i++)
{
    console.log(i)
}
console.timeEnd("forLoop")
*/
/*console.time("whileLoop")      
let i=0;
while(i<53)
{
    console.log(i)
    i++;
}
console.timeEnd("whileLoop") */

/*
alert("Enter the value of a!")
let a = prompt("Enter a here", "578")
a = Number.parseInt(a)
alert("You entered a of type" + (typeof a))
let write = confirm("Do you want to write it to you a page")
if(write){
    document.write(a)
}
else{
document.write("Please allow me to write")
}
*/

/*
window.console.log(window)
console.log(document.body)
document.body.style.background = "yellow"
*/
// Problem no 2 
/*
let age = prompt("Enter your age")
age = Number.parseInt(age)
let runagain = true;

while(runagain){
const canDrive = (age)=>{
    age>=18?true:false
}
if(canDrive(age)){
    alert("Yes you can drive")
}
else{
    alert("Yes you cannot drive")
}
 runAgain = confirm("Do you want to play again?")
}
*/

// Chapter 7
/*console.log(document.body.firstChild)
console.log(document.body.lastChild)
let arr = Array.from(document.body.childNodes)
console.log(arr)*/
/*
console.log(document.body.firstchild)
a = document.body.firstchild
console.log(a.parentNode)
console.log(a.elementNode)
console.log(a.firstChild.nextSibling)*/

/* 
const changeBgRed = ()=>{
    document.body.firstElementChild.style.background = "red"
}
let b = document.body
console.log("First child of b is",b.firstChild)
console.log("First Element child of b is",b.firstElementchild) 

let t = document.body.firstElementChild.firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead)
console.log(t.tFoot)

let id1 = document.getElementById("id1")
console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))
console.log(sp1.closest("#box"))
console.log(id1.contains(sp1)) 

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

Array.form(document.getElementsByTagName("li")).forEach((element) =>{
    element.style.background = "cyan";
})
*/

// let x = document.getElementsByTagName('span')[0]
// console.log(x)
// let y= document.getElementsByTagName('span')[0]
// console.dir(x)
// console.log(document.body.firstChild.nodeName)
// console.log(document.body.firstElementChild.nodeName)


// document.body.firstChild.nodeName
// "#text"
// first.innerHTML = "<i> hey i am itallic </i>"
// "<i> hey i am itallic </i>"
// first.outerHTML
// '<span id="first"><i> hey i am itallic </i></span>'
// first.outerHTML = "<div>Hey</div>"
// "<div>Hey</div>" 
// document.body.firstChild.data
// console.log(document.body.textContent)
// first.hidden = false   


// let first = document.getElementById("first")
// let a = first.getAttribute("class")
// console.log(a)
// // console.log( first.hasAttribute("class"))
// // console.log( first.hasAttribute("style"))
// // // first.setAttribute("hidden", "true")
// // first.setAttribute("class", "true sachin")
// // first.removeAttribute("class")
// // console.log(first.attribute)
// console.log(first.dataset)
// console.log(first.dataset.game)
// console.log(first.dataset.player)

// let div = document.createElement('div')
// div.innerHTML = '<h1>Hello World!</h>'
// a.append(div)
// a.prepend(div)
// a.before(div)
// a.after(div)
// a.replaceWith(div)

// first.insertAdjacentHTML('beforebegin', '<div class"test">beforebegin</div>')
// first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>')
// first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>')
// first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>')
// first.remove()


// first.class = "text-black red"
     