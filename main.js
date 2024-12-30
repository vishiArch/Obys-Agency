// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

var follower = document.querySelector(".mscFoll")
var SEC = document.querySelector(".secOne")

window.addEventListener("mousemove", function(dets) {
    follower.style.left = dets.x + "px"
    follower.style.top = dets.y + "px"
})

Shery.makeMagnet("#anchor" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".secOne" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

SEC.addEventListener("mouseenter", function(){
  follower.style.height = "50px";
  follower.style.width = "50px";
  follower.style.transition = "all 0.3s ease"
})
SEC.addEventListener("mouseleave", function(){
  follower.style.height = "38px";
  follower.style.width = "38px";
  follower.style.transition = "all 0s ease"
})

ANC.addEventListener("mouseenter", function(){
  follower.style.height = "55px";
  follower.style.width = "55px";
  follower.style.transition = "all 0.3s ease"
})
ANC.addEventListener("mouseleave", function(){
  follower.style.height = "38px";
  follower.style.width = "38px";
  follower.style.transition = "all 0s ease"
})
