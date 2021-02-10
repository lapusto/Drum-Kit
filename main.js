 function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!audio) return;
    button.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  window.addEventListener('keydown', playSound);

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));


 