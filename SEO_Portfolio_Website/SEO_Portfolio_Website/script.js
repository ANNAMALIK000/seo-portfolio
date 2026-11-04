// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });
}


// ===============================
// Close Mobile Menu After Clicking
// ===============================

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");
  });
});


// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});


// ===============================
// Current Year
// ===============================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ===============================
// Contact Form → Gmail
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const receiver = "anaehtesham16@gmail.com";

    const emailBody =
      "Hello Anna,\n\n" +
      message +
      "\n\n--------------------\n" +
      "Name: " + name +
      "\nEmail: " + email;

    const gmailURL =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      "&to=" + encodeURIComponent(receiver) +
      "&su=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(emailBody);

    window.open(gmailURL, "_blank");
  });
}