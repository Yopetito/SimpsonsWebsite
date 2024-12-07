
function showResponsiveMenu() {
    const navMenu = document.getElementById('nav_responsive_menu');
    navMenu.classList.toggle('open');
}

// Fermer menu
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('nav_responsive_menu');
    const burgerMenu = document.getElementById('burger_menu');

    // Verifier si click en dehors du menu
    if (!navMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
        navMenu.classList.remove('open');
    }
});
