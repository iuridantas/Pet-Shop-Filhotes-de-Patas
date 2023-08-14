import { SessionBannerCat } from '../../components/session/sessionProductsForCats/sessionBanner';
import { SessionProductsCats } from '../../components/session/sessionProductsForCats/sessionProductsCats';
import { Container } from './style';

export function ProductsCat() {
  return (
    <Container aria-label="Página dos produtos que a Filhotes de Patas vende para gato">
      <SessionBannerCat />
      <SessionProductsCats />
    </Container>
  );
}
