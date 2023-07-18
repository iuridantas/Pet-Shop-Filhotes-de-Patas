import { useEffect, useState } from 'react';
import { BannersSession } from './style';

export function SessionBanners() {
  const images = ['/img/banho_tosa.png', '/img/venda_filhotes.png'];
  const imagesPhone = [
    '/img/banho_tosa_cel.png',
    '/img/venda_filhotes_cel.png',
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
    <section aria-label="Banner sobre venda de filhotes e sobre banho e tosa">
      <BannersSession>
        {(window.innerWidth <= 600 ? imagesPhone : images).map((src, index) => (
          <div
            key={index}
            style={{ display: index === currentImageIndex ? 'block' : 'none' }}
          >
            <img src={src} alt="Foto dos banners" />
          </div>
        ))}
      </BannersSession>
    </section>
  );
}
