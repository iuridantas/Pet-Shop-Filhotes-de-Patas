import { useNavigate } from 'react-router-dom';
import { Container } from './style';
import { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    const btnMobile = document.getElementById('btn-mobile');
    const nav = document.getElementById('nav');

    function toggleMenu(event: MouseEvent) {
      if (nav) {
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        (event.currentTarget as HTMLElement).setAttribute(
          'aria-expanded',
          active.toString(),
        );
        if (active) {
          (event.currentTarget as HTMLElement).setAttribute(
            'aria-label',
            'Fechar Menu',
          );
        } else {
          (event.currentTarget as HTMLElement).setAttribute(
            'aria-label',
            'Abrir Menu',
          );
        }
      }
    }

    btnMobile?.addEventListener('click', toggleMenu);

    const navLinks = document.querySelectorAll('#menu a');

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (nav) {
          nav.classList.remove('active');
        }
      });
    });

    return () => {
      btnMobile?.removeEventListener('click', toggleMenu);

      navLinks.forEach((link) => {
        link.removeEventListener('click', () => {
          if (nav) {
            nav.classList.remove('active');
          }
        });
      });
    };
  }, []);

  return (
    <header>
      <Container aria-label="Menu de navegação principal">
        <img
          src="/img/logo.jpeg"
          alt="logo"
          aria-label="Logotipo Filhotes de Patas"
        />
        <nav id="nav">
          <button
            id="btn-mobile"
            aria-label="Abrir Menu"
            aria-haspopup="true"
            aria-controls="menu"
            aria-expanded="false"
          >
            <AiOutlineMenu />
          </button>
          <ul id="menu" role="menu">
            <li>
              <a
                onClick={() => {
                  navigate('/');
                }}
                className="container-link"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate('/cachorro');
                }}
                className="container-link"
              >
                Cachorros
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate('/gato');
                }}
                className="container-link"
              >
                Gatos
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate('/serviços');
                }}
                className="container-link"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate('/contato');
                }}
                className="container-link"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
