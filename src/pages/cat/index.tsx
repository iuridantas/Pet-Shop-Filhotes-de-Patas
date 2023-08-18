import { useEffect, useState } from 'react';
import { Loader } from '../../components/loader';
import { SessionBannerCat } from '../../components/session/sessionProductsForCats/sessionBanner';
import { SessionProductsCats } from '../../components/session/sessionProductsForCats/sessionProductsCats';
import { Container } from './style';

export function ProductsCat() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container aria-label="Página dos produtos que a Filhotes de Patas vende para gato">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SessionBannerCat />
          <SessionProductsCats />
        </>
      )}
    </Container>
  );
}
