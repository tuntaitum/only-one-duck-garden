const flora = document.querySelector('.flora');
const palette = ['#e5c66e', '#f3b785', '#eb8f93', '#d4dc94', '#e8d5ad'];
for (let i = 0; i < 98; i += 1) {
  const stem = document.createElement('span'); const bloom = document.createElement('b');
  stem.className = 'stem'; stem.style.left = `${Math.random() * 104 - 2}%`;
  stem.style.setProperty('--h', `${45 + Math.random() * 150}px`);
  stem.style.setProperty('--tilt', `${-13 + Math.random() * 26}deg`);
  stem.style.setProperty('--o', `${0.46 + Math.random() * 0.45}`);
  stem.style.setProperty('--flower', palette[Math.floor(Math.random() * palette.length)]);
  stem.append(bloom); flora.append(stem);
}
const fireflies = document.querySelector('.fireflies');
for (let i = 0; i < 22; i += 1) { const light = document.createElement('i'); light.className = 'firefly'; light.style.left = `${4 + Math.random() * 92}%`; light.style.top = `${25 + Math.random() * 55}%`; light.style.animationDelay = `${-Math.random() * 4}s`; fireflies.append(light); }
const movers = [
  { element: document.querySelector('.butterfly'), x: 24, y: 40, speed: 7000 },
  { element: document.querySelector('.dragonfly'), x: 69, y: 35, speed: 9000 },
  { element: document.querySelector('.duck'), x: 74, y: 66, speed: 11500 },
];
function wander(mover) {
  const x = 7 + Math.random() * 85;
  const y = mover.element.classList.contains('duck') ? 58 + Math.random() * 14 : 27 + Math.random() * 34;
  mover.element.animate([{ left: `${mover.x}%`, top: `${mover.y}%`, transform: 'translate(-50%, -50%)' }, { left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }], { duration: mover.speed + Math.random() * 3500, easing: 'ease-in-out', fill: 'forwards' }).onfinish = () => { mover.x = x; mover.y = y; wander(mover); };
}
movers.forEach(wander);
