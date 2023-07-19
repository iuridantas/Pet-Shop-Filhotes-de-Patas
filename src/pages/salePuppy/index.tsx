import { SessionBannerSalePuppy } from '../../components/session/sessionSalePuppy/sessionBanner';
import { SessionInformationPuppy } from '../../components/session/sessionSalePuppy/sessionInformationPuppy';
import { Container } from './style';

export function SalePuppy() {
  return (
    <Container aria-label="Página inicial">
      <SessionBannerSalePuppy />
      <SessionInformationPuppy/>
    </Container>
  );
}