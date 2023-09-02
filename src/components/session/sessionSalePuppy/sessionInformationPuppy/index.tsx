import { useState } from 'react';
import { Title, InformationPuppySession } from './style';

export function SessionInformationPuppy() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section aria-label="Informações sobre a venda de filhotes do Pet Shop Filhotes de Patas">
      <Title>
        <h1>Conheça Nossos Filhotes Adoráveis!</h1>
      </Title>
      <InformationPuppySession>
        <img
          src="/img/checklist.png"
          alt="Checklist sobre venda de filhotes"
          aria-label="Checklist sobre venda de filhotes"
          onLoad={handleImageLoad}
          className={`${imageLoaded ? '' : 'image-loading'}`}
        />
        <div>
          <p>
            Nós, da Filhotes de Patas, estamos encantados em apresentar a você
            nossa seleção de filhotes de cachorro incríveis! Cada filhote é
            escolhido cuidadosamente e criado com muito amor e dedicação. Temos
            o compromisso de oferecer aos nossos clientes os filhotes mais
            saudáveis e felizes para se tornarem seus novos companheiros de
            vida.
          </p>
          <h2>Idade Ideal:</h2>
          <p>
            Nossos filhotes têm 60 dias de idade, o período perfeito para
            iniciar a jornada ao lado de suas novas famílias.
          </p>
          <h2>Cuidados Veterinários:</h2>
          <p>
            Cada filhote já recebeu sua primeira dose da vacinação V10,
            garantindo uma proteção essencial contra doenças comuns em cães.
            Além disso, eles foram devidamente vermifugados para garantir seu
            bem-estar.
          </p>
          <h2>Origem Garantida:</h2>
          <p>
            Nossos filhotes possuem pedigree, fornecendo a garantia de
            procedência, linhagem e pureza da raça.
          </p>
          <h2>Socialização Afetuosa:</h2>
          <p>
            Criamos nossos filhotes em um ambiente amoroso, proporcionando-lhes
            interações sociais significativas para que cresçam confiantes e
            amáveis.
          </p>
        </div>
      </InformationPuppySession>
    </section>
  );
}
