/*
const dulay = {};
gsap.from("h1", {
  y: 30,
  duration: 2,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
});

gsap.to("#box", {
  x: 800,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: 3,
  // repeat: -1,
  yoyo: true,
});

gsap.to("#box", {
  x: 1000,
  duration: 2,
  delay: 1,
});
gsap.to("#box2", {
  x: 1000,
  duration: 2,
  delay: 3,
  backgroundColor: "yellow",
});
gsap.to("#box3", {
  x: 1000,
  duration: 2,
  delay: 5,
  backgroundColor: "red",
});


const tl = gsap.timeline();

tl.to("#box", {
  x: 1000,
  duration: 2,
  delay: 1,
});

tl.to("#box2", {
  x: 1000,
  duration: 2,
  backgroundColor: "yellow",
  });

  tl.to("#box3", {
    x: 1000,
  duration: 2,
  backgroundColor: "red",
});

*/

const tl = gsap.timeline();
tl.from("h1", {
  y: -25,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});
tl.from("li", {
  y: -25,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
