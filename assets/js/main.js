const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1000,
  reset: true,
});

/* SCROLL HOME */
sr.reveal(".home-title", {});
sr.reveal(".btn", { delay: 200 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".home-social-icon", { interval: 200 });

/* SCROLL ABOUT */
sr.reveal(".about-img", { delay: 100 });
sr.reveal(".about-data", { delay: 200 });

/* SCROLL CONTACT */
sr.reveal(".contact-input", { interval: 200 });
