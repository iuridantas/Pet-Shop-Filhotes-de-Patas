import { SessionBannersHome } from '../../components/session/sessionHome/sessionBanner';
import { SessionOfLoveCommitmentAndDedication } from '../../components/session/sessionHome/sessionOfLoveCommitmentAndDedication';
import { SessionService } from '../../components/session/sessionHome/sessionService';
import { SessionServiceDetails } from '../../components/session/sessionHome/sessionServiceDetails';
import { Container } from './style';

export function Home() {
  return (
    <Container aria-label="Página inicial">
      <SessionBannersHome />
      <SessionOfLoveCommitmentAndDedication />
      <SessionService/>
      <SessionServiceDetails />
    </Container>
  );
}
