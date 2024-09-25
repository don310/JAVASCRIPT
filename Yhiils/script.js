for(let i=2; i<10; i=i+2){
    console.log("The Numbers are", i);
}

let names = ["Ram", "Shyam", "Mohan", "Rohan", "Riya"];

for(let i=3; i<names.length; i++){
    console.log("The names are", names[i])
}

let index = names.indexOf("Riya");
// console.log(names);
let newlist = names.slice(index, 3)
console.log("The new list is", newlist)