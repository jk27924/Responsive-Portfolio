$(document).ready(function () {

// CASE #1
    // 1) Once enter to Portfolio page, it shows all the portfolio app divs
    // 2) And then If user wants to see a specific app right away, rather than finding on by scrolling down, the user can click one of side bar menu.
    // 3) Then only chosen app will show

// CASE #1 - CODE
    // $(".portfolio-selector").click(function() {
    //     $(".portfolio-app").hide();
    //     var id = $(this).attr("data-item");
    //     $("#" + id).show(); 
    // });


// -----------------------------------------------------


// CASE #2
    // 1) Once enter to Portfolio page, the first app div, which is psychic game will show, and all other apps will hide.
    // 2) User can simply use side bar menu to click to see and to find specific app.

// CASE #2 - CODE

    function show(id) {
        $(".portfolio-app").hide();
        $("#" + id).show();
    }
  
    show("psychic");
  
    $(".portfolio-selector").click(function() {
        
        var id = $(this).attr("data-item");
        show(id);
    });

});