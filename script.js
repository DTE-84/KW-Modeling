const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-active");
      } else {
        // Removing this makes it fade back to the sketch when you scroll away
        entry.target.classList.remove("is-active");
      }
    });
  },
  { threshold: 0.6 },
);

document.querySelectorAll(".scroll-swap-box").forEach((box) => {
  observer.observe(box);
});

const blueprintObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-active");
      } else {
        entry.target.classList.remove("is-active");
      }
    });
  },
  { threshold: 0.6 },
);

document.querySelectorAll(".blueprint-card").forEach((card) => {
  blueprintObserver.observe(card);
});


const swapObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // When the item is 40% visible in the viewport
    if (entry.isIntersecting) {
      entry.target.classList.add('is-swapping');
    } else {
      entry.target.classList.remove('is-swapping');
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('[data-swap-trigger]').forEach(item => {
  swapObserver.observe(item);
});

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  const nav = document.querySelector(".archive-nav");

  if (currentScroll > lastScroll && currentScroll > 100) {
    nav.style.transform = "translateY(-100%)"; // Hide
  } else {
    nav.style.transform = "translateY(0)"; // Show
  }
  lastScroll = currentScroll;
});