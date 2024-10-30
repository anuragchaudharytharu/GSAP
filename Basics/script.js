// .to() ==> from initial position to final position
// .from() ===> from final position to initail position

/*
  // TO
  gsap.to('#box1', {
    x: 1200,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: 'blue',
    borderRadius: '50%',
    scale: 1 / 2,
  });

  // FROM
  gsap.from('#box2', {
    x: 1200,
    duration: 2,
    delay: 1,
    scale: 1 / 2,
  });
*/

/*
  // STAGGER
  // gsap.from('h2', {
  //   opacity: 0, //invisible to visible because we are using .from() mthod
  //   duration: 2,
  //   y: 20,
  //   delay: 1,
  //   stagger: -1, //animate element with same tag/id/class one by one. if stagger value is positive like 1/2, 2, 1, 0.5 ===> It animates from starting from first element to last element. When stagger value is negative like -1 ===> It animates starting from last element to first element
  // });
*/

/*
  // REPEAT & YOYO
  // gsap.to('#box', {
  //   x: 1200,
  //   duration: 1,
  //   delay: 1,
  //   rotate: 360,
  //   repeat: -1, // If repeat: 1 ===> repeats the animation one more time after the first animation is completed i.e animation happens 2 times == 1st time is the original and 2nd time is the repeat value animation. To make animation repeat infinite times, we need to put repeat value 0f -1
  //   yoyo: true, //This property generates yoyo like bounce affect on the animation of box here
  // });
*/

/*
// Before Timeline use
// we have to calculate animation sequence time everytime for each element. This consumes too much time and is irritating. To fix this we have to use timeline feature of gsap

  gsap.to('#box1', {
    x: 1200,
    duration: 1.5,
    delay: 1,
    rotate: 360,
  });

  gsap.to('#box2', {
    x: 1200,
    backgroundColor: 'yellow',
    duration: 1.5,
    delay: 2.5, //we want box2 to animate after box1 animation completes. So total time to wait for box2 to start animation is sum of duration and delay od box1 i.e 1.5+1 = 2.5 delay for box2
  });

  gsap.to('#box3', {
    x: 1200,
    scale: 0.5,
    borderRadius: '50%',
    duration: 1.5,
    delay: 4, //we need to animate box3 after box2 animation completes, So same as we did for box2 delay, we will add delay and duration of box2 to find the delay value for box3
  })
*/

/*
// After Timeline use for box1, box2, box3
const tl = gsap.timeline();
tl.to('#box1', {
  x: 1200,
  duration: 1.5,
  delay: 1,
  rotate: 360,
});

tl.to('#box2', {
  x: 1200,
  duration: 1.5,
  backgroundColor: 'yellow',
});

tl.to('#box3', {
  x: 1200,
  duration: 1.5,
  borderRadius: '50%',
  scale: 1 / 2,
});
*/

// After Timeline use for navbar
const tl = gsap.timeline();

tl.from('h2', {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from('h4', {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
});

tl.from('h1', {
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale: 0.2,
});
