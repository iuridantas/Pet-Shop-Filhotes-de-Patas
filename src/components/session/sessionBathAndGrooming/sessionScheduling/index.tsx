import { SchedulingSession } from './style';
import { BsWhatsapp } from 'react-icons/bs';

export function SessionScheduling() {
  const handleWhatsAppClick = () => {
    const whatsappLink =
      'https://api.whatsapp.com/send?phone=557998953275&text=Ol%C3%A1%20Filhotes%20de%20Patas,%20vim%20atrav%C3%A9s%20do%20seu%20site,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es.';
    window.open(whatsappLink, '_blank');
  };

  return (
    <section aria-label="Botão para agendamento">
      <SchedulingSession>
        <button
          onClick={handleWhatsAppClick}
          aria-label="Número do WhatsApp do Filhotes de Patas"
          title="Número do WhatsApp do Filhotes de Patas"
        >
          <h1>
            Agendar agora <BsWhatsapp />
          </h1>
        </button>
      </SchedulingSession>
    </section>
  );
}
