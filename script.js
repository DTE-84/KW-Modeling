const observerOptions = {
    /* 0.8 means 80% of that 750px box must be visible before 
       the second image slides in. This creates the "delay" you want.
    */
    threshold: 0.8 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-active');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-swap-box').forEach(el => observer.observe(el));