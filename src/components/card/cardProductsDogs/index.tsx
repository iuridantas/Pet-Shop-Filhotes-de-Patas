import { useState } from 'react';
import { CardSession, IconContainer, LeftIcon, RightIcon } from './style';

const products = [
  {
    name: 'Bebedouro Bilha e Comedouro',
    brand: 'Chalesco',
    colors: [
      {
        photo: '/img/bebedouro_e_comedouro_chalesco_bico_bilha_rosa.png',
      },
      {
        photo: '/img/bebedouro_e_comedouro_chalesco_bico_bilha_azul.png',
      },
    ],
    price: 'R$ 100,00',
    installments: 'ou 2x de R$ 50,00',
  },
  {
    name: 'Bebedouro Bilha e Comedouro',
    brand: 'MMA Pet',
    colors: [
      {
        photo: '/img/bebedouro_e_comedouro_mmapet_bico_bilha_azul.png',
      },
      {
        photo: '/img/bebedouro_e_comedouro_mmapet_bico_bilha_rosa.png',
      },
      {
        photo: '/img/bebedouro_e_comedouro_mmapet_bico_bilha_vermelho.png',
      },
    ],
    price: 'R$ 100,00',
    installments: 'ou 2x de R$ 50,00',
  },
  {
    name: 'Bebedouro Portátil',
    brand: 'Aqua Dog',
    colors: [
      {
        photo: '/img/bebedouro_portátil_aquadog_azul.png',
      },
      {
        photo: '/img/bebedouro_portátil_aquadog_beje.png',
      },
    ],
    price: 'R$ 100,00',
    installments: 'ou 2x de R$ 50,00',
  },
  {
    photo: '/img/bedog_adestra.png',
    name: 'Kit Educador Sanitário',
    brand: 'Be Dog',
    price: 'R$ 100,00',
    installments: 'ou 2x de R$ 50,00',
  },
  {
    photo: '/img/cortador_com_lixa.png',
    name: 'Kit Cortador de Unhas e Lixa',
    brand: 'Weemsbox',
    price: 'R$ 100,00',
    installments: 'ou 2x de R$ 50,00',
  },
  {
    photo: '/img/escova_madeira_caracol.png',
    name: 'Escova de Madeira',
    brand: 'Caracol',
    price: 'R$ 100,00',
    installments: 'ou 2x de R$ 50,00',
  },
  {
    photo: '/img/curinfec.png',
    name: 'Antibiótico Provets',
    brand: 'Curinfec',
    price: 'R$ 100,00',
    installments: 'ou 2x de R$ 50,00',
  },
];

export function CardProductsForDogs() {
  const [productColors, setProductColors] = useState(
    products.map((product) => ({
      productId: { name: product.name, brand: product.brand },
      currentColorIndex: 0,
    })),
  );

  const handleNextColor = (
    name: string,
    brand: string,
    colorsLength: number,
  ) => {
    setProductColors((prevProductColors) =>
      prevProductColors.map((productColor) =>
        productColor.productId.name === name &&
        productColor.productId.brand === brand
          ? {
              ...productColor,
              currentColorIndex:
                (productColor.currentColorIndex + 1) % colorsLength,
            }
          : productColor,
      ),
    );
  };

  const handlePreviousColor = (
    name: string,
    brand: string,
    colorsLength: number,
  ) => {
    setProductColors((prevProductColors) =>
      prevProductColors.map((productColor) =>
        productColor.productId.name === name &&
        productColor.productId.brand === brand
          ? {
              ...productColor,
              currentColorIndex:
                (productColor.currentColorIndex - 1 + colorsLength) %
                colorsLength,
            }
          : productColor,
      ),
    );
  };

  return (
    <section aria-label="card sobre produtos para cachorro disponivel para venda">
      {products.map((product, index) => (
        <CardSession key={index}>
          <h2>{product.name}</h2>
          <h2>{product.brand}</h2>
          {product.colors && product.colors.length > 0 ? (
            <div>
              <img
                src={
                  product.colors[productColors[index].currentColorIndex].photo
                }
                alt={product.name}
              />
              {product.colors.length > 1 && (
                <IconContainer>
                  <LeftIcon
                    onClick={() =>
                      handlePreviousColor(
                        product.name,
                        product.brand,
                        product.colors.length,
                      )
                    }
                  />
                  <RightIcon
                    onClick={() =>
                      handleNextColor(
                        product.name,
                        product.brand,
                        product.colors.length,
                      )
                    }
                  />
                </IconContainer>
              )}
            </div>
          ) : (
            <img src={product.photo} alt={product.name} />
          )}
          <div className="information">
            <h3>{product.price}</h3>
            <h4>{product.installments}</h4>
          </div>
        </CardSession>
      ))}
    </section>
  );
}
