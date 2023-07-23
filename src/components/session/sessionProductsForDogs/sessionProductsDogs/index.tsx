import { CardProductsForDogs } from '../../../card/cardProductsDogs';
import { ProductsDogs } from './style';

export function SessionProductsDogs() {
  return (
    <section aria-label="Seção dos produtos para cachorros">
      <ProductsDogs>
        <h1>Produtos para cachorro</h1>
        <CardProductsForDogs />
      </ProductsDogs>
    </section>
  );
}