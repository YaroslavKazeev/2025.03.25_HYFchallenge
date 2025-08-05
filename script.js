document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Video scroll playback
const video = document.getElementById("driftVideo");

// Handle video visibility
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Only play if the video hasn't ended
        if (!video.ended) {
          video.play();
        }
      } else {
        video.pause();
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(video);

// Prevent video from playing again after it ends
video.addEventListener("ended", function () {
  video.currentTime = video.duration;
});
