// ---------- mobile menu ----------
const toggle_btn = document.getElementById("toggle-btn");
const toggle_menu = document.getElementById("toggle-menu");
const curtain = document.getElementById("curtain");
const menu_links = toggle_menu.querySelectorAll("a");

function toggleMenu() {
  toggle_menu.classList.toggle("show-menu");
  curtain.classList.toggle("show-curtain");
}

toggle_btn.addEventListener("click", toggleMenu);
curtain.addEventListener("click", toggleMenu);
menu_links.forEach((link) => {
  link.addEventListener("click", () => {
    if (toggle_menu.classList.contains("show-menu")) toggleMenu();
  });
});

// ---------- nav background on scroll ----------
const siteNav = document.getElementById("site-nav");

function updateNavBackground() {
  if (window.scrollY > 40) {
    siteNav.classList.add("nav-scrolled");
  } else {
    siteNav.classList.remove("nav-scrolled");
  }
}

window.addEventListener("scroll", updateNavBackground, { passive: true });
updateNavBackground();

// ---------- active link highlighting ----------
const sections = document.querySelectorAll("section[id], header[id]");
const navAnchors = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navAnchors.forEach((a) => {
          a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
);

sections.forEach((section) => sectionObserver.observe(section));

// ---------- scroll reveal ----------
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

revealEls.forEach((el) => revealObserver.observe(el));

// ---------- contact form (mailto, no backend) ----------
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    window.location.href = `mailto:Elhamhossaini9900@gmail.com?subject=${subject}&body=${body}`;
  });
}
