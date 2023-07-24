import { useState } from 'react';
import { CardProductsForDogs } from '../../../card/cardProductsDogs';
import { ProductsDogs } from './style';

export function SessionProductsDogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('NameAscending');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <section aria-label="Seção dos produtos para cachorros">
      <ProductsDogs>
        <h1>Produtos para cachorro</h1>
        <div className="filter">
          <input
            type="text"
            placeholder="Digite o nome do produto"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <div className="select">
            <h2>Ordenar por:</h2>
            <select value={selectedFilter} onChange={handleFilterChange}>
              <option value="NameAscending">Nome de A-Z</option>
              <option value="NameDescending">Nome de Z-A</option>
              <option value="PriceAscending">Menor Preço</option>
              <option value="PriceDescending">Maior Preço</option>
            </select>
          </div>
        </div>
        <CardProductsForDogs
          searchTerm={searchTerm}
          selectedFilter={selectedFilter}
        />
      </ProductsDogs>
    </section>
  );
}
