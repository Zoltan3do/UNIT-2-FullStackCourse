const apiKey = 'CrwPxeXONYaRH8cvtm1xJrUWLL336IhTMUXU5rgInbbnpFjtMEO6t6iB';
const imageContainer = document.getElementById('image-container');
const searchInput = document.getElementById('search-input');
const loadImagesBtn = document.getElementById('load-images');
const loadSecondaryImagesBtn = document.getElementById('load-secondary-images');
const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
const modalImg = document.getElementById('modal-img');
const modalArtist = document.getElementById('modal-artist');
const modalArtistLink = document.getElementById('modal-artist-link');

async function fetchImages(query) {
    try {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
            headers: { 'Authorization': apiKey }
        })
        if (!response.ok) {
            throw new Error(`HTTP error ! Status: ${response.status}`);
        }

        const data = await response.json();

        const images = data.photos;
        imageContainer.innerHTML = '';
        images.forEach(img => {
            const card = document.createElement('div');
            card.className = 'col-md-4';
            card.innerHTML = `
          <div class="card mb-4 shadow-sm">
            <img src="${img.src.medium}" class="bd-placeholder-img card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${img.alt}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary view-btn" data-id="${img.id}" data-src="${img.src.original}" data-artist="${img.photographer}" data-artist-link="${img.photographer_url}">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary hide-btn" data-id="${img.id}">Hide</button>
                </div>
                <small class="text-muted">${img.id}</small>
              </div>
            </div>
          </div>`;
            imageContainer.appendChild(card);
        });

        document.querySelectorAll('.view-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const { src, artist, artistLink } = e.target.dataset;
                modalImg.src = src;
                modalImg.style.width = "100%";
                modalArtist.innerHTML = `Artist: <a href="${artistLink}" target="_blank">${artist}</a>`;
                updateModalBackground(src);
                imageModal.show();
            });
        });

        document.querySelectorAll('.hide-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.target.closest('.card').style.opacity = 0.3
            });
        });

    } catch (error) {
        console.log("Error fetching images: ", error);
    }

}

function updateModalBackground(imgUrl) {
    const colorThief = new ColorThief();
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imgUrl;

    img.onload = function () {
        const dominantColor = colorThief.getColor(img);
        document.querySelector('.modal-content').style.backgroundColor = `rgb(${dominantColor[0]},${dominantColor[1]},${dominantColor[2]},0.9)`;
    };
}

loadImagesBtn.addEventListener('click', () => fetchImages(searchInput.value || 'nature'));
loadSecondaryImagesBtn.addEventListener('click', () => fetchImages(searchInput.value + ' abstract' || "secondary"));

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        fetchImages(searchInput.value);
    }
});