import { useEffect, useState } from 'react';
import { Loader } from '../../components/loader';
import { SessionBannerSalePuppy } from '../../components/session/sessionSalePuppy/sessionBanner';
import { SessionDogs } from '../../components/session/sessionSalePuppy/sessionDogs';
import { SessionInformationPuppy } from '../../components/session/sessionSalePuppy/sessionInformationPuppy';
import { Container } from './style';

export function SalePuppy() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isContentLoaded = sessionStorage.getItem('isContentLoaded');

    if (isContentLoaded) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('isContentLoaded', 'true');
      }, 2000);
    }
  }, []);

  return (
    <Container aria-label="Página dos filhotes que a Filhotes de Patas tem disponível para venda">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SessionBannerSalePuppy />
          <SessionInformationPuppy />
          <SessionDogs />
        </>
      )}
    </Container>
  );
}
