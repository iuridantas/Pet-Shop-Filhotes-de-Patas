import { useState } from 'react';
import { LoveCommitmentAndDedicationSession, TitleSession } from './style';

export function SessionOfLoveCommitmentAndDedication() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section aria-label="Explicação Sobre os valores: amor, compromisso e dedicação">
      <TitleSession>
        <h1>Bem-vindo à Filhotes de Patas</h1>
        <h2>
          Onde o bem-estar e a felicidade do seu pet são nossas principais
          prioridades!
        </h2>
      </TitleSession>
      <LoveCommitmentAndDedicationSession>
        <div>
          <img
            src="/img/amor.png"
            alt="Foto sobre amor"
            onLoad={handleImageLoad}
            className={`${imageLoaded ? '' : 'image-loading'}`}
          />
          <h2>Amor</h2>
          <p>
            Amamos e cuidamos de cada pet como se fossem da nossa família. Aqui,
            o carinho é a base de tudo que fazemos.
          </p>
        </div>
        <div>
          <img
            src="/img/compromisso.png"
            alt="Foto sobre compromisso"
            onLoad={handleImageLoad}
            className={`${imageLoaded ? '' : 'image-loading'}`}
          />
          <h2>Compromisso</h2>
          <p>
            Nos comprometemos em oferecer serviços de qualidade, filhotes
            saudáveis e produtos confiáveis para os clientes e seus animais de
            estimação.
          </p>
        </div>
        <div>
          <img
            src="/img/dedicacao.png"
            alt="Foto sobre dedicação"
            onLoad={handleImageLoad}
            className={`${imageLoaded ? '' : 'image-loading'}`}
          />
          <h2>Dedicação</h2>
          <p>
            Somos dedicados em proporcionar o melhor atendimento e cuidados
            especiais para que os pets se sintam felizes e amados.
          </p>
        </div>
      </LoveCommitmentAndDedicationSession>
    </section>
  );
}
