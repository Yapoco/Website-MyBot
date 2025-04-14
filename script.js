document.addEventListener("DOMContentLoaded", () => {
    // Funcionalidad de navegación dinámica
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetSection = document.getElementById(link.getAttribute("data-section"));

            // Ocultar todas las secciones
            document.querySelectorAll(".section").forEach(section => {
                section.classList.add("hidden");
            });

            // Mostrar la sección deseada
            targetSection.classList.remove("hidden");
        });
    });
    
    // Inicialmente mostrar la sección de inicio
    document.getElementById("home").classList.remove("hidden");
});
