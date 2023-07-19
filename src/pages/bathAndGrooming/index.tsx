import { SessionBannerBathAndGrooming } from '../../components/session/sessionBathAndGrooming/sessionBanner';
import { SessionInformation } from '../../components/session/sessionBathAndGrooming/sessionInformation';
import { Container } from './style';

export function BathAndGrooming() {
  return (
    <Container aria-label="Página inicial">
      <SessionBannerBathAndGrooming />
      <SessionInformation />
    </Container>
  );
}
