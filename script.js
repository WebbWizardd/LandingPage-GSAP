var tl = gsap.timeline()

tl.from(".gsapTB h1,h2,p",{
    y:-100,
    opacity:0,
    delay:0.3,
    duration:0.5,
    stagger:0.2
})

tl.from(".gsapBT h1",{
    y:100,
    opacity:0,
    delay:0.3,
    duration:0.5,
    stagger:0.2
})
tl.from("img",{
    scale:0,
    duration:0.5,
    stagger:0.2
})

tl.from("h5",{
    scale:0,
    duration:0.5,
})

tl.to("h5",{
    y:30,
    duration:0.5,
    yoyo:true,
    repeat:-1
})
