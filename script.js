document.addEventListener("DOMContentLoaded", function () {
  // Form submission
  const form = document.querySelector(".mobile-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = form.querySelector("input").value;

    // Simple validation
    if (email.includes("@") && email.includes(".")) {
      alert(`Thank you! We'll notify you at ${email} when we launch.`);
      form.reset();
    } else {
      alert("Please enter a valid email address.");
    }
  });

  // Create additional bubbles
  const bubblesContainer = document.querySelector(".bubbles");

  function createBubble() {
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    const size = Math.random() * 30 + 10;
    const left = Math.random() * 100;
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 3;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.animationDelay = `${delay}s`;
    bubble.style.opacity = Math.random() * 0.3 + 0.1;

    bubblesContainer.appendChild(bubble);

    // Remove bubble after animation
    setTimeout(() => {
      bubble.remove();
    }, duration * 1000);
  }

  // Create initial bubbles
  for (let i = 0; i < 6; i++) {
    createBubble();
  }

  // Keep creating bubbles
  setInterval(createBubble, 3000);

  // Animate features on scroll
  const features = document.querySelectorAll(
    ".feature-card, .mobile-newsletter"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  features.forEach((element) => {
    element.style.opacity = 0;
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.5s ease";
    observer.observe(element);
  });
});
