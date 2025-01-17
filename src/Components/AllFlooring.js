import React from "react";
import "../Assets/Styles/allflooring.css";
import lam from "../Assets/Images/lam.jpg";
import viny from "../Assets/Images/viny.jpg";
import carpet from "../Assets/Images/carp.jpg";
import gal from "../Assets/Images/Gallery/Commercial13.jpg";
export const AllFlooring = () => {
  return (
    <div>
      <div className="flooring-flex">
        <div className="flooring-title">All Flooring</div>
        <div className="flooring-filler">
          Whether you need durable commercial carpets, luxury vinyl, or custom hardwood installations, we deliver expertise and craftsmanship tailored to your needs.
        </div>
        <div className="flooring-arrow"></div>
      </div>

      {/* Flex Container with Basic Image Tags */}
      <div className="flex-container">
        <div className="flex-box">
          <img src={gal} alt="View More" />
          <a href="#gallery">
          <div className="overlay">
            <div className="title">Tile</div>
            <div className="subtitle-overlay">Shaw | Daltile | Soho</div>
          </div>
          </a>
        </div>
        <div className="flex-box">
          <img src={viny} alt="Vinyl Flooring" />
          <div className="overlay">
            <div className="title">Vinyl Flooring</div>
            <div className="subtitle-overlay">Philadelphia | Aladin | Soho</div>
          </div>
        </div>
        <div className="flex-box">
          <img src={carpet} alt="Carpet" />
          <div className="overlay">
            <div className="title">Carpet</div>
            <div className="subtitle-overlay">Philadelphia | Aladin | Engineered Floors</div>
          </div>
        </div>
        
        <div className="flex-box">
          <img src={lam} alt="Laminate Flooring" />
          <div className="overlay">
            <div className="title">Laminate Flooring</div>
            <div className="subtitle-overlay">Mohawk | Shaw</div>
          </div>
        </div>
      </div>

      {/* <div className="about-flex">
        <div className="images">
          <img src={placeholder} alt="About BRAM" />
        </div>
        <div className="words-flex">
          <h1>About BRAM</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
            porro beatae? Unde atque quasi dolores cum nemo, alias consequatur
            perferendis quia et quis voluptatibus possimus recusandae, officia
            soluta debitis, magni deleniti similique suscipit eligendi sed
            corrupti culpa molestiae dicta. Reprehenderit nesciunt ad aliquid
            magni ipsam assumenda culpa inventore nihil nobis.
          </p>
          <h1>More</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur rem commodi minus delectus molestias a incidunt rerum
            quis magnam reprehenderit officiis repellat iste expedita, modi
            molestiae. Iure fugiat hic cum, nesciunt itaque, quisquam impedit id
            velit deserunt qui vel dignissimos. Eos ullam, atque culpa eaque
            quae facilis cumque, voluptatibus natus similique sunt voluptatum!
            Rerum minus praesentium quos impedit porro natus.
          </p>
          <a href="#gallery"><button className="learn-button"><span>View Gallery</span></button></a> 
        </div>
      </div> */}
    </div>
  );
};

export default AllFlooring;
