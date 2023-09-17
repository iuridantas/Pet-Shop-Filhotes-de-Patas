import { SocialMediaSession } from './style';

export function SessionSocialMedia() {
  const socialMediaLinks = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/filhotesdepatasse/',
      iconSrc: '/img/insta.png',
      text: '@filhotesdepatasse',
    },
    {
      label: 'WhatsApp',
      href: 'https://api.whatsapp.com/send?phone=557998953275&text=Ol%C3%A1%20Filhotes%20de%20Patas,%20vim%20atrav%C3%A9s%20do%20seu%20site,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es.',
      iconSrc: '/img/contato.png',
      text: '(79) 9 9895-3275',
    },
  ];

  return (
    <section aria-label="Redes sociais do Filhotes de Patas">
      <SocialMediaSession>
        {socialMediaLinks.map((link, index) => (
          <div key={index}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
            >
              <img src={link.iconSrc} alt={`Foto do ${link.label}`} />
              <h2>{link.label}</h2>
              <p>{link.text}</p>
            </a>
          </div>
        ))}
      </SocialMediaSession>
    </section>
  );
}
