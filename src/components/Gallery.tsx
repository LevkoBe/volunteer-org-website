import { useRef, useEffect } from "react";
import "./Gallery.css";

const imageCount = 10;

const Gallery: React.FC = () => {
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

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

  const imagesToRender = [
    ...images,
    ...images.map((img) => <img {...img.props} key={`${img.key}-copy`} />),
  ];

  useEffect(() => {
    const container = imageContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth } = container;
      const quarterWidth = scrollWidth / 4;

      if (scrollLeft < quarterWidth) {
        container.style.scrollBehavior = "auto";
        container.scrollLeft += 2 * quarterWidth;

        setTimeout(() => {
          container.style.scrollBehavior = "smooth";
        }, 100);
      } else if (scrollLeft > 3 * quarterWidth) {
        container.style.scrollBehavior = "auto";
        container.scrollLeft -= 2 * quarterWidth;

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
