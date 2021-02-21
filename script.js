
const bars = document.querySelector('.fa-bars');
const slide = document.getElementById('slide');

// reveal menu items. rotate bars 90 degrees

bars.addEventListener('click', () => {
    console.log(slide.classList.value)
    if(slide.classList.value === "open") {
        slide.classList.remove("open")
        bars.style.transform = "rotate(180deg)"
    } else {
        slide.classList.add("open");
        bars.style.transform = "rotate(90deg)";
    }
})

// cross-browser compatible smooth scroll

$(document).ready(() => {

function smoothScroll(event) {
        // 2- set prevent default action
        if(this.hash !== "") {
            event.preventDefault();
        // 3- set variable to hold href value
        var hash = this.hash;
        // 4- grab html and body elements and run jQuery animate function
        // 5- set second argument to duration of scroll
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function() {
            window.location.hash = hash;
        });

        }
    }

    // 1- grab all anchors, set event listener, call smoothScroll
    $("a").on('click', smoothScroll)
});
 
