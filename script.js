const cards = document.querySelectorAll(".card");
let startY = 0;
let isDragging = false;

cards.forEach((card) => {
  card.addEventListener("mousedown", (e) => {
    isDragging = true;
    startY = e.clientY;
  });

  card.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const currentY = e.clientY;
    const diff = currentY - startY;

    if (diff > 50) {
      rotateCards("down");
      isDragging = false;
    } else if (diff < -50) {
      rotateCards("up");
      isDragging = false;
    }
  });

  card.addEventListener("mouseup", () => {
    isDragging = false;
  });

  card.addEventListener("mouseleave", () => {
    isDragging = false;
  });

  card.addEventListener("touchstart", (e) => {
    isDragging = true;
    startY = e.touches[0].clientY;
  });

  card.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    const currentY = e.touches[0].clientY;
    const diff = currentY - startY;

    if (diff > 50) {
      rotateCards("down");
      isDragging = false;
    } else if (diff < -50) {
      rotateCards("up");
      isDragging = false;
    }
  });

  card.addEventListener("touchend", () => {
    isDragging = false;
  });
});

function rotateCards(direction) {
  const activeIndex = [...cards].findIndex((card) =>
    card.classList.contains("active")
  );

  cards.forEach((card) => card.classList.remove("active", "card-1", "card-3"));

  if (direction === "up") {
    const newActiveIndex = (activeIndex + 1) % cards.length;
    cards[newActiveIndex].classList.add("active");
    cards[(newActiveIndex - 1 + cards.length) % cards.length].classList.add(
      "card-1"
    );
    cards[(newActiveIndex + 1) % cards.length].classList.add("card-3");
  } else if (direction === "down") {
    const newActiveIndex = (activeIndex - 1 + cards.length) % cards.length;
    cards[newActiveIndex].classList.add("active");
    cards[(newActiveIndex - 1 + cards.length) % cards.length].classList.add(
      "card-1"
    );
    cards[(newActiveIndex + 1) % cards.length].classList.add("card-3");
  }
}
