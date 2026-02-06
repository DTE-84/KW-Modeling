const blueprintObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // When the card enters the screen (scrolling down or up)
      entry.target.classList.add('is-active');
    } else {
      // When the card leaves the screen (fades back to original state)
      entry.target.classList.remove('is-active');
    }
  });
}, { 
  threshold: 0.6 // Adjust this: higher means you have to scroll further to trigger the swap
});

document.querySelectorAll('.blueprint-card').forEach(card => {
  blueprintObserver.observe(card);
});