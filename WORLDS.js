// 1. Mostrar/Ocultar Descripción de cada sección
document.getElementById("toggle-legend").addEventListener("click", function() {
    const description = document.getElementById("description-legend");
    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
});

// 2. Efecto de transición suave para mostrar/ocultar
document.getElementById("toggle-legend").addEventListener("click", function() {
    const description = document.getElementById("description-legend");
    if (description.style.opacity === "0") {
        description.style.opacity = "1";
        description.style.display = "block";
    } else {
        description.style.opacity = "0";
        setTimeout(() => { description.style.display = "none"; }, 500); // Duración de la transición
    }
});

// 3. Reproducir videos al hacer clic en los títulos de las canciones
document.querySelectorAll("h3").forEach(function(title) {
    title.addEventListener("click", function() {
        const iframe = this.nextElementSibling.querySelector("iframe");
        iframe.src += "&autoplay=1"; // Activa autoplay agregando a la URL
    });
});

// 4. Cambiar tema (Modo oscuro / Modo claro)
document.getElementById("theme-toggle").addEventListener("click", function() {
    const body = document.body;
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    }
});

// 5. Desplazamiento suave entre secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
