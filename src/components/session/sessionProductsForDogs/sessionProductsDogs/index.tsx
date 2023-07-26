import { useState } from 'react';
import { CardProductsForDogs } from '../../../card/cardProductsDogs';
import { ProductsDogs } from './style';

export function SessionProductsDogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <section aria-label="Seção dos produtos para cachorros">
      <ProductsDogs>
        <h1>Produtos para cachorro</h1>
        <div className="filter">
          <div className="select">
            <h2>Categorias:</h2>
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="">Escolha</option>
              <option value="Ração">Ração</option>
              <option value="Petiscos e Ossos">Petiscos e Ossos</option>
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
              <option value="Portões e Grades">Portões e Grades</option>
              <option value="Roupas">Roupas</option>
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
        <div className="teste">
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
        />
      </ProductsDogs>
    </section>
  );
}
