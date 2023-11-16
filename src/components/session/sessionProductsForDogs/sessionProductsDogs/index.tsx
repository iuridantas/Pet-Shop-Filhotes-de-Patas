import { useEffect, useState } from 'react';
import { CardProductsForDogs } from '../../../card/cardProductsDogs';
import { ProductsDogs } from './style';
import { useLocation, useNavigate } from 'react-router-dom';

export function SessionProductsDogs() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [itemsToShow, setItemsToShow] = useState(12);
  const totalItems = 227;

  const categories = [
    'Ração',
    'Petiscos e Ossos',
    'Tapetes, Fraldas e Banheiros',
    'Farmácia',
    'Brinquedos',
    'Beleza e Limpeza',
    'Coleiras, Guias e Peitorais',
    'Camas',
    'Cobertores',
    'Comedouros e Bebedouros',
    'Acessórios de Transporte',
    'Portões e Grades',
    'Roupas',
  ];

  const filters = [
    { value: '', label: 'Escolha' },
    { value: 'NameAscending', label: 'Nome de A-Z' },
    { value: 'NameDescending', label: 'Nome de Z-A' },
  ];

  const categoryItemCounts: Record<string, number> = {
    Ração: 4,
    'Petiscos e Ossos': 4,
    'Tapetes, Fraldas e Banheiros': 5,
    Farmácia: 8,
    Brinquedos: 44,
    'Beleza e Limpeza': 50,
    'Coleiras, Guias e Peitorais': 24,
    Camas: 20,
    Cobertores: 1,
    'Comedouros e Bebedouros': 30,
    'Acessórios de Transporte': 6,
    'Portões e Grades': 2,
    Roupas: 29,
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
      navigate(
        `/cachorro?category=${encodeURIComponent(selectedCategoryValue)}`,
      );
    } else {
      navigate('/cachorro');
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
    <section aria-label="Seção dos produtos para cachorros">
      <ProductsDogs>
        <h1>
          Descubra a diversidade de produtos para cachorro na nossa loja física
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
        <CardProductsForDogs
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
      </ProductsDogs>
    </section>
  );
}
