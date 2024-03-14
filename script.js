
// locomotive scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// movement of circle with cursor
window.addEventListener("mousemove", function(dets){
    var circle = document.querySelector("#circle");
    circle.style.transform = `translate(${dets.clientX - 6}px, ${dets.clientY - 6}px)`
})

// gsap animations on hero
var tl = gsap.timeline()
tl.from("#nav", {
    y: -10,
    opacity: 0,
    duration: 1
})

tl.to(".boundingelem", {
    y: 0,
    duration: 1,
    stagger: 0.2
})