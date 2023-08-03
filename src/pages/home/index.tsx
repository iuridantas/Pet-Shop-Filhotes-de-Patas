import { SessionBannersHome } from '../../components/session/sessionHome/sessionBanner';
import { SessionOfLoveCommitmentAndDedication } from '../../components/session/sessionHome/sessionOfLoveCommitmentAndDedication';
import { SessionTitle } from '../../components/session/sessionHome/sessionTitle';
import { Container } from './style';

export function Home() {
  return (
    <Container aria-label="Página inicial">
      <SessionBannersHome/>
      <SessionTitle/>
      <SessionOfLoveCommitmentAndDedication/>
    </Container>
  );
}
