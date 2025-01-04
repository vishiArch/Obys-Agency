// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

var follower = document.querySelector(".follower")
var SEC = document.querySelector(".secOne")
var ANC = document.querySelectorAll(".anchor")

window.addEventListener("mousemove", function (dets) {
  follower.style.left = dets.x + "px"
  follower.style.top = dets.y + "px"
})

Shery.makeMagnet(".anchor" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".secOne" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
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
    image.style.transition = "all 0.3s ease";  
  });
  elem2.addEventListener("mouseleave", function () {
    image.style.opacity = 0;
    image.style.transition = "all 0.3s ease";
  });
  elem2.addEventListener("mousemove", function(dets){
    image.style.left = dets.x + "px";
    image.style.top = dets.y + "px";
  })
})