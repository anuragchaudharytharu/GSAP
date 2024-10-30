const main = document.querySelector('#main');
const cursor = document.querySelector('#cursor');
const imageDiv = document.querySelector('#image');

main.addEventListener('mousemove', (dets) => {
  gsap.to(cursor, {
    x: dets.x + 40,
    y: dets.y,
    duration: 0.6,
    ease: 'back.out',
  });
});

imageDiv.addEventListener('mouseenter', () => {
  cursor.innerHTML = 'View More';
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: '#ffffff8a',
  });
});

imageDiv.addEventListener('mouseleave', () => {
  cursor.innerHTML = '';
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: '#fff',
  });
});
