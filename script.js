document.addEventListener("DOMContentLoaded", () => {
  // Animación inicial para los botones
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button, index) => {
    setTimeout(() => {
      button.style.opacity = 1;
      button.style.transform = "translateY(0)";
    }, 200 * index);
  });
});
