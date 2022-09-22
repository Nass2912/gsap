gsap.defaults({ duration: 2 })
// gsap.to('h1', { stagger: 1, x: 400, color: 'white', rotation: 360 })
gsap.to(".fred", { x: 700, rotation: 360, ease: "bounce" });
gsap.to(".pink", { x: 700, rotation: 360, repeat: -1, yoyo: true, ease: "linear" });