document.addEventListener("DOMContentLoaded", () => {
  const petalsContainer = document.querySelector(".petals");
  for (let i = 0; i < 22; i += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${7 + Math.random() * 8}s`;
    petal.style.animationDelay = `${Math.random() * 8}s`;
    petal.style.transform = `rotate(${Math.random() * 180}deg)`;
    petalsContainer.appendChild(petal);
  }

  const surpriseButton = document.querySelector("#surpriseButton");
  const surpriseMessage = document.querySelector("#surpriseMessage");
  surpriseButton.addEventListener("click", () => {
    surpriseMessage.classList.toggle("show");
    surpriseButton.innerHTML = surpriseMessage.classList.contains("show")
      ? 'أحبكِ يا لميس <i class="bi bi-heart-fill"></i>'
      : 'اضغطي للمفاجأة <i class="bi bi-gift"></i>';
  });

  const musicButton = document.querySelector("#musicButton");
  musicButton.addEventListener("click", () => {
    musicButton.classList.toggle("active");
    musicButton.innerHTML = musicButton.classList.contains("active")
      ? '<i class="bi bi-heart-fill"></i> أجمل لحظة'
      : '<i class="bi bi-music-note-beamed"></i> لحظة حب';
  });

  const counters = document.querySelectorAll("[data-count]");
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = Number(entry.target.dataset.count);
      let value = 0;
      const increment = Math.max(1, Math.ceil(target / 45));
      const timer = setInterval(() => {
        value = Math.min(value + increment, target);
        entry.target.textContent = value.toLocaleString("ar-EG");
        if (value === target) clearInterval(timer);
      }, 28);
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  counters.forEach((counter) => observer.observe(counter));
});
