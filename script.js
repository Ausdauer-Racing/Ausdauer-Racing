const galleryImages = [
    {
        filename: "24_Heures-Mutaz_Dahdal-1.png",
        mapName: "24 Heures",
        photographer: "Mutaz Dahdal"
    },
    {
        filename: "24_Heures-Mutaz_Dahdal-2.png",
        mapName: "24 Heures",
        photographer: "Mutaz Dahdal"
    },
    {
        filename: "Daytona-Mutaz_Dahdal-1.png",
        mapName: "Daytona",
        photographer: "Mutaz Dahdal"
    },
    {
        filename: "Daytona-Mutaz_Dahdal-2.png",
        mapName: "Daytona",
        photographer: "Mutaz Dahdal"
    },
    {
        filename: "Daytona-Mutaz_Dahdal-3.png",
        mapName: "Daytona",
        photographer: "Mutaz Dahdal"
    },
    {
        filename: "Daytona-Mutaz_Dahdal-4.png",
        mapName: "Daytona",
        photographer: "Mutaz Dahdal"
    },
    {
        filename: "Daytona-Mutaz_Dahdal-5.png",
        mapName: "Daytona",
        photographer: "Mutaz Dahdal"
    },
    {
        filename: "Daytona-Mutaz_Dahdal-6.png",
        mapName: "Daytona",
        photographer: "Mutaz Dahdal"
    },
    {
        filename: "Daytona-Mutaz_Dahdal-7.png",
        mapName: "Daytona",
        photographer: "Mutaz Dahdal"
    }
];

function renderGallery() {
    const galleryContainer = document.getElementById('gallery');
    galleryContainer.innerHTML = ''; 

    galleryImages.forEach((image, index) => {
        const figure = document.createElement('figure');
        figure.className = 'gallery-item';
        figure.id = `item-0${index + 1}`;
        figure.style.animationDelay = `${(index % 6 + 1) * 0.1}s`; 
        
        figure.onclick = () => openLightbox(`assets/${image.filename}`, `${image.mapName} - ${image.photographer}`);

        figure.innerHTML = `
            <img src="assets/${image.filename}" alt="${image.mapName} capture by ${image.photographer}" loading="lazy">
            <div class="overlay">
                <h3>${image.mapName}</h3>
                <p>${image.photographer}</p>
            </div>
        `;

        galleryContainer.appendChild(figure);
    });
}

function openLightbox(src, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
    setTimeout(() => {
        document.getElementById('lightbox-img').src = '';
    }, 500);
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const lightbox = document.getElementById('lightbox');
        if (lightbox.classList.contains('active')) {
            closeLightbox();
        }
    }
});

document.getElementById('lightbox').addEventListener('click', function(event) {
    if (event.target === this) {
        closeLightbox();
    }
});

document.addEventListener('DOMContentLoaded', renderGallery);
