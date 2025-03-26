import { useRef, useEffect } from "react";
import "./Gallery.css";

const imageCount = 10;

const Gallery: React.FC = () => {
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  // Generate image URLs
  const images = [];
  const startingIndex = Math.floor(Math.random() * 1000);

  for (let i = 0; i < imageCount; i++) {
    const index = startingIndex + i;
    images.push(
      <img
        key={index}
        src={`https://picsum.photos/300/200?random=${index}`}
        alt={`Random Image ${index}`}
      />
    );
  }

  // Ensure unique keys in duplicated array
  const imagesToRender = [
    ...images,
    ...images.map((img, i) => <img {...img.props} key={`${img.key}-copy`} />),
  ];

  useEffect(() => {
    const container = imageContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, offsetWidth, scrollWidth } = container;
      const halfWidth = scrollWidth / 2;

      if (scrollLeft > halfWidth) {
        // Temporarily disable smooth scrolling
        container.style.scrollBehavior = "auto";
        container.scrollLeft -= halfWidth;

        // Restore smooth scrolling after reset
        setTimeout(() => {
          container.style.scrollBehavior = "smooth";
        }, 100);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="gallery-container">
      <div ref={imageContainerRef} className="images-scroll-container">
        {imagesToRender}
      </div>
    </div>
  );
};

export default Gallery;
