const music = document.getElementById("music");

document.body.addEventListener("click", () => {
  if (music.paused) {
    music.play();
  }
});
