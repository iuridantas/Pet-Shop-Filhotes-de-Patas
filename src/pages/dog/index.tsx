import { useEffect, useState } from 'react';
import { SessionBannerDog } from '../../components/session/sessionProductsForDogs/sessionBanner';
import { SessionProductsDogs } from '../../components/session/sessionProductsForDogs/sessionProductsDogs';
import { Container } from './style';
import { Loader } from '../../components/loader';

export function ProductsDog() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isContentLoaded = sessionStorage.getItem(
      'isContentLoadedProductsDog',
    );

    if (isContentLoaded) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('isContentLoadedProductsDog', 'true');
      }, 2000);
    }
  }, []);

  return (
    <Container aria-label="Página dos produtos que a Filhotes de Patas vende para cachorro">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SessionBannerDog />
          <SessionProductsDogs />
        </>
      )}
    </Container>
  );
}
