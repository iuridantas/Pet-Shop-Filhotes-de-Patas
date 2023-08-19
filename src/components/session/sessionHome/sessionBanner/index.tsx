import { useEffect, useState } from 'react';
import { BannersSession } from './style';

export function SessionBannersHome() {
  const images = [
    '/img/cachorro.png',
    '/img/banho_tosa.png',
    '/img/venda_filhotes.png',
    '/img/gato.png',
  ];

  const imagesPhone = [
    '/img/cachorro_cel.png',
    '/img/banho_tosa_cel.png',
    '/img/venda_filhotes_cel.png',
    '/img/gato_cel.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section aria-label="Banner sobre venda de filhotes e sobre banho e tosa">
      <BannersSession>
        <div className="carousel-container">
          <div
            className="carousel-content"
            style={{
              transform: `translateX(${-currentImageIndex * 100}%)`,
              display: 'flex',
              transition: 'transform 1s ease-in-out',
            }}
          >
            {(window.innerWidth <= 600 ? imagesPhone : images).map(
              (src, index) => (
                <div key={index} style={{ flex: `0 0 100%` }}>
                  <img src={src} alt={`Foto do banner ${index}`} />
                </div>
              ),
            )}
          </div>
        </div>
      </BannersSession>
    </section>
  );
}
