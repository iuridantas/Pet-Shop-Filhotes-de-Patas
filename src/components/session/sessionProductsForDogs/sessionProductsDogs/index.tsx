import { useState } from 'react';
import { CardProductsForDogs } from '../../../card/cardProductsDogs';
import { ProductsDogs } from './style';

export function SessionProductsDogs() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section aria-label="Seção dos produtos para cachorros">
      <ProductsDogs>
        <h1>Produtos para cachorro</h1>
        <input
          type="text"
          placeholder="Digite o nome do produto"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <CardProductsForDogs searchTerm={searchTerm} />
      </ProductsDogs>
    </section>
  );
}
