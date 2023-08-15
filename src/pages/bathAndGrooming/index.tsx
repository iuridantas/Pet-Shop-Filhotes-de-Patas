import { SessionBannerBathAndGrooming } from '../../components/session/sessionBathAndGrooming/sessionBanner';
import { SessionScheduling } from '../../components/session/sessionBathAndGrooming/sessionScheduling';
import { Container } from './style';

export function BathAndGrooming() {
  return (
    <Container aria-label="Página onde explica sobre o banho e tosa na Filhotes de Patas">
      <SessionBannerBathAndGrooming />
      <SessionScheduling />
    </Container>
  );
}
