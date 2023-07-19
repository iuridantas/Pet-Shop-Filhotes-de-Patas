import { InformationSession } from './style';

export function SessionInformation() {
  return (
    <section aria-label="Explicação Sobre banho, banho e tosa e sobre venda de filhotes">
      <InformationSession>
        <div>
          <img src="/img/banho.png" alt="Foto do cachorro na banheira" />
          <h2>BANHO</h2>
          <p>
            Experimente um banho verdadeiramente incrível com nossa equipe de
            profissionais altamente qualificados, apaixonados pelo que fazem.
          </p>
        </div>
        <div>
          <img src="/img/dia_hora.png" alt="Foto do horário de funcionamento" />
          <h2>DIA / HORA</h2>
          <p>Segunda a Sexta - 08:00 às 17:00</p>
          <p>Sabádo - 08:00 às 12:00</p>
          <p>Feriado - Fechado</p>
        </div>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=557998953275&text=Ol%C3%A1%20Filhotes%20de%20Patas,%20vim%20atrav%C3%A9s%20do%20seu%20site,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Número do WhatsApp do filhotes de patas"
            title="Número do WhatsApp do filhotes de patas"
          >
            <img src="/img/contato.png" alt="Foto para entrar em contato" />
            <h2>AGENDE SEU HORÁRIO</h2>
            <p>clique aqui e agende o seu horário.</p>
          </a>
        </div>
      </InformationSession>
    </section>
  );
}
