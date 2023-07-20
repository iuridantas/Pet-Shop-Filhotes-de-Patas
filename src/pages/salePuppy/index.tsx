import { SessionBannerSalePuppy } from '../../components/session/sessionSalePuppy/sessionBanner';
import { SessionDogs } from '../../components/session/sessionSalePuppy/sessionDogs';
import { SessionInformationPuppy } from '../../components/session/sessionSalePuppy/sessionInformationPuppy';
import { Container } from './style';

export function SalePuppy() {
  return (
    <Container aria-label="Página inicial">
      <SessionBannerSalePuppy />
      <SessionInformationPuppy />
      <SessionDogs />
    </Container>
  );
}
