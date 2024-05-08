export function initAudioToggle() {
  const audio = new Audio();
  audio.volume = 0.1;

  let isPlaying = false;

  function togglePlay() {
    if (audio.paused) {
      const currentSongPreviewUrl = document.querySelector(
        ".current-song-preview-url",
      );
      if (currentSongPreviewUrl) {
        audio.src =
          currentSongPreviewUrl.getAttribute("data-preview-url") || "";
      }
      audio.play();
      isPlaying = true;
    } else {
      audio.pause();
      isPlaying = false;
    }
    updatePlayButton();
  }

  function updatePlayButton() {
    const playButton = document.querySelector(".play-button");
    if (playButton) {
      playButton.textContent = isPlaying ? "🔉" : "🔇";
    }
  }

  const playButton = document.querySelector(".play-button");
  if (playButton) {
    playButton.addEventListener("click", togglePlay);
  }
}
