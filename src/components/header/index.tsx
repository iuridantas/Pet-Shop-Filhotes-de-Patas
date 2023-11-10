import { Container } from './style';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiFillCaretDown } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  const [submenuOpenDog, setSubmenuOpenDog] = useState(false);
  const [submenuOpenCat, setSubmenuOpenCat] = useState(false);

  useEffect(() => {
    const btnMobile = document.getElementById('btn-mobile');
    const nav = document.getElementById('nav');

    function toggleMenu(event: MouseEvent) {
      if (!nav) return;
      nav.classList.toggle('active');
      const active = nav.classList.contains('active');
      (event.currentTarget as HTMLElement).setAttribute(
        'aria-expanded',
        active.toString(),
      );
      (event.currentTarget as HTMLElement).setAttribute(
        'aria-label',
        active ? 'Fechar Menu' : 'Abrir Menu',
      );
    }

    btnMobile?.addEventListener('click', toggleMenu);

    function addLinkClickEvent(linkId: string, target: string) {
      const link = document.getElementById(linkId);
      link?.addEventListener('click', (event) => {
        event.preventDefault();
        navigate(target);
        if (nav) nav.classList.remove('active');
        setSubmenuOpenDog(false);
        setSubmenuOpenCat(false);
      });
    }

    const menuLinks = [
      { id: 'home-link', target: '/' },
      { id: 'estetica-link', target: '/estetica' },
      { id: 'contato-link', target: '/contato' },
      { id: 'filhotes-link', target: '/filhotes' },
      { id: 'camas-cachorro-link', target: '/cachorro?category=Camas' },
      { id: 'camas-gato-link', target: '/gato?category=Camas' },
      {
        id: 'comedouros-bebedouros-cachorro-link',
        target: '/cachorro?category=Comedouros%20e%20Bebedouros',
      },
      {
        id: 'comedouros-bebedouros-gato-link',
        target: '/gato?category=Comedouros%20e%20Bebedouros',
      },
      {
        id: 'cobertores-cachorro-link',
        target: '/cachorro?category=Cobertores',
      },
      {
        id: 'cobertores-gato-link',
        target: '/gato?category=Cobertores',
      },
      {
        id: 'coleiras-guias-peitorais-cachorro-link',
        target: '/cachorro?category=Coleiras%2C%20Guias%20e%20Peitorais',
      },
      {
        id: 'coleiras-guias-peitorais-gato-link',
        target: '/gato?category=Coleiras%2C%20Guias%20e%20Peitorais',
      },
      {
        id: 'beleza-limpeza-cachorro-link',
        target: '/cachorro?category=Beleza%20e%20Limpeza',
      },
      {
        id: 'beleza-limpeza-gato-link',
        target: '/gato?category=Beleza%20e%20Limpeza',
      },
      {
        id: 'brinquedos-cachorro-link',
        target: '/cachorro?category=Brinquedos',
      },
      {
        id: 'brinquedos-gato-link',
        target: '/gato?category=Brinquedos',
      },
      { id: 'petiscos-ossos-link', target: '/boloPersonalizado' },
      {
        id: 'tapetes-fraldas-banheiros-gato-link',
        target: '/gato?category=Tapetes%2C%20Fraldas%20e%20Banheiros',
      },
      {
        id: 'tapetes-fraldas-banheiros-cachorro-link',
        target: '/cachorro?category=Tapetes%2C%20Fraldas%20e%20Banheiros',
      },
      { id: 'ração-link', target: '/cachorro?category=Ração' },
      {
        id: 'portões-grades-link',
        target: '/cachorro?category=Portões%20e%20Grades',
      },
      { id: 'roupas-link', target: '/cachorro?category=Roupas' },
      { id: 'farmácia-cachorro-link', target: '/cachorro?category=Farmácia' },
      { id: 'farmácia-gato-link', target: '/gato?category=Farmácia' },
      {
        id: 'acessórios-transporte-cachorro-link',
        target: '/cachorro?category=Acessórios%20de%20Transporte',
      },
      {
        id: 'acessórios-transporte-gato-link',
        target: '/gato?category=Acessórios%20de%20Transporte',
      },
    ];

    menuLinks.forEach((link) => {
      addLinkClickEvent(link.id, link.target);
    });

    return () => {
      btnMobile?.removeEventListener('click', toggleMenu);
      menuLinks.forEach((link) => {
        const linkElement = document.getElementById(link.id);
        linkElement?.removeEventListener('click', () => {
          navigate(link.target);
          if (nav) nav.classList.remove('active');
          setSubmenuOpenDog(false);
          setSubmenuOpenCat(false);
        });
      });
    };
  }, []);

  const handleSubmenuItemDogClicked = () => {
    setSubmenuOpenDog(!submenuOpenDog);
  };

  const handleSubmenuItemCatClicked = () => {
    setSubmenuOpenCat(!submenuOpenCat);
  };

  return (
    <header>
      <Container aria-label="Menu de navegação principal">
        <div>
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
                <Link to="/" id="home-link" className="container-link">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/estetica"
                  id="estetica-link"
                  className="container-link"
                >
                  Estética
                </Link>
              </li>
              <li
                onMouseEnter={() => setSubmenuOpenDog(true)}
                onMouseLeave={() => setSubmenuOpenDog(false)}
              >
                <a
                  className="container-link"
                  onClick={handleSubmenuItemDogClicked}
                >
                  Cachorro
                  <span>
                    <AiFillCaretDown />
                  </span>
                </a>
                <ul
                  className={submenuOpenDog ? 'submenu-dog' : 'submenu-closed'}
                >
                  <li>
                    <Link to="/cachorro?category=Ração" id="ração-link">
                      Ração
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cachorro?category=Petiscos%20e%20Ossos"
                      id="petiscos-ossos-link"
                    >
                      Petiscos e Ossos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cachorro?category=Tapetes%2C%20Fraldas%20e%20Banheiros"
                      id="tapetes-fraldas-banheiros-cachorro-link"
                    >
                      Tapetes, Fraldas e Banheiros
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cachorro?category=Farmácia"
                      id="farmácia-cachorro-link"
                    >
                      Farmácia
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cachorro?category=Brinquedos"
                      id="brinquedos-cachorro-link"
                    >
                      Brinquedos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cachorro?category=Beleza%20e%20Limpeza"
                      id="beleza-limpeza-cachorro-link"
                    >
                      Beleza e Limpeza
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cachorro?category=Coleiras%2C%20Guias%20e%20Peitorais"
                      id="coleiras-guias-peitorais-cachorro-link"
                    >
                      Coleiras, Guias e Peitorais
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cachorro?category=Camas"
                      id="camas-cachorro-link"
                    >
                      Camas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cachorro?category=Cobertores"
                      id="cobertores-cachorro-link"
                    >
                      Cobertores
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cachorro?category=Comedouros%20e%20Bebedouros"
                      id="comedouros-bebedouros-cachorro-link"
                    >
                      Comedouros e Bebedouros
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cachorro?category=Acessórios%20de%20Transporte"
                      id="acessórios-transporte-cachorro-link"
                    >
                      Acessórios de Transporte
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cachorro?category=Portões%20e%20Grades"
                      id="portões-grades-link"
                    >
                      Portões e Grades
                    </Link>
                  </li>
                  <li>
                    <Link to="/cachorro?category=Roupas" id="roupas-link">
                      Roupas
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                onMouseEnter={() => setSubmenuOpenCat(true)}
                onMouseLeave={() => setSubmenuOpenCat(false)}
              >
                <a
                  className="container-link"
                  onClick={handleSubmenuItemCatClicked}
                >
                  Gato
                  <span>
                    <AiFillCaretDown />
                  </span>
                </a>
                <ul
                  className={submenuOpenCat ? 'submenu-cat' : 'submenu-closed'}
                >
                  <li>
                    <Link
                      to="/gato?category=Tapetes%2C%20Fraldas%20e%20Banheiros"
                      id="tapetes-fraldas-banheiros-gato-link"
                    >
                      Tapetes, Fraldas e Banheiros
                    </Link>
                  </li>
                  <li>
                    <Link to="/gato?category=Farmácia" id="farmácia-gato-link">
                      Farmácia
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gato?category=Brinquedos"
                      id="brinquedos-gato-link"
                    >
                      Brinquedos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gato?category=Beleza%20e%20Limpeza"
                      id="beleza-limpeza-gato-link"
                    >
                      Beleza e Limpeza
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gato?category=Coleiras%2C%20Guias%20e%20Peitorais"
                      id="coleiras-guias-peitorais-gato-link"
                    >
                      Coleiras, Guias e Peitorais
                    </Link>
                  </li>
                  <li>
                    <Link to="/gato?category=Camas" id="camas-gato-link">
                      Camas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gato?category=Cobertores"
                      id="cobertores-gato-link"
                    >
                      Cobertores
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gato?category=Comedouros%20e%20Bebedouros"
                      id="comedouros-bebedouros-gato-link"
                    >
                      Comedouros e Bebedouros
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gato?category=Acessórios%20de%20Transporte"
                      id="acessórios-transporte-gato-link"
                    >
                      Acessórios de Transporte
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/filhotes"
                  id="filhotes-link"
                  className="container-link"
                >
                  Filhotes
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  id="contato-link"
                  className="container-link"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
