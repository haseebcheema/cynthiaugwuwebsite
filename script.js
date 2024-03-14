
// locomotive scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// a global variable
var timeout;

// scaling/unscaling the circle with cursor
function scaleCricle(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
        
        // cancel the execution of setTimeout function when cursor moves again
        clearTimeout(timeout);
        
        // calculate the difference between cuurent and previous values, map that difference to the max and min scaling value we have set
        // then resultant value will be our scaling values
        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
    
        // set the current values as previous value of cursor
        xprev = dets.clientX;
        yprev = dets.clientY;
        
        // calling the function
        movingCircle(xscale, yscale);

        // scale the value to its original size
        timeout = setTimeout(() => {
            var cursor = window.querySelector("#cursor");
            cursor.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    })
}

// movement of circle with cursor
function movingCircle(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
        var circle = document.querySelector("#circle");
        circle.style.transform = `translate(${dets.clientX - 6}px, ${dets.clientY - 6}px) scale(${xscale}, ${yscale})`;
    });
}

// gsap animations on hero
function firstPageAnim(){
    var tl = gsap.timeline()
    tl.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1
    });
    
    tl.to(".boundingelem", {
        y: 0,
        duration: 1,
        stagger: 0.2
    });
    
    tl.from("#herofooter",{
        y: 10,
        opacity: 0,
        duration: 1
    });
}

//calling functions
scaleCricle();
movingCircle();
firstPageAnim();