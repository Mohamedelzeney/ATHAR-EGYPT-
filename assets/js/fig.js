function filterCards(category) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// 
// const audio = document.getElementById("myAudio");
// const audioBtn = document.getElementById("audioBtn");
// const icon = audioBtn.querySelector("i");

// audioBtn.addEventListener("click", () => {
//   if (audio.paused) {
//     audio.play();

//     icon.classList.remove("fa-volume-xmark");
//     icon.classList.add("fa-volume-low");
//   } else {
//     audio.pause();

//     icon.classList.remove("fa-volume-low");
//     icon.classList.add("fa-volume-xmark");
//   }
// });


const audioBtns = document.querySelectorAll(".audio-btn");

audioBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const audio = card.querySelector(".card-audio");
    const icon = btn.querySelector("i");

    if (audio.paused) {
      audio.play();

      icon.classList.remove("fa-volume-xmark");
      icon.classList.add("fa-volume-low");
    } else {
      audio.pause();

      icon.classList.remove("fa-volume-low");
      icon.classList.add("fa-volume-xmark");
    }
  });
});