import { SessionBannerBathAndGrooming } from '../../components/session/sessionBathAndGrooming/sessionBanner';
import { SessionBathSteps } from '../../components/session/sessionBathAndGrooming/sessionBathSteps';
import { SessionHygienePet } from '../../components/session/sessionBathAndGrooming/sessionHygienePet';
import { SessionScheduling } from '../../components/session/sessionBathAndGrooming/sessionScheduling';
import { Container } from './style';

export function BathAndGrooming() {
  return (
    <Container aria-label="Página onde explica sobre o banho e tosa na Filhotes de Patas">
      <SessionBannerBathAndGrooming />
      <SessionScheduling />
      <SessionHygienePet/>
      <SessionBathSteps/>
    </Container>
  );
}
