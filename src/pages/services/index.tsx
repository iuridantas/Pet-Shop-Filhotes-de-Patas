import { SessionBanners } from '../../components/session/sessionService/sessionBanner';
import { SessionBathAndGroomingAndSalePuppy } from '../../components/session/sessionService/sessionBathAndGroomingAndSalePuppy';
import { Container } from './style';

export function Service() {
  return (
    <Container aria-label="Página inicial">
      <SessionBanners />
      <SessionBathAndGroomingAndSalePuppy />
    </Container>
  );
}
