import { useEffect, useState } from 'react';
import { BannerSession } from './style';

export function SessionBannerDog() {
  const images = ['/img/cachorro.png'];
  const imagesPhone = ['/img/cachorro_cel.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 600;
      setCurrentImageIndex(0);

      const links = document.querySelectorAll('link[rel="preload"]');
      links.forEach((link) => link.remove());

      const preloadImages = isMobile ? imagesPhone : images;
      preloadImages.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  return (
    <section aria-label="Banner dos produtos a venda para cachorro">
      <BannerSession>
        {(window.innerWidth <= 600 ? imagesPhone : images).map((src, index) => (
          <div
            key={index}
            style={{ display: index === currentImageIndex ? 'block' : 'none' }}
          >
            <img
              src={src}
              alt="Foto do Banner dos produtos a venda para cachorro"
              onLoad={handleImageLoad}
              className={`${imagesLoaded ? '' : 'image-loading'}`}
            />
          </div>
        ))}
      </BannerSession>
    </section>
  );
}
