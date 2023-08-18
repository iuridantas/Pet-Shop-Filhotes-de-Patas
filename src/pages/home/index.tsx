import { useEffect, useState } from 'react';
import { SessionBannersHome } from '../../components/session/sessionHome/sessionBanner';
import { SessionHighlights } from '../../components/session/sessionHome/sessionHighlights';
import { SessionOfLoveCommitmentAndDedication } from '../../components/session/sessionHome/sessionOfLoveCommitmentAndDedication';
import { SessionService } from '../../components/session/sessionHome/sessionService';
import { SessionServiceDetails } from '../../components/session/sessionHome/sessionServiceDetails';
import { Container } from './style';
import { Loader } from '../../components/loader';

export function Home() {
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
    <Container aria-label="Página inicial">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SessionBannersHome />
          <SessionOfLoveCommitmentAndDedication />
          <SessionService />
          <SessionServiceDetails />
          <SessionHighlights />
        </>
      )}
    </Container>
  );
}
