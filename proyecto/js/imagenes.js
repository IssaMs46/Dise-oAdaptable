
    const images = document.querySelectorAll('.image-hover');

    images.forEach(image => {
        image.addEventListener('mousemove', (e) => {
            const rect = image.getBoundingClientRect();
            const imageCenterX = rect.left + rect.width / 2;
            const imageCenterY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - imageCenterX) / 10; // Divide para un movimiento más suave
            const deltaY = (e.clientY - imageCenterY) / 10; // Divide para un movimiento más suave

            image.style.transform = `translate(${deltaX}px, ${deltaY}px)`; // Aplica el desplazamiento
        });

        image.addEventListener('mouseleave', () => {
            image.style.transform = 'translate(0px, 0px)'; // Restablece el desplazamiento cuando el mouse sale
        });
    });




