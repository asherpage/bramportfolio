import React, { useState } from "react";
import "../Assets/Styles/start.css"
import { motion, AnimatePresence } from "framer-motion";
import first from "../Assets/Images/bram4.jpg";
import second from "../Assets/Images/bram3.jpg";
import nike from "../Assets/Images/Nike1.jpg"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const images = [nike, first, second];

export const Start = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        stiffness: 200,
        damping: 30,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    }),
  };

  return (
    <div className="home-flex">
      <div className="home-left">
        <h1 className="home-title">
          <span className="highlights">Bram Flooring,</span> Quality Flooring
          Solutions Crafted for You
        </h1>
        <p className="home-filler">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ad
          iure atque aspernatur error dicta, ratione pariatur obcaecati
          quibusdam a.
        </p>
        <button className="home-button"><span>Learn More</span></button>
      </div>
      <div className="home-right">
        <div className="image-container">
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="Bram Flooring"
              className="home-image"
              variants={variants}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
            />
          </AnimatePresence>
        </div>
        <div className="arrows">
          <div className="left-circle" onClick={prevImage}>
            <FaArrowCircleLeft />
          </div>
          <div className="right-circle" onClick={nextImage}>
            <FaArrowCircleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
