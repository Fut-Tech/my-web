console.log("✅ Script loaded successfully");


// ✅ Contact Form Submission
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
    form.reset();
  });
}

// ✅ Theme Toggle
const toggleSwitch = document.getElementById("theme-switch");
if (toggleSwitch) {
  if (localStorage.getItem("futtech-theme") === "light") {
    document.body.classList.add("light-mode");
    toggleSwitch.checked = true;
  }

  toggleSwitch.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
    const mode = document.body.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem("futtech-theme", mode);
  });
}

// ✅ Project Filter Buttons
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    projectCards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// ✅ Testimonial Slider
const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle("active", i === index);
  });
}

if (testimonials.length > 0) {
  showTestimonial(currentTestimonial);
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000); // 5 seconds
}

// ✅ Parallax Effect
window.addEventListener("scroll", () => {
  const parallax = document.querySelector(".parallax-bg");
  if (parallax) {
    const scrolled = window.scrollY;
    parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});
