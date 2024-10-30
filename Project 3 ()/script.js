const h1 = document.querySelector('h1');
const h1Text = h1.textContent;

const breakTheText = () => {
  // console.log(h1Text.split('e')); //['D', '', 'iumTh', 'D', 'v']

  const splittedText = h1Text.split('');
  // console.log(splittedText); //['D', 'e', 'e', 'i', 'u', 'm', ]

  let clutter = '';

  /*
    splittedText.forEach((e, index) => {
      // console.log('Hello'); // Hello printed 6 times as output
      clutter += `<span class='a' style='display: inline-block'>${e}</span>`;

      // console.log(e, index); d 0 1 2 3 4 5
    });
  */

  const halfValue = Math.floor(splittedText.length / 2);

  splittedText.forEach((e, index) => {
    if (index < halfValue) {
      // console.log(e);
      clutter += `<span class='a' style='display: inline-block'>${e}</span>`;
    } else {
      // console.log('lol', e);
      clutter += `<span class='b' style='display: inline-block'>${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
};

breakTheText();

/*
  gsap.from('h1 span', {
    y: 50, //span is an inline element. This is why it will not work when we use y: 100 as it menas transform:translateY(100px). So to make it work we have to change it into block or inline-block element which we did in the above line 12
    duration: 0.8,
    delay: 0.5,
    opacity: 0,
    // stagger: -0.15, //animated from right to left when negative stagger value
    stagger: 0.15, //animated from left to right when positive stagger value
  });
*/

gsap.from('h1 .a', {
  y: 80,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
  opacity: 0,
});

gsap.from('h1 .b', {
  y: 80,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
  opacity: 0,
});
