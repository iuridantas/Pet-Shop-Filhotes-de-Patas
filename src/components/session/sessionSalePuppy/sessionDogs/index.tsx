import { CardDogsInformation } from '../../../card/cardPuppy';
import { DogsSession } from './style';

export function SessionDogs() {
  return (
    <section aria-label="Seção dos filhotes de cachorros">
      <DogsSession>
        <h2>Raças de Cachorros Disponíveis</h2>
        <CardDogsInformation />
        <p className="text">
          Estamos extremamente empolgados em recebê-lo(a) em nosso petshop, onde
          terá a oportunidade única de conhecer pessoalmente nossos adoráveis
          filhotes. Temos a certeza de que entre eles você encontrará o
          companheiro perfeito, capaz de encher sua vida com alegria e
          proporcionar amor incondicional ao seu lar. Estamos prontos para
          guiá-lo(a) nessa jornada emocionante em busca do seu novo melhor
          amigo. Venha nos visitar e descubra uma conexão especial com um
          filhotinho que fará seu coração derreter!
        </p>
      </DogsSession>
    </section>
  );
}
