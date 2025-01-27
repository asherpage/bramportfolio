import React, { useState, useRef, useEffect } from "react";
import "../Assets/Styles/gallery.css";

const Gallery = () => {
  const [filter, setFilter] = useState("commercial");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Generate image arrays for Commercial and Residential
  const commercialImages = Array.from({ length: 15 }, (_, index) =>
    require(`../Assets/Images/Gallery/Commercial${index + 1}.jpg`)
  );

  const residentialImages = Array.from({ length: 15 }, (_, index) =>
    require(`../Assets/Images/Gallery/Residential${index + 1}.jpg`)
  );

  const displayedImages =
    filter === "commercial"
      ? commercialImages
      : filter === "residential"
      ? residentialImages
      : [...commercialImages, ...residentialImages];

  // Lazy loading hook
  const useLazyLoad = (options) => {
    const imgRefs = useRef([]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src; // Replace placeholder with actual source
              observer.unobserve(img); // Stop observing once loaded
            }
          });
        },
        { threshold: 0.1, ...options }
      );

      imgRefs.current.forEach((img) => {
        if (img) observer.observe(img);
      });

      return () => observer.disconnect(); // Clean up observer
    }, [options]);

    return imgRefs;
  };

  const imgRefs = useLazyLoad();

  return (
    <div className="gallery-container" id="gallery">
      <h3 className="subtitle">Our Work</h3>
      <h1 className="heading">Gallery</h1>

      {/* Radio Buttons */}
      <div className="checkbox-group">
        <label>
          <input
            type="radio"
            name="filter"
            value="all"
            checked={filter === "all"}
            onChange={handleFilterChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="residential"
            checked={filter === "residential"}
            onChange={handleFilterChange}
          />
          Residential
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="commercial"
            checked={filter === "commercial"}
            onChange={handleFilterChange}
          />
          Commercial
        </label>
      </div>

      {/* Image Grid */}
      <div className="image-grid">
        {displayedImages.map((image, index) => (
          <div className="image-box" key={index}>
            {/* Placeholder src and data-src for lazy loading */}
            <img
              data-src={image}
              src="placeholder.jpg" // Fallback placeholder image
              alt={`Gallery Item ${index + 1}`}
              ref={(el) => (imgRefs.current[index] = el)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
