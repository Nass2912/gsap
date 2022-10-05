// SETTING DEFAULTS
gsap.defaults({ duration: 1 })

let t1= gsap.timeline();

//USING STAGGER AND DURATION
// gsap.to('h1', { stagger: 1, x: 400, color: 'white', rotation: 360 }).to(".fred", { x: 700, rotation: 360, ease: "bounce" }).to(".pink", { x: 700, rotation: 360, repeat: -1, yoyo: true, ease: "linear" });

t1.to("#freds img", {
    repeat: 1, yoyo: true, ease: "linear", y: -100
})
t1.to("#bill img", {
    repeat:1, yoyo:true, ease:"linear", x:100
})

gsap.to('.para', {
    scrollTrigger:{
        trigger: ".para",
        markers: true,
        scrub: 1,
    },
    opacity:1,
    duration:5,
    color:"red"
})

document.addEventListener("scroll", () => {
    t1.reverse();
})