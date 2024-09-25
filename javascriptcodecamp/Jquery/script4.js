// Jquery Animate

// animate( properties [, duration] [, easing] [, complete])

// animate(properties, options)
$("#go").click(function() {
    $("#block").animate({
        opacity: 0.5,
        marginLeft: "+=50px",
        height: "400px"
    }, 3000, "linear", function() {
        $(this).after("<div>Animation Complete</div>");
    });
});