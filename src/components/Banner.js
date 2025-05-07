import React from 'react';
import cahino1 from '../assets/png/cashino1.png';
import cahino2 from '../assets/png/cashino2.png';
import cahino4 from '../assets/png/cashino4.png';

export const Banner = () => {
  const images = [cahino1, cahino2, cahino4];

  return (
    <div id="carouselExampleIndicators" className="carousel slide w-full" data-bs-ride="carousel">
      
      <div className="carousel-indicators">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={i}
            className={i === 0 ? 'active' : ''}
            aria-current={i === 0 ? 'true' : undefined}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            style={{ backgroundColor: '#4caf50' }}
          >
            <img
              src={img}
              alt={`Cahino ${index + 1}`}
              className="d-block w-100 object-contain"
              style={{ height: '500px', objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

