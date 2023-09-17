import { BathStepsSession } from './style';

export function SessionBathSteps() {
  const bathSteps = [
    { src: '/img/banho1.png', alt: 'Pet tomando banho' },
    { src: '/img/secagem.png', alt: 'Pet sendo secado' },
    { src: '/img/escovação.png', alt: 'Pet sendo escovado' },
    { src: '/img/limpeza_ouvido.png', alt: 'Limpando ouvido do pet' },
    { src: '/img/corte_unha.png', alt: 'Cortando a unha do pet' },
  ];

  return (
    <section aria-label="Etapas do banho">
      <BathStepsSession>
        <h2>Conheça as etapas do banho</h2>
        <div>
          {bathSteps.map((step, index) => (
            <img key={index} src={step.src} alt={step.alt} />
          ))}
        </div>
      </BathStepsSession>
    </section>
  );
}
