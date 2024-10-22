// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar el ícono del menú hamburguesa
  const menuIcon = document.querySelector('.menu-icon');
  
  // Seleccionar el menú de navegación
  const navMenu = document.querySelector('#nav-menu');
  
  // Agregar un evento de click al ícono del menú
  menuIcon.addEventListener('click', function() {
      // Alternar la clase 'active' para mostrar u ocultar el menú
      navMenu.classList.toggle('active');
  });
});

document.getElementById("menu-toggle").addEventListener("click", function() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("active");
});





