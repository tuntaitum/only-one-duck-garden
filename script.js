const garden = document.querySelector('#garden');
const scene = document.querySelector('.scene');

const movers = [
  { node: document.querySelector('.butterfly-path'), x: 23, y: 54, minX: 12, maxX: 45, minY: 38, maxY: 67, duration: 8200 },
  { node: document.querySelector('.dragonfly-path'), x: 70, y: 34, minX: 52, maxX: 85, minY: 23, maxY: 50, duration: 6900 },
  { node: document.querySelector('.duck-path'), x: 65, y: 67, minX: 51, maxX: 80, minY: 60, maxY: 75, duration: 14500 },
];

function moveBeing(being) {
  const nextX = being.minX + Math.random() * (being.maxX - being.minX);
  const nextY = being.minY + Math.random() * (being.maxY - being.minY);
  const drift = being.node.classList.contains('duck-path') ? 1 : 0.96 + Math.random() * .1;
  being.node.animate([
    { left: `${being.x}%`, top: `${being.y}%`, transform: `translate(-50%, -50%) scale(${drift})` },
    { left: `${nextX}%`, top: `${nextY}%`, transform: `translate(-50%, -50%) scale(${drift})` },
  ], { duration: being.duration + Math.random() * 2500, easing: 'cubic-bezier(.45, 0, .25, 1)', fill: 'forwards' }).onfinish = () => {
    being.x = nextX;
    being.y = nextY;
    moveBeing(being);
  };
}

movers.forEach(moveBeing);

window.addEventListener('pointermove', (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;
  garden.style.setProperty('--pointer-x', `${event.clientX}px`);
  garden.style.setProperty('--pointer-y', `${event.clientY}px`);
  garden.style.setProperty('--scene-x', `${(x - .5) * -14}px`);
  garden.style.setProperty('--scene-y', `${(y - .5) * -10}px`);
});

document.querySelectorAll('.being').forEach((being) => {
  being.addEventListener('pointerenter', () => scene.style.setProperty('filter', 'saturate(1.08) brightness(1.03)'));
  being.addEventListener('pointerleave', () => scene.style.removeProperty('filter'));
});
