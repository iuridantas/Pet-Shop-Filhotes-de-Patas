import { useState } from 'react';
import {
  ButtonIcon,
  CardSession,
  FullScreenCard,
  IconLeft,
  IconRight,
  ImageContainer,
} from './style';
import productsDogs from '../../products/dogs';

export function CardProductsForDogs({ searchTerm, selectedFilter }: { searchTerm: string, selectedFilter: string }) {
  const [productColors, setProductColors] = useState(
    productsDogs.map((product) => ({
      productId: product.id,
      currentColorIndex: 0,
    })),
  );

  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null,
  );

  const sortProducts = (products: any[]) => {
    switch (selectedFilter) {
      case 'NameAscending':
        return products.slice().sort((a, b) => a.name.localeCompare(b.name));
      case 'NameDescending':
        return products.slice().sort((a, b) => b.name.localeCompare(a.name));
      case 'PriceAscending':
        return products.slice().sort((a, b) => a.price - b.price);
      case 'PriceDescending':
        return products.slice().sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const handleCardClick = (productId: number) => {
    const index = productsDogs.findIndex((product) => product.id === productId);
    setSelectedCardIndex(index);
  };

  const handleFullScreenCardClose = () => {
    setSelectedCardIndex(null);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleNextColor = (productId: number, colorsLength: number) => {
    setProductColors((prevProductColors) =>
      prevProductColors.map((productColor) =>
        productColor.productId === productId
          ? {
              ...productColor,
              currentColorIndex:
                colorsLength > 0
                  ? (productColor.currentColorIndex + 1) % colorsLength
                  : 0,
            }
          : productColor,
      ),
    );
  };

  const handlePreviousColor = (productId: number, colorsLength: number) => {
    setProductColors((prevProductColors) =>
      prevProductColors.map((productColor) =>
        productColor.productId === productId
          ? {
              ...productColor,
              currentColorIndex:
                colorsLength > 0
                  ? (productColor.currentColorIndex - 1 + colorsLength) %
                    colorsLength
                  : 0,
            }
          : productColor,
      ),
    );
  };

  return (
    <section aria-label="card sobre produtos para cachorro disponível para venda">
      {sortProducts(productsDogs)
        .filter(
          (product) =>
            searchTerm === '' ||
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        .map((product) => (
          <CardSession key={product.id}>
            <h2>{product.name}</h2>
            <h2>{product.brand}</h2>
            <ImageContainer>
              {product.colors &&
              Array.isArray(product.colors) &&
              product.colors.length > 0 ? (
                <>
                  <img
                    src={
                      product.colors[
                        productColors.find((p) => p.productId === product.id)
                          ?.currentColorIndex || 0
                      ]?.photo
                    }
                    alt={product.name}
                    onClick={() => handleCardClick(product.id)}
                  />
                  <IconLeft
                    onClick={() =>
                      handlePreviousColor(product.id, product.colors!.length)
                    }
                  />
                  <IconRight
                    onClick={() =>
                      handleNextColor(product.id, product.colors!.length)
                    }
                  />
                </>
              ) : (
                <img
                  src={product.photo}
                  alt={product.name}
                  onClick={() => handleCardClick(product.id)}
                />
              )}
            </ImageContainer>
            <div className="information">
            <h3>{formatPrice(product.price)}</h3>
              <h4>{product.installments}</h4>
            </div>
          </CardSession>
        ))}
      {selectedCardIndex !== null && (
        <FullScreenCard>
          <img
            src={
              productsDogs[selectedCardIndex].colors
                ? productsDogs[selectedCardIndex]?.colors?.[
                    productColors[selectedCardIndex]?.currentColorIndex
                  ]?.photo
                : productsDogs[selectedCardIndex].photo
            }
            alt={productsDogs[selectedCardIndex].name}
          />
          <ButtonIcon onClick={handleFullScreenCardClose} />
        </FullScreenCard>
      )}
    </section>
  );
}
