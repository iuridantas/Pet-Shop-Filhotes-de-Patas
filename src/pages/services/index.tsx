import { SessionBanners } from '../../components/session/sessionService/sessionBanner';
import { Container } from './style';

export function Service() {
  return (
    <Container aria-label="Página inicial">
      <SessionBanners />
    </Container>
  );
}
