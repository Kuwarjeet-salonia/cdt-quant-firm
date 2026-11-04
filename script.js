const navbar = document.querySelector("#navbar");
const revealElements = document.querySelectorAll(".reveal");

const updateNavbar = () => {
  navbar.classList.toggle("is-scrolled", window.scrollY > 16);
};

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.14 }
);

revealElements.forEach((element) => revealObserver.observe(element));
window.addEventListener("scroll", updateNavbar, { passive: true });
updateNavbar();
