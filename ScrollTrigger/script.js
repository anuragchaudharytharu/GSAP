/*

  gsap.from('#page3 #box', {
    scale: 0,
    duration: 2,
    rotate: 360,
    // scrollTrigger: '#page2 #box',
    scrollTrigger: {
      trigger: '#page3 #box', //animation starting point
      scroller: 'body',
      markers: true,
      start: 'top 60%',
    },
  });

*/

/*

  gsap.from('#page1 #box', {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,
  });

  gsap.from('#page2 h1', {
    opacity: 0,
    x: 500,
    duration: 2,
    scrollTrigger: {
      trigger: '#page2 h1',
      scroller: 'body',
      // markers: true,
      start: 'top 50%',
    },
  });

  gsap.from('#page2 h2', {
    opacity: 0,
    x: -500,
    duration: 2,
    scrollTrigger: {
      trigger: '#page2 h2',
      scroller: 'body',
      // markers: true,
      start: 'top 50%',
    },
  });

  gsap.from('#page3 #box', {
    scale: 0,
    opacity: 0,
    duration: 1,
    rotate: 720,
    scrollTrigger: {
      trigger: '#page3 #box', //animation starting point
      scroller: 'body',
      markers: true,
      start: 'top 60%',
      end: 'top 30%',
      scrub: 2, //scrub can be of boolean value or number between 1 and 5
      pin: true,
    },
  });

*/

gsap.to('#page5 h1', {
  transform: 'translateX(-200%)',
  scrollTrigger: {
    trigger: '#page5',
    scroller: 'body',
    markers: true,
    start: 'top 0%',
    end: 'top -150%',
    scrub: 2,
    pin: true,
  },
});
