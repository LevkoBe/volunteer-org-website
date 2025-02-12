// Function to load random gallery images
function loadGalleryImages() {
  const galleryContainer = document.getElementById("gallery-images");
  if (!galleryContainer) return;

  const apiUrl = "https://picsum.photos/300/200"; // Random image API (Lorem Picsum)
  let imagesHTML = "";

  for (let i = 0; i < 6; i++) {
    // Fetch 6 random images
    imagesHTML += `<div class="gallery-item">
                     <a href="#" class="lightbox-trigger">
                       <img src="${apiUrl}?random=${i}" alt="Random Image ${
      i + 1
    }">
                     </a>
                     <div class="description">
                       <p>Description for Image ${i + 1}</p>
                     </div>
                   </div>`;
  }

  galleryContainer.innerHTML = imagesHTML;
}

const videoLinks = [
  "https://www.youtube.com/embed/2szQhR4oZtA",
  "https://www.youtube.com/embed/ymcflrj_rRc",
  "https://www.youtube.com/embed/jbV1TDZQAFc",
];

// Function to load embedded videos dynamically
function loadVideos() {
  const videoContainer = document.getElementById("video-gallery");
  if (!videoContainer) return;

  let videoHTML = "";

  // Loop through the array and create iframe embeds
  videoLinks.forEach((link) => {
    videoHTML += `<div class="video-item">
                    <div class="embed-container">
                      <iframe src="${link}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                  </div>`;
  });

  videoContainer.innerHTML = videoHTML;
}

// Load images and videos when the page is ready
document.addEventListener("DOMContentLoaded", () => {
  loadGalleryImages();
  loadVideos();
});
