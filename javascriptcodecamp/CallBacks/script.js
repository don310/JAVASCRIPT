//=--------------->                                 CallBacks Example-1

// function one (call_two){
//     console.log(" Step 1 Complete. Please call step 2");
//     call_two()
// }

// function two (){
//     console.log(" Step 2 ")
// }

// one(two);

// ----------------->                                  CallBack Example-2
// let order = (call_production) => {
//     console.log("Order Placed, Please call Production");
//     call_production();
// }

// let production = () => {
//     console.log("Order received, Starting Production");
// }

// order(production)



let stocks = {
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}

// console.log(stocks.fruits[2]);
let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected`)
        call_production();
    }, 2000)
};

//Callback hell
let production = () => {
    setTimeout(() => {
        console.log("Production has Started")

        setTimeout(()=>{
            console.log("The Fruit has been chopped")

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

                setTimeout(()=>{
                    console.log("The machine was started")

                    setTimeout(()=>{
                        console.log(`icecream was placed on ${stocks.holder[0]}`)
                    }, 2000)

                    setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} was added as toppings`)

                        setTimeout(()=>{
                            console.log("Serve ice cream")
                        }, 2000)
                    }, 3000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 1000)
}

order(0, production)





