function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init();
var cur = document.querySelector(".cursor");
var body = document.querySelector("body")
document.addEventListener("mousemove",function(e){
cur.style.left = e.x
+ "px"
cur.style.top = e.y+ "px"
})
var flag = true;
document.querySelector("#menu").addEventListener("click",function(e){
 if(flag == true){
  document.querySelector("#line1").style.rotate="22deg";
  document.querySelector("#line2").style.rotate="-22deg";
  document.querySelector("#full-scr").style.scale = 1;
  document.querySelector("#full-scr").style.top = 0;
  flag = false;
 }
 else{
  document.querySelector("#full-scr").style.top = '-100%';
  document.querySelector("#line1").style.rotate="0deg";
  document.querySelector("#line2").style.rotate="0deg";
  flag = true;
 }
})
document.querySelector("button").addEventListener("click",function(){

  document.querySelector("#screen").style.scale=1;
  gsap.from("#container h1",{
    stagger:0.1,
    y:100,
    opacity:0,
    
  
  })
  gsap.from("#container2 h1",{
    stagger:0.1,
    y:100,
    opacity:0,
    delay:1,
    rotate:"8deg"
  
  })
})
document.querySelector("#nav h5").addEventListener("click",function(e){
  document.querySelector("#screen").style.scale=0;
})
gsap.to(".overlay",{
  stagger:0.2,
  bottom:0,
  duration:1,
  delay:1
})
gsap.to("#front",{
  top:"-200%",
  delay:2,
  duration:2,
})
gsap.from("#page1 h1",{
  opacity:0,
  y:200,
  delay:3,
})
gsap.from("#page1 h2",{
  opacity:0,
  y:200,
  delay:3.2,
})

gsap.to("#page2 img",{
  width:"105%",
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    // markers:true,
    start:"top 10%",
    end:"top -40%",
    scrub:true,
    pin:true
  }
})
gsap.from("#page3 h1",{
  opacity:0,
  rotate:8,
  y:100,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#page3 h1",
    scroller:"#main",
    // markers:true,
    start:"top 55%",
    end:"top 35%",
    scrub:4

  }
})
gsap.from("#page4 h1",{
  scale:2,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 0%",
    end:"top -20%",
    // markers:true,
    scrub:2,
    pin:true,
  }
})
gsap.from("#page4 h2",{
  scale:.6,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 0%",
    end:"top -20%",
    // markers:true,
    scrub:2,
    pin:true,
  }
})
gsap.to("#loader",{
  bottom:0,
  delay:2,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top -15%",
    end:"top -25%",
    scrub:3,
    pin:true,
    // markers:true,
  }
})
gsap.to("#loader img",{
  height:"110vh",
  y:100,
  duration:3,
  scale:1,
  opacity:1,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 0%",
    end:"top -20%",
    pin:true,
    scrub:4,
  }
})
gsap.from("#screen #container h1",{
  y:100,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#screen",
    scroller:"#main",
    start:"top 10%",
    end:"top 0%",
    scrub:4,
  }
})
gsap.to("#page9 h1",{
  scale:5,
  filter:"blur(30px)",
  scrollTrigger:{
    trigger:"#page9",
    scroller:"#main",
    start:"top 0%",
    end:"top -20%",
    pin:true,
    scrub:4,
  }
})

gsap.to("#last-scr",{
  opacity:1,
  duration:2,
  zIndex:9991,
  delay:5,
  scrollTrigger:{
    trigger:"#page9",
    scroller:"#main",
    start:"top 0%",
    end:"top -20%",
    scrub:4,
    
    
  }
})




