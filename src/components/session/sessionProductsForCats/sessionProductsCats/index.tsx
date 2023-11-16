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
  const totalItems = 112;

  const categories = [
    'Tapetes, Fraldas e Banheiros',
    'Farmácia',
    'Brinquedos',
    'Beleza e Limpeza',
    'Coleiras, Guias e Peitorais',
    'Camas',
    'Cobertores',
    'Comedouros e Bebedouros',
    'Acessórios de Transporte',
  ];

  const filters = [
    { value: '', label: 'Escolha' },
    { value: 'NameAscending', label: 'Nome de A-Z' },
    { value: 'NameDescending', label: 'Nome de Z-A' },
  ];

  const categoryItemCounts: Record<string, number> = {
    'Tapetes, Fraldas e Banheiros': 5,
    Farmácia: 8,
    Brinquedos: 8,
    'Beleza e Limpeza': 41,
    'Coleiras, Guias e Peitorais': 6,
    Camas: 20,
    Cobertores: 1,
    'Comedouros e Bebedouros': 23,
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

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

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryFromUrl = searchParams.get('category');
    setSelectedCategory(categoryFromUrl || '');
  }, [location.search]);

  useEffect(() => {
    const itemsInCategory = categoryItemCounts[selectedCategory] || totalItems;
    setItemsToShow(
      searchTerm === '' ? Math.min(12, itemsInCategory) : itemsInCategory,
    );
  }, [selectedCategory, searchTerm]);

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
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="select">
            <h2>Ordenar por:</h2>
            <select value={selectedFilter} onChange={handleFilterChange}>
              {filters.map((filter) => (
                <option key={filter.value} value={filter.value}>
                  {filter.label}
                </option>
              ))}
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
          {searchTerm === '' &&
            itemsToShow <
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
