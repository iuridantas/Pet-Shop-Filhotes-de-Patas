import { SessionBannersHome } from '../../components/session/sessionHome/sessionBanner';
import { SessionOfLoveCommitmentAndDedication } from '../../components/session/sessionHome/sessionOfLoveCommitmentAndDedication';
import { SessionService } from '../../components/session/sessionHome/sessionService';
import { Container } from './style';

export function Home() {
  return (
    <Container aria-label="Página inicial">
      <SessionBannersHome/>
      <SessionOfLoveCommitmentAndDedication/>
      <SessionService/>
    </Container>
  );
}
