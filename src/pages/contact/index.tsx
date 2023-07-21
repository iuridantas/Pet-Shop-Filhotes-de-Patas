import { SessionMaps } from '../../components/session/sessionContact/sessionMaps';
import { SessionSocialMedia } from '../../components/session/sessionContact/sessionSocialMedia';
import { Container } from './style';

export function Contact() {
  return (
    <Container aria-label="Página inicial">
      <SessionMaps/>
      <SessionSocialMedia/>
    </Container>
  );
}
