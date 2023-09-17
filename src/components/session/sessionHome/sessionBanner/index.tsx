import { useEffect, useState } from 'react';
import { BannersSession } from './style';

export function SessionBannersHome() {
  const desktopImages = [
    '/img/cachorro.png',
    '/img/banho_tosa.png',
    '/img/venda_filhotes.png',
    '/img/gato.png',
  ];

  const mobileImages = [
    '/img/cachorro_cel.png',
    '/img/banho_tosa_cel.png',
    '/img/venda_filhotes_cel.png',
    '/img/gato_cel.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % desktopImages.length,
      );
    }, 6000);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  const imagesToDisplay = windowWidth <= 1024 ? mobileImages : desktopImages;

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
            {imagesToDisplay.map((src, index) => (
              <div key={index} style={{ flex: `0 0 100%` }}>
                <img
                  src={src}
                  alt={`Foto do banner ${index}`}
                  onLoad={handleImageLoad}
                  className={`${imagesLoaded ? '' : 'image-loading'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </BannersSession>
    </section>
  );
}
