
function showResponsiveMenu() {
    const navMenu = document.getElementById('nav_responsive_menu');
    navMenu.classList.toggle('open');
}

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('nav_responsive_menu');
    const burgerMenu = document.getElementById('burger_menu');

    // Verifica si el clic fue fuera del menú y del icono burger
    if (!navMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
        navMenu.classList.remove('open');
    }
});