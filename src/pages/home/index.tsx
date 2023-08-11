import { SessionBannersHome } from '../../components/session/sessionHome/sessionBanner';
import { SessionOfLoveCommitmentAndDedication } from '../../components/session/sessionHome/sessionOfLoveCommitmentAndDedication';
import { SessionServiceDetails } from '../../components/session/sessionHome/sessionServiceDetails';
import { Container } from './style';

export function Home() {
  return (
    <Container aria-label="Página inicial">
      <SessionBannersHome/>
      <SessionOfLoveCommitmentAndDedication/>
      <SessionServiceDetails/>
    </Container>
  );
}
