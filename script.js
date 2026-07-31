const menuItems = document.querySelectorAll(".menu-item");
const chapters = document.querySelectorAll(".chapter");
const revealBox = document.getElementById("loveReveal");
const revealBtn = document.getElementById("revealLoveBtn");
const popupOverlay = document.getElementById("popupOverlay");
const popupTitle = document.getElementById("popupTitle");
const popupBody = document.getElementById("popupBody");
const closePopupBtn = document.getElementById("closePopupBtn");

const popupMessages = {
  apology: {
    title: "I’m sorry, Aadrika.",
    body: "I was busy and couldn’t wish you properly, but that never changed what you mean to me. You deserve to feel adored, and I’m sorry I let my day get in the way of that.",
  },
  daypass: {
    title: "Your day pass to use me.",
    body: "Whenever life feels heavy, or you just need a little softness, use this pass and call on me. I want to be your safe place, your comfort, and your person in the quiet moments too.",
  },
  promise: {
    title: "My promise to you.",
    body: "I promise to show up with more warmth, more patience, and more care. I want to keep choosing you in the honest, beautiful ways that matter most.",
  },
};

function showChapter(step) {
  menuItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.step === step);
  });

  chapters.forEach((chapter) => {
    chapter.classList.toggle("active", chapter.id === step);
  });

  const selected = popupMessages[step];
  if (selected) {
    popupTitle.textContent = selected.title;
    popupBody.textContent = selected.body;
    popupOverlay.classList.add("show");
  }
}

function createBurstHearts(count = 12) {
  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "burst-heart";
    heart.textContent = "❤";
    heart.style.left = `${50 + Math.random() * 26 - 13}%`;
    heart.style.top = `${50 + Math.random() * 26 - 13}%`;
    heart.style.setProperty("--x", `${Math.random() * 180 - 90}px`);
    heart.style.setProperty("--y", `${Math.random() * 180 - 90}px`);
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1100);
  }
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => showChapter(item.dataset.step));
});

closePopupBtn.addEventListener("click", () => {
  popupOverlay.classList.remove("show");
});

popupOverlay.addEventListener("click", (event) => {
  if (event.target === popupOverlay) {
    popupOverlay.classList.remove("show");
  }
});

revealBtn.addEventListener("click", () => {
  revealBox.classList.add("show");
  createBurstHearts(18);
});
