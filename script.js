

var vid = document.querySelector("video");

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        start: "30% 20%",
        end: "200% 30%",
        scrub: 2,
        onUpdate: function (self) {

            if (self.progress > 0 && self.progress < 1) {
                
                vid.play();
            }
            else if (self.progress === 0) {
                vid.pause()
                vid.currentTime = 0
            }
        }

    }
});


tl.to(".page1 .vid", {
    duration: 4,
    width: "100vw",
    height: "100vh",
    top: 0

})
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "30% 20%",
        end: "100% 30%",
        scrub: 2,
    }
})
    tl2.to(".page1 .vid", {
        delay: 1,
        duration: 2,
        ease:"expoScale(0.5,7,none)",
        top: "-100%",
        
    })

var button = document.querySelectorAll(".colors")

button.forEach(function(buttons,aoo) {
    buttons.addEventListener("click",function(){
       gsap.to(".images",{
        transform : `translate(-${aoo*20}%)`
       })
       console.log((aoo+1)*20)
    })
});

var left =document.querySelector("#button-left")
left.addEventListener("click",function(){
   gsap.to(".cards",{
   transform:"translate(0%)"
   })
})
var right =document.querySelector("#button-right")
right.addEventListener("click",function(){
   gsap.to(".cards",{
    transform:"translate(-35%)",
    ease:"power4.out"
    
   })
})



