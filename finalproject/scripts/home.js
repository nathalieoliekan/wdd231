document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const cards = Array.from(document.querySelectorAll(".carousel-card"));
    const btnLeft = document.querySelector(".carousel-btn.left");
    const btnRight = document.querySelector(".carousel-btn.right");
  
    let index = 0;
    const totalCards = cards.length;
  
    function updateCarousel() {
      const cardWidth = cards[0].offsetWidth;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  
    btnRight.addEventListener("click", () => {
      index = (index + 1) % totalCards;
      updateCarousel();
    });
  
    btnLeft.addEventListener("click", () => {
      index = (index - 1 + totalCards) % totalCards;
      updateCarousel();
    });
  
    // Update carousel on resize to keep alignment
    window.addEventListener("resize", updateCarousel);
  
    updateCarousel();
  });