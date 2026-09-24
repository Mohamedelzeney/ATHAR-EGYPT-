
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// end header

// start back to top
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// end back to 

const heroVideo = document.querySelector(".hero-video");
const soundBtn = document.getElementById("soundBtn");

soundBtn.addEventListener("click", () => {
  heroVideo.muted = !heroVideo.muted;

  if (heroVideo.muted) {
    soundBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    soundBtn.setAttribute("aria-label", "Unmute video");
  } else {
    soundBtn.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
    soundBtn.setAttribute("aria-label", "Mute video");
  }
});

