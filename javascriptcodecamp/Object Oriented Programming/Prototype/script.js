let a = {
    name: "deepak",
    language: "hindi",
    run: ()=>{
        alert("self running")
    }
}
console.log(a)

let p = {
    run: ()=>{
        alert("Running the code")
    }
}

p.__proto__ = {
    name: "Deepak"
}

a.__proto__ = p;
a.run();
console.log(a.name)