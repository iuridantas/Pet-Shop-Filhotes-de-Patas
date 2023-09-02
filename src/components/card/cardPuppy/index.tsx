import { useEffect, useState } from 'react';
import { CardSession } from './style';
import puppyDogs from '../../json/puppy/puppy.json';

export function CardDogsInformation() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = (imageUrls: string[]) => {
      const loadedImages = new Set<string>();
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          loadedImages.add(url);
          if (loadedImages.size === imageUrls.length) {
            setImagesLoaded(true);
          }
        };
      });
    };

    const imageUrls = puppyDogs.map((dogsInformation) => dogsInformation.photo);

    preloadImages(imageUrls);
  }, []);

  return (
    <section aria-label="card sobre os cachorros disponível para venda">
      {puppyDogs.map((dogsInformation, index) => (
        <CardSession key={index}>
          <h2>{dogsInformation.name}</h2>
          <img
            src={dogsInformation.photo}
            alt={dogsInformation.name}
            className={`${imagesLoaded ? '' : 'image-loading'}`}
          />
          <p>{dogsInformation.description}</p>
        </CardSession>
      ))}
    </section>
  );
}
