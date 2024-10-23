document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.querySelector('.carousel-track');
    
    let isTouching = false;
    let startX = 0;
    let scrollLeft = 0;
    let momentumID;

    // Evento para el desplazamiento horizontal con la rueda del mouse
    carouselTrack.addEventListener('wheel', (event) => {
        event.preventDefault();
        carouselTrack.scrollLeft += event.deltaY * 1.5;  // Ajustar la velocidad de desplazamiento
    });

    // Eventos para desplazamiento táctil (pantallas táctiles)
    carouselTrack.addEventListener('touchstart', (event) => {
        isTouching = true;
        startX = event.touches[0].pageX - carouselTrack.offsetLeft;
        scrollLeft = carouselTrack.scrollLeft;
        cancelMomentum();  // Detener cualquier momentum previo
    });

    carouselTrack.addEventListener('touchmove', (event) => {
        if (!isTouching) return;
        const x = event.touches[0].pageX - carouselTrack.offsetLeft;
        const walk = (x - startX) * 2;  // Ajustar la velocidad del deslizamiento
        carouselTrack.scrollLeft = scrollLeft - walk;
    });

    carouselTrack.addEventListener('touchend', () => {
        isTouching = false;
        applyMomentum();  // Aplicar la inercia cuando el usuario suelta el dedo
    });

    // Inercia del scroll (momentum)
    function applyMomentum() {
        let currentSpeed = 150;  // Velocidad inicial del momentum, ajustable
        const deceleration = 0.1;  // Factor de desaceleración, ajustable

        function momentum() {
            if (Math.abs(currentSpeed) < 0.1) {
                cancelMomentum();
                return;
            }

            carouselTrack.scrollLeft += currentSpeed;
            currentSpeed *= deceleration;

            momentumID = requestAnimationFrame(momentum);  // Continuar el scroll hasta detenerse
        }
        momentum();
    }

    function cancelMomentum() {
        cancelAnimationFrame(momentumID);
    }

    
});

