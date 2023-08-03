import { useEffect, useState } from 'react';
import { BannerSession } from './style';

export function SessionBannerCat() {
  const images = ['/img/gato.png'];
  const imagesPhone = ['/img/gato_cel.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <section aria-label="Banner dos produtos a venda para gato">
      <BannerSession>
        {(window.innerWidth <= 600 ? imagesPhone : images).map((src, index) => (
          <div
            key={index}
            style={{ display: index === currentImageIndex ? 'block' : 'none' }}
          >
            <img
              src={src}
              alt="Foto do Banner dos produtos a venda para gato"
            />
          </div>
        ))}
      </BannerSession>
    </section>
  );
}
