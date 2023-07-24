import { useState } from 'react';
import { CardSession, IconLeft, IconRight, ImageContainer } from './style';
import productsDogs from '../../products/dogs';

export function CardProductsForDogs() {
  const [productColors, setProductColors] = useState(
    productsDogs.map((product) => ({
      productId: product.id,
      currentColorIndex: 0,
    })),
  );

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
      {productsDogs.map((product) => (
        <CardSession key={product.id}>
          <h2>{product.name}</h2>
          <h2>{product.brand}</h2>
          <ImageContainer>
            {product.colors && Array.isArray(product.colors) && product.colors.length > 0 ? (
              <>
                <img
                  src={
                    product.colors[
                      productColors.find((p) => p.productId === product.id)?.currentColorIndex || 0
                    ]?.photo
                  }
                  alt={product.name}
                />
                <IconLeft onClick={() => handlePreviousColor(product.id, product.colors!.length)} />
                <IconRight onClick={() => handleNextColor(product.id, product.colors!.length)} />
              </>
            ) : (
              <img src={product.photo} alt={product.name} />
            )}
          </ImageContainer>
          <div className="information">
            <h3>{product.price}</h3>
            <h4>{product.installments}</h4>
          </div>
        </CardSession>
      ))}
    </section>
  );
}
