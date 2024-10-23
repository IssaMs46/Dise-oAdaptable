// Seleccionamos el icono del menú y el propio menú
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Agregamos un event listener para detectar el click en el icono del menú
menuToggle.addEventListener('click', () => {
    // Alternamos la clase 'active' en el menú para mostrarlo u ocultarlo
    navMenu.classList.toggle('active');
});

function sendWhatsAppMessage() {
  // Define el número de teléfono
  const phoneNumber = '+573008995356';
  // Define el mensaje que quieres enviar
  const message = 'Hola TalentDisplay! estoy interesado en adquirir un producto';
  // Crea la URL de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  // Abre WhatsApp en una nueva pestaña
  window.open(whatsappUrl, '_blank');
}




const container = document.getElementById('effect-container');

// Crear un destello
function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  container.appendChild(sparkle);

  // Eliminar el destello después de la animación
  setTimeout(() => {
    sparkle.remove();
  }, 1000);
}

// Manejar el movimiento del mouse
let mouseMoving = false;
let lastX, lastY;

document.addEventListener('mousemove', (e) => {
  if (!mouseMoving) {
    mouseMoving = true;
    requestAnimationFrame(() => {
      createSparkle(e.pageX, e.pageY);
      mouseMoving = false;
    });
  }
});

// Crear efecto de explosión al hacer clic
document.addEventListener('click', (e) => {
  const explosion = document.createElement('div');
  explosion.classList.add('sparkle', 'click-effect');
  explosion.style.left = `${e.pageX}px`;
  explosion.style.top = `${e.pageY}px`;
  container.appendChild(explosion);

  // Eliminar la explosión después de la animación
  setTimeout(() => {
    explosion.remove();
  }, 500);
});




