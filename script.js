
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