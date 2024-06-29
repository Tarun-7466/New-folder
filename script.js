var active = 3;
let smcircle = document.querySelectorAll(".smcircle");
let sec = document.querySelectorAll(".sec");

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
        geryout();
        gsap.to(this, {
            opacity: 0.6,
            ease: Expo.easeInOut,
            duration: 2
        })
        gsap.to(sec[index], {
            opacity: 1,
            scale: 1.1,
            ease: Expo.easeIn,
            duration: 0.8,
            

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

