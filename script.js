// script.js update
const observerOptions = {
  // 0.7 means 70% of the container must be on screen
  // before the second photo slides in.
  threshold: 0.7,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-active");
    }
  });
}, observerOptions);

document
  .querySelectorAll(".scroll-swap-box")
  .forEach((el) => observer.observe(el));
