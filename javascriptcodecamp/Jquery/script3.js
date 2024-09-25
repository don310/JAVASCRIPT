//    JQuery Effects


// $("img").hide("slow")
// $("img").show("fast")
// $("img").hide(500)
// $("img").show(1500)

// $("h1").hide(500)
// $("h1").show(1500)

// $("h1").slideUp(500)
// $("h1").slideDown(1500)


// $("h1").fadeOut(500)
// $("h1").fadeIn("normal")



// $("h1").toggle(700)
// $("h1").toggle("normal")


// $("h1").hide()
// $("h1").fadeIn(2000).addClass("blue")

$("h1").hide()
$("h1").fadeIn(2000, function(){
    $(this).addClass("blue")
})

$("img").on("click", function(){
    $("h1").stop()
})

$("p").hide(500).delay(1000).show(300)