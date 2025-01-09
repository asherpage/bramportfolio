import React, { useState } from "react";
import "../Assets/Styles/gallery.css";

const Gallery = () => {
  // Set initial filter state to "commercial"
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

  // Determine images to display based on the selected filter
  const displayedImages =
    filter === "commercial"
      ? commercialImages
      : filter === "residential"
      ? residentialImages
      : [...commercialImages, ...residentialImages];

  return (
    <div className="gallery-container">
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
    <img src={image} alt={`Gallery Item ${index + 1}`} />
  </div>
))}
      </div>
    </div>
  );
};

export default Gallery;
