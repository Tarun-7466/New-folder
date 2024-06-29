var active = 3;
let smcircle = document.querySelectorAll(".smcircle");
let sec = document.querySelectorAll(".sec");
let heading = document.querySelector("h3");

gsap.to('#circle', {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 2
})

gsap.to(smcircle[active - 1], {
    opacity: 0.6,
})

smcircle.forEach(function (value, index) {
    value.addEventListener("click", function () {
        gsap.to('#circle', {
            rotate: (3 - (index + 1)) * 10,
        })
        gsap.to('h3', {
            rotate: -(3 - (index + 1)) * 10,
        })
        geryout();
        gsap.to(this, {
            opacity: 1,
            ease: Expo.easeInOut,
            duration: 1
        })
        gsap.to(sec[index], {
            opacity: 1,
            scale: 1.09,
            ease: Expo.easeIn,
            duration: 1,
            

        })
    })
})

function geryout() {
    gsap.to('.smcircle', {
        opacity: 0.2
    })
    gsap.to('.sec', {
        opacity: 0.4
    })
}

