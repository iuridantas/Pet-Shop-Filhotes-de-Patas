import { useNavigate } from 'react-router-dom';
import { BathAndGroomingAndSalePuppySession } from './style';

export function SessionBathAndGroomingAndSalePuppy() {
  const navigate = useNavigate();

  return (
    <section aria-label="Explicação Sobre banho, banho e tosa e sobre venda de filhotes">
      <BathAndGroomingAndSalePuppySession>
        <h1>
          Desfrute de Banho e Tosas Profissionais e Encontre o Seu Filhote
          Perfeito!
        </h1>
        <h2>
          Descubra mais informações clicando em uma das categorias abaixo:
        </h2>
        <div>
          <a
            onClick={() => {
              navigate('/serviços/estetica');
            }}
            className="container-link"
          >
            Serviços de Centro de Estética
          </a>
          <a
            onClick={() => {
              navigate('/serviços/filhotes');
            }}
            className="container-link"
          >
            Filhotes
          </a>
        </div>
        <h2>Banho</h2>
        <p>
          No nosso pet shop, oferecemos serviços de banho especializados para
          garantir que o seu companheiro de quatro patas esteja sempre limpo e
          cheirando bem. Nossa equipe de profissionais dedicados cuidará do seu
          animal de estimação, proporcionando um banho relaxante e revigorante.
          Utilizamos produtos de alta qualidade, adequados ao tipo de pelagem do
          seu pet, para deixá-lo com um aspecto brilhante e saudável. Além
          disso, nossos profissionais experientes cuidarão de todos os detalhes,
          como higiene das orelhas, corte de unhas e limpeza dos dentes, para
          garantir que seu pet esteja impecável de todas as maneiras.
        </p>
        <h2>Banho e Tosa</h2>
        <p>
          Para aqueles que desejam dar um toque extra de elegância ao seu animal
          de estimação, temos o serviço completo de banho e tosa. Nossa equipe
          de especialistas em embelezamento animal está pronta para transformar
          a aparência do seu pet de acordo com suas preferências. De cortes de
          pelos estilosos a penteados encantadores, podemos realçar a beleza
          natural do seu amiguinho.
        </p>
        <h2>Venda de Filhotes</h2>
        <p>
          Se você está procurando um novo membro para a sua família, você veio
          ao lugar certo! Temos uma seleção cuidadosamente escolhida de filhotes
          adoráveis para venda. Nossos filhotes são provenientes de criadores
          responsáveis e saudáveis, e estão prontos para encontrar um lar
          amoroso. Nossa equipe terá prazer em ajudá-lo a encontrar o filhote
          que melhor se adapte ao seu estilo de vida e preferências. Nós
          garantimos que todos os nossos filhotes são socializados e bem
          cuidados, para que você possa ter a certeza de que estará levando para
          casa um companheiro peludo feliz e saudável.
        </p>
      </BathAndGroomingAndSalePuppySession>
    </section>
  );
}
