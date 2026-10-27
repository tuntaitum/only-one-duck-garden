const room = document.querySelector('#room');

window.addEventListener('pointermove', (event) => {
  const x = event.clientX / window.innerWidth - .5;
  const y = event.clientY / window.innerHeight - .5;
  room.style.setProperty('--garden-x', `${x * -18}px`);
  room.style.setProperty('--garden-y', `${y * -12}px`);
  room.style.setProperty('--room-x', `${x * 7}px`);
  room.style.setProperty('--room-y', `${y * 4}px`);
});
