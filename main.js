const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
});

var follower = document.querySelector(".follower")
var SEC = document.querySelector(".secOne")
var ANC = document.querySelectorAll(".anchor")

window.addEventListener("mousemove", function (dets) {
  follower.style.left = dets.x + "px";
  follower.style.top = dets.y + "px";
})

Shery.makeMagnet(".anchor" /* Element to target.*/, {
  //Parameters are optional.
  duration: 1,
});
Shery.makeMagnet(".secOne" /* Element to target.*/, {
  //Parameters are optional.
  duration: 1,
});

SEC.addEventListener("mouseenter", function () {
  follower.style.height = "50px";
  follower.style.width = "50px";
  follower.style.transition = "all 0.3s ease"
})
SEC.addEventListener("mouseleave", function () {
  follower.style.height = "38px";
  follower.style.width = "38px";
  follower.style.transition = "all 0s ease"
})

ANC.forEach(function (elem) {
  elem.addEventListener("mouseover", function () {
    follower.style.height = "55px";
    follower.style.width = "55px";
    follower.style.transition = "all 0.3s ease"
  })
  elem.addEventListener("mouseout", function () {
    follower.style.height = "38px";
    follower.style.width = "38px";
    follower.style.transition = "all 0s ease"
  })
});

var image = document.querySelector(".imgFirst")
var heading = document.querySelectorAll(".imgBox")

heading.forEach(function (elem2) {
  elem2.addEventListener("mouseenter", function (dets) {
    image.style.opacity = 1;
    image.style.transition = "all 0.2s ease";
  });
  elem2.addEventListener("mouseleave", function () {
    image.style.opacity = 0;
    image.style.transition = "all 0.2s ease";
  });
  elem2.addEventListener("mousemove", function (dets) {
    image.style.left = dets.x + "px";
    image.style.top = dets.y + "px";
  })
})

Shery.imageEffect(".imgContainer", {
  style: 6,
  gooey: true,
  config: { "noiseDetail": { "value": 12.21, "range": [0, 100] }, "distortionAmount": { "value": 4.35, "range": [0, 10] }, "scale": { "value": 15.27, "range": [0, 100] }, "speed": { "value": 0.78, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7158123699640628 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.99, "range": [0, 10] }, "metaball": { "value": 0.41, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }
})
Shery.imageEffect(".imgContainer2", {
  style: 6,
  gooey: true,
  config: { "noiseDetail": { "value": 12.21, "range": [0, 100] }, "distortionAmount": { "value": 4.35, "range": [0, 10] }, "scale": { "value": 15.27, "range": [0, 100] }, "speed": { "value": 0.78, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7158123699640628 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.99, "range": [0, 10] }, "metaball": { "value": 0.41, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }
})

var para = document.querySelector(".paraOne")
document.querySelector(".goDown").addEventListener("mouseenter", function () {
  para.style.opacity = 1
  para.style.transition = "all 0.2s ease"
  para.innerHTML = "We ar thrilled to have you on board.<br>We hope you enjoy the projects"
})
document.querySelector(".goDown").addEventListener("mouseleave", function () {
  para.style.opacity = 0
  para.innerHTML = ""
})


gsap.to(".text", {
  xPercent: -100,
  duration: 20,
  repeat: -1,
  ease: "none"
})
gsap.to(".text2", {
  xPercent: 100,
  duration: 20,
  repeat: -1,
  ease: "none"
})
gsap.to(".text3", {
  xPercent: -100,
  duration: 20,
  repeat: -1,
  ease: "none"
})
gsap.to(".text4", {
  xPercent: 100,
  duration: 20,
  repeat: -1,
  ease: "none"
})