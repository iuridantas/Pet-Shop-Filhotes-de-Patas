import { useNavigate } from 'react-router-dom';
import { HighlightsSession } from './style';

export function SessionHighlights() {
  const navigate = useNavigate();

  const productCategories = [
    {
      title: 'Destaques para cachorro',
      items: [
        {
          imgSrc: '/img/1.png',
          alt: 'Icone representando ração',
          category: 'Ração',
        },
        {
          imgSrc: '/img/2.png',
          alt: 'Icone representando higiene e limpeza',
          category: 'Beleza%20e%20Limpeza',
        },
        {
          imgSrc: '/img/3.png',
          alt: 'Icone representando farmácia',
          category: 'Farmácia',
        },
        {
          imgSrc: '/img/4.png',
          alt: 'Icone representando acessórios de alimentação',
          category: 'Comedouros%20e%20Bebedouros',
        },
      ],
      basePath: 'cachorro',
    },
    {
      title: 'Destaques para gato',
      items: [
        {
          imgSrc: '/img/5.png',
          alt: 'Icone representando brinquedos',
          category: 'Brinquedos',
        },
        {
          imgSrc: '/img/2.png',
          alt: 'Icone representando higiene e limpeza',
          category: 'Beleza%20e%20Limpeza',
        },
        {
          imgSrc: '/img/3.png',
          alt: 'Icone representando farmácia',
          category: 'Farmácia',
        },
        {
          imgSrc: '/img/4.png',
          alt: 'Icone representando acessórios de alimentação',
          category: 'Comedouros%20e%20Bebedouros',
        },
      ],
      basePath: 'gato',
    },
  ];

  const handleCategoryClick = (basePath: string, category: string) => {
    navigate(`/${basePath}?category=${category}`);
  };

  return (
    <section aria-label="Destaques dos Produtos Oferecidos pelo Pet Shop">
      <HighlightsSession>
        {productCategories.map((categoryGroup, index) => (
          <div key={index}>
            <h2>{categoryGroup.title}</h2>
            <ul>
              {categoryGroup.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a
                    onClick={() =>
                      handleCategoryClick(categoryGroup.basePath, item.category)
                    }
                  >
                    <img src={item.imgSrc} alt={item.alt} />
                    <div>
                      <p>{decodeURIComponent(item.category)}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </HighlightsSession>
    </section>
  );
}
