import { HygienePetSession, IconWrapper } from './style';
import { MdDone } from 'react-icons/md';

export function SessionHygienePet() {
  return (
    <section aria-label="Explicação Sobre a higiene do pet">
      <HygienePetSession>
        <div>
          <img src="/img/banho.png" alt="Foto sobre banho" />
        </div>
        <div>
          <h2>Cuidados de Higiene Recomendados por Veterinários para o Seu Pet</h2>
          <p>
            Com cuidados preventivos, ela reduz a transmissão de doenças para
            pets e humanos.
          </p>
          <div className="benefits">
            <ul>
              <li>
                <IconWrapper>
                  <MdDone />
                </IconWrapper>
                O banho é um recurso valioso no tratamento de condições
                dermatológicas nos pets.
              </li>
              <li>
                <IconWrapper>
                  <MdDone />
                </IconWrapper>
                A tosa higiênica simplifica a higienização do seu pet, ao mesmo
                tempo que previne a contaminação do ambiente.
              </li>
              <li>
                <IconWrapper>
                  <MdDone />
                </IconWrapper>
                A escovação do pelo reduz a diminui a queda excessiva e elimina
                os nós.
              </li>
              <li>
                <IconWrapper>
                  <MdDone />
                </IconWrapper>
                Além de manter a pelagem deslumbrante, o banho auxilia na
                prevenção de odores indesejados.
              </li>
            </ul>
          </div>
        </div>
      </HygienePetSession>
    </section>
  );
}
