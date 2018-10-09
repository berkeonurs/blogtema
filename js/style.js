
// Parallax
$(document).ready(function(){
    $('.parallax').parallax();
});

// Dropdown
(function($) {
    $(function() {

        $('.dropdown-button').dropdown({
                inDuration: 300,
                outDuration: 225,
                hover: true, // Activate on hover
                belowOrigin: true, // Displays dropdown below the button
                alignment: 'right' // Displays dropdown with edge aligned to the left of button
            }
        );

    }); // End Document Ready
})(jQuery); // End of jQuery name space

//Slider
$(document).ready(function(){
    $('.slider').slider({full_width: true});
    $('.slider').height(700);
    $('.slides').height(670);
});


