import { useState, useEffect } from 'react';
import '../styles/RotatingImages.css';

interface RotatingImageProps {
  images: string[];
  alt: string;
  interval?: number;
}

function RotatingImage({ images, alt, interval = 3000 }: RotatingImageProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || paused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, paused]);

  return (
    <div
      className="rotating-image"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${alt} ${index + 1}`}
          className={`rotating-image__item ${
            index === current ? 'rotating-image__item--active' : ''
          }`}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      ))}

      {images.length > 1 && (
        <div className="rotating-image__dots">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`rotating-image__dot ${
                index === current ? 'rotating-image__dot--active' : ''
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default RotatingImage;