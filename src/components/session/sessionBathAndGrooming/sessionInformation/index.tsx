import { InformationSession } from './style';

export function SessionInformation() {
  const handleWhatsAppClick = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=557998953275&text=Ol%C3%A1%20Filhotes%20de%20Patas,%20vim%20atrav%C3%A9s%20do%20seu%20site,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es.',
      '_blank',
    );
  };

  return (
    <section aria-label="Explicação Sobre banho, banho e tosa e sobre venda de filhotes">
      <InformationSession>
        <button
          onClick={handleWhatsAppClick}
          aria-label="Número do WhatsApp do filhotes de patas"
          title="Número do WhatsApp do filhotes de patas"
        >
          <h1>Agendar agora</h1>
        </button>
      </InformationSession>
    </section>
  );
}
