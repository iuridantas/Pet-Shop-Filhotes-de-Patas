import { SocialMediaSession } from './style';

export function SessionSocialMedia() {
  return (
    <section aria-label="Redes sociais do filhotes de patas">
      <SocialMediaSession>
        <div>
          <a
            href="https://www.instagram.com/filhotesdepatasse/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram do filhotes de patas"
            title="Instagram do filhotes de patas"
          >
            <img src="/img/insta.png" alt="Foto do Instagram" />
            <h2>Instagram</h2>
            <p>@filhotesdepatasse</p>
          </a>
        </div>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=557998953275&text=Ol%C3%A1%20Filhotes%20de%20Patas,%20vim%20atrav%C3%A9s%20do%20seu%20site,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Número do WhatsApp do filhotes de patas"
            title="Número do WhatsApp do filhotes de patas"
          >
            <img src="/img/contato.png" alt="Foto do WhatsApp" />
            <h2>WhatsApp</h2>
            <p>(79) 9 9895-3275</p>
          </a>
        </div>
      </SocialMediaSession>
    </section>
  );
}
