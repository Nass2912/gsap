// SETTING DEFAULTS
let h = window.innerHeight;
gsap.defaults({ duration: 0.8 })

let t1= gsap.timeline();

t1.to("#freds img", {
    repeat: -1, yoyo: true, ease: "linear", y: `-${h/2}`, stagger: 0.3
})

gsap.to('.para', {
    scrollTrigger:{
        trigger: ".para",
        markers: true,
        scrub: 1,
        start: `top ${h}`,
    },
    duration:5,
    color:"red",
})

gsap.to(".nopara", {
    scrollTrigger: {
        trigger: ".nopara",
        markers: true,
        scrub: 1,
        pin: true
    },
    color: 'blue',
    duration: 5
})

const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".box",
      markers: true,
    }
  });
  t2.to(".box", {yPercent: 350, duration: 3})
  t2.to(".box", {rotation: 360, duration: 3})
  t2.to(".box", {xPercent: 350, duration: 2})