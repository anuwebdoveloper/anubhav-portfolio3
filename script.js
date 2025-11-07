// Particle animation
const particles = document.querySelector(".particles");
for (let i = 0; i < 50; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.style.left = Math.random() * 100 + "vw";
  dot.style.top = Math.random() * 100 + "vh";
  dot.style.animationDuration = 5 + Math.random() * 10 + "s";
  particles.appendChild(dot);
}