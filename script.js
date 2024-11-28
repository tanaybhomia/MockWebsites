// Optional: Add subtle scroll animation
document.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight * 0.8) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});
