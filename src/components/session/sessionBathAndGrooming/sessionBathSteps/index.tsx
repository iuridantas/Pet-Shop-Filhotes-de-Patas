import { BathStepsSession } from './style';

export function SessionBathSteps() {
  return (
    <section aria-label="Etapas do banho">
      <BathStepsSession>
        <h2>Conheça as etapas do banho</h2>
        <div>
          <img src="/img/banho1.png" alt="Pet tomando banho" />
          <img src="/img/secagem.png" alt="Pet sendo secando" />
          <img src="/img/escovação.png" alt="Pet sendo escovado" />
          <img src="/img/limpeza_ouvido.png" alt="Limpando ouvido do pet" />
          <img src="/img/corte_unha.png" alt="Cortando a unha do pet" />
        </div>
      </BathStepsSession>
    </section>
  );
}
