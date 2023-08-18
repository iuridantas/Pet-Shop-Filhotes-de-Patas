import { useNavigate } from 'react-router-dom';
import { HighlightsSession } from './style';

export function SessionHighlights() {
  const navigate = useNavigate();

  return (
    <section aria-label="Destaques dos Produtos Oferecidos pelo Pet Shop">
      <HighlightsSession>
        <div>
          <h2>Destaques para cachorro</h2>
          <ul>
            <li>
              <a href="">
                <img
                  src="/img/1.png"
                  alt="Icone representando ração"
                  onClick={() => {
                    navigate('/cachorro?category=Ração');
                  }}
                />
                <div>
                  <p>Rações</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/img/2.png"
                  alt="Icone representando higiene e limpeza"
                  onClick={() => {
                    navigate('/cachorro?category=Beleza%20e%20Limpeza');
                  }}
                />
                <div>
                  <p>Higiene e limpeza</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/img/3.png"
                  alt="Icone representando farmácia"
                  onClick={() => {
                    navigate('/cachorro?category=Farmácia');
                  }}
                />
                <div>
                  <p>Farmácia</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/img/4.png"
                  alt="Icone representando acessórios de alimentação"
                  onClick={() => {
                    navigate('/cachorro?category=Comedouros%20e%20Bebedouros');
                  }}
                />
                <div>
                  <p>Acessórios de alimentação</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Destaques para gato</h2>
          <ul>
            <li>
              <a href="">
                <img
                  src="/img/5.png"
                  alt="Icone representando brinquedos"
                  onClick={() => {
                    navigate('/gato?category=Brinquedos');
                  }}
                />
                <div>
                  <p>Brinquedos</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/img/2.png"
                  alt="Icone representando higiene e limpeza"
                  onClick={() => {
                    navigate('/gato?category=Beleza%20e%20Limpeza');
                  }}
                />
                <div>
                  <p>Higiene e limpeza</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/img/3.png"
                  alt="Icone representando farmácia"
                  onClick={() => {
                    navigate('/gato?category=Farmácia');
                  }}
                />
                <div>
                  <p>Farmácia</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/img/4.png"
                  alt="Icone representando acessórios de alimentação"
                  onClick={() => {
                    navigate('/gato?category=Comedouros%20e%20Bebedouros');
                  }}
                />
                <div>
                  <p>Acessórios de alimentação</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </HighlightsSession>
    </section>
  );
}
