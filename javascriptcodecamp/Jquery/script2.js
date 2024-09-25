// Jquery Events

// $(function (){
//     $("p").hover(function() {
//         console.log("You Entered!")
//     },
//     function(){
//         console.log("You Left!")
//     })
// })

//doubleclick, mouseenter, mouseleave, mousedown. mouseup

//form Events : focus, blur, change


// $(function (){
//     $("p").hover(function() {
//         console.log("You Entered!")
//     },
//     function(){
//             console.log("You Left!")
//         })
//     $("input").change(function() {
//         console.log("You did Something!");
//     });
// });


// $(function (){
//     $("p").on("click mouseenter", function() {
//         console.log("You Clicked a paragraph!")
//         })
//     $("input").change(function() {
//         console.log("You did Something!");
//     });
// });




$(function (){
    $("p").on({
        "click" : function() { console.log("Clicked!") },
        "mouseover" : function() { console.log("hovered!") }
        })

        $("p").off("click");
        
    $("input").change(function() {
        console.log("You did Something!");
    });
});
