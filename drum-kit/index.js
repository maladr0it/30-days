const handleKeydown = event => {
  const drum = document.querySelector(`[data-key="${event.key}"]`);
  if (drum) {
    const audio = drum.querySelector("audio");
    audio.currentTime = 0;
    audio.play();

    // remove then add class
    drum.classList.remove("playing");
    // force a reflow
    drum.offsetWidth;

    drum.classList.add("playing");
    drum.addEventListener("transitionend", () => {
      drum.classList.remove("playing");
    });
  }
};

document.addEventListener("keydown", handleKeydown);
