const sections = [
  // "hero",
  "about",
  "activities",
  "events",
  "gallery",
  "join",
  "resources",
  "faq",
  "footer",
];

sections.forEach((section) => {
  fetch(`./sections/${section}.html`)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(section).innerHTML = html;

      if (section === "gallery") {
        loadGalleryImages("n1");
        loadGalleryImages("n2");
        loadVideos();
      }
    })
    .catch((error) => console.log(`Error loading ${section}:`, error));
});

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("data-target");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - document.querySelector("nav").offsetHeight, // Adjust for navbar height
      behavior: "smooth",
    });
  });
});
