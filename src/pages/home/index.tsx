import { SessionBannersHome } from '../../components/session/sessionHome/sessionBanner';
import { Container } from './style';

export function Home() {
  return (
    <Container aria-label="Página inicial">
      <SessionBannersHome/>
    </Container>
  );
}
