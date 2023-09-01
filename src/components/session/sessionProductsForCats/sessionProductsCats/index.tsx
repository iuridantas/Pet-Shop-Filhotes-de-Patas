import { useEffect, useState } from 'react';
import { CardProductsForCats } from '../../../card/cardProductsCats';
import { ProductsCats } from './style';
import { useLocation, useNavigate } from 'react-router-dom';

export function SessionProductsCats() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [itemsToShow, setItemsToShow] = useState(12);
  const totalItems = 104;

  const categoryItemCounts: { [category: string]: number } = {
    'Tapetes, Fraldas e Banheiros': 5,
    'Farmácia': 8,
    'Brinquedos': 8,
    'Beleza e Limpeza': 41,
    'Coleiras, Guias e Peitorais': 6,
    'Camas': 20,
    'Cobertores': 1,
    'Comedouros e Bebedouros': 30,
    'Acessórios de Transporte': 3,
  };

  const handleSeeMoreClick = () => {
    const itemsInCategory =
      selectedCategory === ''
        ? totalItems
        : categoryItemCounts[selectedCategory] || 0;
    const remainingItems = itemsInCategory - itemsToShow;
    const additionalItems = Math.min(12, remainingItems);

    if (additionalItems > 0) {
      setItemsToShow(itemsToShow + additionalItems);
    }
  };

  useEffect(() => {
    const itemsInCategory = categoryItemCounts[selectedCategory] || totalItems;
    setItemsToShow(Math.min(12, itemsInCategory));
  }, [selectedCategory]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryFromUrl = searchParams.get('category');
    setSelectedCategory(categoryFromUrl || '');
  }, [location.search]);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedCategoryValue = event.target.value;
    setSelectedCategory(selectedCategoryValue);

    if (selectedCategoryValue) {
      navigate(`/gato?category=${encodeURIComponent(selectedCategoryValue)}`);
    } else {
      navigate('/gato');
    }
  };

  return (
    <section aria-label="Seção dos produtos para gatos">
      <ProductsCats>
        <h1>
          Descubra a diversidade de produtos para gato na nossa loja física
        </h1>
        <div className="filter">
          <div className="select">
            <h2>Categorias:</h2>
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="">Escolha</option>
              <option value="Tapetes, Fraldas e Banheiros">
                Tapetes, Fraldas e Banheiros
              </option>
              <option value="Farmácia">Farmácia</option>
              <option value="Brinquedos">Brinquedos</option>
              <option value="Beleza e Limpeza">Beleza e Limpeza</option>
              <option value="Coleiras, Guias e Peitorais">
                Coleiras, Guias e Peitorais
              </option>
              <option value="Camas">Camas</option>
              <option value="Cobertores">Cobertores</option>
              <option value="Comedouros e Bebedouros">
                Comedouros e Bebedouros
              </option>
              <option value="Acessórios de Transporte">
                Acessórios de Transporte
              </option>
            </select>
          </div>
          <div className="select">
            <h2>Ordenar por:</h2>
            <select value={selectedFilter} onChange={handleFilterChange}>
              <option value="">Escolha</option>
              <option value="NameAscending">Nome de A-Z</option>
              <option value="NameDescending">Nome de Z-A</option>
              <option value="PriceAscending">Menor Preço</option>
              <option value="PriceDescending">Maior Preço</option>
            </select>
          </div>
        </div>
        <div className="center">
          <input
            className="search"
            type="text"
            placeholder="Digite o nome do produto"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <CardProductsForCats
          searchTerm={searchTerm}
          selectedFilter={selectedFilter}
          selectedCategory={selectedCategory}
          itemsToShow={itemsToShow}
        />
        <div className="center">
          {itemsToShow <
            (selectedCategory === ''
              ? totalItems
              : categoryItemCounts[selectedCategory]) && (
            <button onClick={handleSeeMoreClick}>ver mais</button>
          )}
        </div>
      </ProductsCats>
    </section>
  );
}
