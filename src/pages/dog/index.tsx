import { SessionBannerDog } from '../../components/session/sessionProductsForDogs/sessionBanner';
import { SessionProductsDogs } from '../../components/session/sessionProductsForDogs/sessionProductsDogs';
import { Container } from './style';

export function ProductsDog() {
  return (
    <Container aria-label="Página dos produtos que a Filhotes de Patas vende para cachorro">
      <SessionBannerDog />
      <SessionProductsDogs />
    </Container>
  );
}
