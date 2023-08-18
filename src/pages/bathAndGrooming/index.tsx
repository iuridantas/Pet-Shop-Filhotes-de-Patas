import { useEffect, useState } from 'react';
import { SessionBannerBathAndGrooming } from '../../components/session/sessionBathAndGrooming/sessionBanner';
import { SessionBathSteps } from '../../components/session/sessionBathAndGrooming/sessionBathSteps';
import { SessionHygienePet } from '../../components/session/sessionBathAndGrooming/sessionHygienePet';
import { SessionScheduling } from '../../components/session/sessionBathAndGrooming/sessionScheduling';
import { Container } from './style';
import { Loader } from '../../components/loader';

export function BathAndGrooming() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isContentLoaded = sessionStorage.getItem(
      'isContentLoadedBathAndGrooming',
    );

    if (isContentLoaded) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('isContentLoadedBathAndGrooming', 'true');
      }, 2000);
    }
  }, []);

  return (
    <Container aria-label="Página onde explica sobre o banho e tosa na Filhotes de Patas">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SessionBannerBathAndGrooming />
          <SessionScheduling />
          <SessionHygienePet />
          <SessionBathSteps />
        </>
      )}
    </Container>
  );
}
