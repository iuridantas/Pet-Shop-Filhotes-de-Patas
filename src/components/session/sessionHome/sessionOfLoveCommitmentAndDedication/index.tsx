import { LoveCommitmentAndDedicationSession } from './style';

export function SessionOfLoveCommitmentAndDedication() {
  return (
    <section aria-label="Explicação Sobre os valores: amor, compromisso e dedicação">
      <LoveCommitmentAndDedicationSession>
        <div>
          <img src="/img/amor.png" alt="Foto sobre amor" />
          <h2>Amor</h2>
          <p>
            Amamos e cuidamos de cada pet como se fossem da nossa família. Aqui,
            o carinho é a base de tudo que fazemos.
          </p>
        </div>
        <div>
          <img src="/img/compromisso.png" alt="Foto sobre compromisso" />
          <h2>Compromisso</h2>
          <p>
            Nos comprometemos em oferecer serviços de qualidade, filhotes
            saudáveis e produtos confiáveis para os clientes e seus animais de
            estimação.
          </p>
        </div>
        <div>
          <img src="/img/dedicacao.png" alt="Foto sobre dedicação" />
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
