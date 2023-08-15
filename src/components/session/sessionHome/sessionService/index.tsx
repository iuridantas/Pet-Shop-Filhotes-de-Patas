import { IconArrowDown, IconWhatsapp, ServiceSession } from './style';

export function SessionService() {
  return (
    <section aria-label="Serviços Oferecidos pelo Pet Shop">
      <ServiceSession>
        <h2>Conheça os Serviços Oferecidos pelo Pet Shop:</h2>
        <div className="info">
          <ul>
            <li className="title">
              Tipo de Serviços <IconArrowDown />
            </li>
            <li>Banho e tosa</li>
            <li>Venda de Filhotes</li>
            <li>Venda de Produtos</li>
          </ul>
          <a
            href="https://api.whatsapp.com/send?phone=557998953275&text=Ol%C3%A1%20Filhotes%20de%20Patas,%20vim%20atrav%C3%A9s%20do%20seu%20site,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Número do WhatsApp do filhotes de patas"
            title="Número do WhatsApp do filhotes de patas"
          >
            Entre em Contato
            <IconWhatsapp />
          </a>
        </div>
      </ServiceSession>
    </section>
  );
}