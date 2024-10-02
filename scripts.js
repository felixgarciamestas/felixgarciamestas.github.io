document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.getAttribute('data-tab');

            // Remover la clase activa de todos los enlaces
            tabLinks.forEach(link => link.classList.remove('active'));

            // Añadir la clase activa al enlace seleccionado
            this.classList.add('active');

            // Ocultar todas las pestañas de contenido
            tabContents.forEach(content => content.classList.remove('active'));

            // Mostrar la pestaña seleccionada
            document.getElementById(targetTab).classList.add('active');
        });
    });
});
//Habiliades vista prev
const skillsList = document.querySelectorAll('.skills-list li');
const video = document.getElementById('skill-video');
const videoSource = document.getElementById('video-source');
const defaultVideo = "web.mp4";  // Video predeterminado

let isHovering = false;

skillsList.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        isHovering = true;  // Indica que el cursor está sobre una habilidad
        const videoSrc = skill.getAttribute('data-video');
        videoSource.src = videoSrc;
        video.load();
        video.play();  // Reproduce el video de la habilidad seleccionada
    });

    skill.addEventListener('mouseleave', () => {
        isHovering = false;  // Indica que el cursor ha salido de la habilidad
        setTimeout(() => {
            if (!isHovering) {  // Si no está sobre ninguna habilidad, vuelve al video predeterminado
                videoSource.src = defaultVideo;
                video.load();
                video.play();
            }
        }, 200);  // Retraso para evitar parpadeo si rápidamente se pasa por encima de otra habilidad
    });
});