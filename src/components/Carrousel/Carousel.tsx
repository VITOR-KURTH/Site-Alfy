import React, { useState } from 'react';
import styles from './Carousel.module.css';

const Carousel: React.FC = () => {
  const slides = [
    "./Computador.png",
    "./Computador.png",
    "./Computador.png",
  ]; 
  const NUM_SLIDES = slides.length;
  const [currSlide, setCurrSlide] = useState(0);

  const slideTrack = () => {
    return {
      transform: `translateX(${-currSlide * 100}%)`,
      transition: 'transform 0.5s ease-in-out',
    };
  };

  const nextSlide = () => {
    setCurrSlide((prevSlide) => (prevSlide + 1) % NUM_SLIDES);
  };

  const prevSlide = () => {
    setCurrSlide((prevSlide) => (prevSlide - 1 + NUM_SLIDES) % NUM_SLIDES);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.track} style={slideTrack()}>
        {slides.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>
      <button className={styles.prev} onClick={prevSlide}>◀</button>
      <button className={styles.next} onClick={nextSlide}>▶</button>
    </div>
  );
};

export default Carousel;