
const canvas = document.getElementById('background-circles');
const ctx = canvas.getContext('2d');
let width, height;
let circles = [];

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < 50; i++) {
  circles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 20 + 5,
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5,
    alpha: 0.7
  });
}

function drawCircles() {
  ctx.clearRect(0, 0, width, height);
  for (let circle of circles) {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(76, 175, 80, ${circle.alpha})`;
    ctx.fill();
    circle.x += circle.speedX;
    circle.y += circle.speedY;
    if (circle.x < 0 || circle.x > width) circle.speedX *= -1;
    if (circle.y < 0 || circle.y > height) circle.speedY *= -1;
  }
}

let animationActive = true;
function animate() {
  if (animationActive) drawCircles();
  requestAnimationFrame(animate);
}
animate();

document.addEventListener('scroll', () => animationActive = false);
document.getElementById('commandsBtn').addEventListener('click', () => animationActive = false);
document.getElementById('settingsBtn').addEventListener('click', () => animationActive = false);
document.getElementById('inviteSmall').addEventListener('click', () => animationActive = false);
document.querySelector('.logo').addEventListener('click', () => animationActive = true);

const commandsSection = document.getElementById("commands");
const settingsSection = document.getElementById("settings");

document.getElementById("commandsBtn").addEventListener("click", () => {
  animationActive = false;
  settingsSection.classList.add("hidden");
  commandsSection.classList.toggle("hidden");
});

document.getElementById("settingsBtn").addEventListener("click", () => {
  animationActive = false;
  commandsSection.classList.add("hidden");
  settingsSection.classList.toggle("hidden");
});
