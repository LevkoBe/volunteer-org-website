function loadGalleryImages(selectorId) {
  console.log("Loading images for selectorId: ", selectorId);
  const container = document.querySelector(
    `#${selectorId}.images-scroll-container`
  );

  let imagesHTML = "";
  let startingIndex = Math.random();
  for (let i = startingIndex; i < startingIndex + 10; i++) {
    imagesHTML += `<img src="https://picsum.photos/300/200?random=${i}" alt="Random Image ${i}" />`;
  }

  container.innerHTML = imagesHTML + imagesHTML;

  const randomScroll = Math.random() * (container.scrollWidth / 2);
  container.scrollLeft = randomScroll;

  function checkScroll() {
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft -= container.scrollWidth / 2;
      container.style.scrollBehavior = "smooth";
    }
    requestAnimationFrame(checkScroll);
  }

  function autoScroll() {
    container.scrollLeft += 1;
    requestAnimationFrame(autoScroll);
  }

  autoScroll();

  checkScroll();
}

function loadVideos() {
  const videoContainer = document.getElementById("video-gallery");
  if (!videoContainer) return;

  const videoLinks = [
    "https://www.youtube.com/embed/2szQhR4oZtA",
    "https://www.youtube.com/embed/ymcflrj_rRc",
    "https://www.youtube.com/embed/jbV1TDZQAFc",
  ];

  let videoHTML = "";

  videoLinks.forEach((link) => {
    videoHTML += `<div class="video-item">
                      <iframe src="${link}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                  </div>`;
  });

  videoContainer.innerHTML = videoHTML;
}
