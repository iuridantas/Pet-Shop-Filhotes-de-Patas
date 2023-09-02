import { useEffect, useState } from 'react';
import { MapsSession } from './style';

export function SessionMaps() {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const iframe = document.querySelector(
      'iframe[title="Filhotes de Patas Pet Shop"]',
    );

    const handleMapLoad = () => {
      setMapLoaded(true);
    };

    if (iframe) {
      iframe.addEventListener('load', handleMapLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleMapLoad);
      }
    };
  }, []);

  return (
    <section aria-label="Redes sociais do filhotes de patas">
      <MapsSession>
        <h1>Redes Sociais e Localização</h1>
        <iframe
          title="Filhotes de Patas Pet Shop"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.724413207722!2d-37.0577257!3d-10.9697552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab1cdc8f4488b%3A0xca6142f5b2806886!2sFilhotes%20de%20patas%20pet%20shop!5e0!3m2!1sen!2suk!4v1632120407190!5m2!1sen!2suk"
          loading="lazy"
          allowFullScreen
          className={`${mapLoaded ? '' : 'map-loading'}`}
        ></iframe>
      </MapsSession>
    </section>
  );
}
