let animationActive = true;

function navigateTo(page) {
  animationActive = false;
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(page + "Page").classList.remove("hidden");
}

document.getElementById("homeBtn").addEventListener("click", () => {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById("homePage").classList.remove("hidden");
  animationActive = true;
});

// Fondo animado
const canvas = document.getElementById('background-circles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circles = Array.from({length: 50}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 20 + 10,
  dx: (Math.random() - 0.5) * 0.5,
  dy: (Math.random() - 0.5) * 0.5
}));

function drawCircles() {
  if (!animationActive) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let c of circles) {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,255,0,0.7)";
    ctx.fill();
    c.x += c.dx;
    c.y += c.dy;
    if (c.x + c.r > canvas.width || c.x - c.r < 0) c.dx *= -1;
    if (c.y + c.r > canvas.height || c.y - c.r < 0) c.dy *= -1;
  }
  requestAnimationFrame(drawCircles);
}
drawCircles();
