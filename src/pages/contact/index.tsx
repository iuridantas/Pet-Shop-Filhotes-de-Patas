import { useEffect, useState } from 'react';
import { SessionMaps } from '../../components/session/sessionContact/sessionMaps';
import { SessionSocialMedia } from '../../components/session/sessionContact/sessionSocialMedia';
import { Container } from './style';
import { Loader } from '../../components/loader';

export function Contact() {
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
    <Container aria-label="Página onde mostra as formas de entrar em contato com a Filhotes de Patas">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SessionMaps />
          <SessionSocialMedia />
        </>
      )}
    </Container>
  );
}
