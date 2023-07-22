import { SessionMaps } from '../../components/session/sessionContact/sessionMaps';
import { SessionSocialMedia } from '../../components/session/sessionContact/sessionSocialMedia';
import { Container } from './style';

export function Contact() {
  return (
    <Container aria-label="Página onde mostra as formas de entrar em contato com a Filhotes de Patas">
      <SessionMaps/>
      <SessionSocialMedia/>
    </Container>
  );
}
