document.addEventListener("DOMContentLoaded", function() {
    var bebida = document.querySelector('.bebida');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                bebida.classList.add('show');
            }
        });
    });

    observer.observe(bebida); // Observar la imagen de la bebida
});
