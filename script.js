document.addEventListener('DOMContentLoaded', () => {


    // Crear el lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = '<span class="lightbox-close">&times;</span><img src="">';
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    // Abrir lightbox
    document.querySelectorAll('.lightbox-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            lightboxImg.src = link.href;
            lightbox.classList.add('active');
        });
    });

    // Cerrar con X
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Cerrar al hacer click fuera
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    const lightbox = document.querySelector('.lightbox.active');
    if (!lightbox) return;

    if (e.target === lightbox || e.target.tagName === 'IMG' || e.target.classList.contains('lightbox-close')) {
      e.preventDefault();
      e.stopImmediatePropagation();
      lightbox.classList.remove('active');
    }
  }, true);
});
