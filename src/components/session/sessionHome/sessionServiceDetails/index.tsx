import {
  SaleProductSession,
  AestheticsandHygieneSession,
  SalePuppySession,
} from './style';

export function SessionServiceDetails() {
  return (
    <section aria-label="Sobre Serviços de Estética e Higiene, venda de filhotes e venda de produtos">
      <AestheticsandHygieneSession aria-label="Sobre Serviços de Estética e Higiene">
        <img
          src="/img/cachorro_banho.png"
          alt="Cachorro tomando banho"
          aria-label="Cachorro tomando banho"
        />
        <div className="info">
          <h2>Serviços de Estética e Higiene</h2>
          <p>
            Na Filhote de Patas pet shop, nossos serviços especializados de
            banho mantêm seu animal de estimação limpo, cheiroso e bem cuidado.
            Nossa equipe profissional oferece banhos relaxantes com produtos de
            alta qualidade, resultando em uma aparência brilhante e saudável.
            Além disso, cuidamos da higiene geral, incluindo orelhas, unhas e
            dentes, deixando seu pet impecável. Oferecemos também serviços
            completos de tosa, onde nossa equipe pode transformar a aparência do
            seu pet de acordo com suas preferências, realçando sua beleza
            natural com cortes e penteados encantadores.
          </p>
        </div>
      </AestheticsandHygieneSession>
      <SalePuppySession aria-label="Sobre Venda de Filhote">
        <div>
          <div className="info">
            <h2>Serviço de Venda de Filhotes</h2>
            <p>
              Na Filhote de Patas pet shop, oferecemos uma seleção
              cuidadosamente escolhida de filhotes adoráveis de várias raças.
              Cada filhote é criado com amor e atenção, garantindo sua saúde e
              socialização desde tenra idade. Nossa equipe está disponível para
              orientar e ajudar você a escolher o filhote perfeito que se
              encaixe no seu estilo de vida e necessidades. Além disso,
              fornecemos informações abrangentes sobre os cuidados iniciais
              essenciais para garantir que a jornada com seu novo companheiro
              comece da melhor maneira possível.
            </p>
          </div>
          <img src="/img/filhotes.png" alt="Filhote" aria-label="Filhote" />
        </div>
      </SalePuppySession>
      <SaleProductSession aria-label="Sobre Venda de Produtos">
        <img
          src="/img/produtos.png"
          alt="Produtos pet"
          aria-label="Produtos pet"
        />
        <div className="info">
          <h2>Serviço de Venda de Produtos para Cachorro e Gato</h2>
          <p>
            Na Filhote de Patas pet shop, oferecemos uma ampla e excelente
            variedade de produtos, cuidadosamente selecionados para atender a
            todas as necessidades do seu amado amigo de quatro patas. Dentro do
            nosso catálogo, você descobrirá uma diversidade de itens essenciais.
            Nossa principal prioridade é assegurar o máximo conforto, bem-estar
            e diversão para o seu leal companheiro canino ou felino,
            proporcionando uma experiência completa e gratificante tanto para
            você quanto para o seu estimado animal de estimação.
          </p>
        </div>
      </SaleProductSession>
    </section>
  );
}
