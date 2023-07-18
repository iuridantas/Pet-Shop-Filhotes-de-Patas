import { SessionBanners } from '../../components/session/sessionService/sessionBanner';
import { SessionBathAndGrooming } from '../../components/session/sessionService/sessionBathAndGrooming';
import { Container } from './style';

export function Service() {
  return (
    <Container aria-label="Página inicial">
      <SessionBanners />
      <SessionBathAndGrooming />
    </Container>
  );
}
