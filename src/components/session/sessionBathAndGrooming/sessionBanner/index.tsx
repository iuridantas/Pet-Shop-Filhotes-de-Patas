import { useEffect, useState } from 'react';
import { BannerSession } from './style';

export function SessionBannerBathAndGrooming() {
  const desktopImages = ['/img/banho_tosa.png'];
  const mobileImages = ['/img/banho_tosa_cel.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 600;
      setCurrentImageIndex(0);

      const links = document.querySelectorAll('link[rel="preload"]');
      links.forEach((link) => link.remove());

      const preloadImages = isMobile ? mobileImages : desktopImages;
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

  const isMobile = window.innerWidth <= 600;
  const images = isMobile ? mobileImages : desktopImages;

  return (
    <section aria-label="Banner sobre banho e tosa">
      <BannerSession>
        {images.map((src, index) => (
          <div
            key={index}
            style={{ display: index === currentImageIndex ? 'block' : 'none' }}
          >
            <img
              src={src}
              alt="Foto do Banner sobre banho e tosa"
              onLoad={handleImageLoad}
              className={`${imagesLoaded ? '' : 'image-loading'}`}
            />
          </div>
        ))}
      </BannerSession>
    </section>
  );
}
