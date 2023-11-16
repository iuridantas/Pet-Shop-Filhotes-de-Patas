import { Container } from './style';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiFillCaretDown } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import menuLinks from '../json/links/menuLinks.json';
import subMenuDogLinks from '../json/links/subMenuDogLinks.json';
import subMenuCatLinks from '../json/links/subMenuCatLinks.json';

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
              {menuLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.target}
                    id={link.id}
                    className="container-link"
                  >
                    {link.id.replace('-link', '')}
                  </Link>
                </li>
              ))}
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
                  {subMenuDogLinks.map((link) => (
                    <li key={link.id}>
                      <Link
                        to={`/cachorro?category=${link.category}`}
                        id={link.id}
                      >
                        {link.category}
                      </Link>
                    </li>
                  ))}
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
                  {subMenuCatLinks.map((link) => (
                    <li key={link.id}>
                      <Link to={`/gato?category=${link.category}`} id={link.id}>
                        {link.category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
