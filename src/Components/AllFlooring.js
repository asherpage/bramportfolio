import React from "react";
import "../Assets/Styles/allflooring.css"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import placeholder from "../Assets/Images/bram5.jpg";
import lam from "../Assets/Images/lam.jpg";
import viny from "../Assets/Images/viny.jpg";
import carpet from "../Assets/Images/carp.jpg";
import gal from "../Assets/Images/Gallery/Commercial13.jpg";

const containerVariants = {
  hidden: { opacity: 1 }, // Ensures the container stays visible
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child's animation
    },
  },
};

const flexBoxVariants = {
  hidden: { opacity: 0, x: -50 }, // Start off-screen to the left
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }, // Slide into view
};

export const AllFlooring = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div>
      <div className="flooring-flex">
        <div className="flooring-title">All Flooring</div>
        <div className="flooring-filler">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius cumque
          omnis laudantium, corrupti esse officiis!
        </div>
        <div className="flooring-arrow"></div>
      </div>

      {/* Motion Container */}
      <motion.div
        ref={ref}
        className="flex-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {[
          { img: lam, title: "Laminate Flooring", subtitle: "Starting at $99" },
          { img: viny, title: "Vinyl Flooring", subtitle: "Starting at $198" },
          { img: carpet, title: "Carpet", subtitle: "Starting at $297" },
          { img: gal, title: "View More", subtitle: "Gallery" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex-box"
            variants={flexBoxVariants}
          >
            <img src={item.img} alt={item.title} />
            <div className="overlay">
              <div className="title">{item.title}</div>
              <div className="subtitle-overlay">{item.subtitle}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="about-flex">
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
          <button className="learn-button"><span>Learn More</span></button>
        </div>
      </div>
    </div>
  );
};

export default AllFlooring;
