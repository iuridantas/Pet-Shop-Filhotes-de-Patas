import { SessionBannerBathAndGrooming } from '../../components/session/sessionBathAndGrooming/sessionBanner';
import { SessionInformation } from '../../components/session/sessionBathAndGrooming/sessionInformation';
import { Container } from './style';

export function BathAndGrooming() {
  return (
    <Container aria-label="Página onde explica sobre o banho e tosa na Filhotes de Patas">
      <SessionBannerBathAndGrooming />
      <SessionInformation />
    </Container>
  );
}
