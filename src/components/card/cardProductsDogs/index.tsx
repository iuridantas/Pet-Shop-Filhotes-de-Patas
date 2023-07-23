import { useState } from 'react';
import { CardSession, IconContainer, LeftIcon, RightIcon } from './style';

const products = [
  {
    name: 'Bebedouro Bilha e Comedouro Chalesco',
    colors: [
      {
        photo: '/img/bebedouro_e_comedouro_chalesco_bico_bilha_azul.png',
        color: 'Azul',
      },
      {
        photo: '/img/bebedouro_e_comedouro_chalesco_bico_bilha_rosa.png',
        color: 'Rosa',
      },
    ],
    price: 'R$ 100,00',
    installments: 'ou 2x de R$ 50,00',
  },
  {
    name: 'Bebedouro Bilha e Comedouro MMA Pet',
    colors: [
      {
        photo: '/img/bebedouro_e_comedouro_mmapet_bico_bilha_azul.png',
        color: 'Azul',
      },
      {
        photo: '/img/bebedouro_e_comedouro_mmapet_bico_bilha_rosa.png',
        color: 'Rosa',
      },
      {
        photo: '/img/bebedouro_e_comedouro_mmapet_bico_bilha_vermelho.png',
        color: 'Vermelho',
      },
    ],
    price: 'R$ 100,00',
    installments: 'ou 2x de R$ 50,00',
  },
  {
    name: 'Bebedouro Portátil Aqua Dog',
    colors: [
      {
        photo: '/img/bebedouro_portátil_aquadog_azul.png',
        color: 'Azul',
      },
      {
        photo: '/img/bebedouro_portátil_aquadog_beje.png',
        color: 'Rosa',
      },
    ],
    price: 'R$ 100,00',
    installments: 'ou 2x de R$ 50,00',
  },
  {
    photo: '/img/bedog_adestra.png',
    name: 'Kit Educador Sanitário Be Dog',
    price: 'R$ 100,00',
    installments: 'ou 2x de R$ 50,00',
  },
  {
    photo: '/img/cortador_com_lixa.png',
    name: 'Kit Cortador de Unhas e Lixa',
    price: 'R$ 100,00',
    installments: 'ou 2x de R$ 50,00',
  },
  {
    photo: '/img/curinfec.png',
    name: 'Antibiótico Provets Curinfec',
    price: 'R$ 100,00',
    installments: 'ou 2x de R$ 50,00',
  },
];

export function CardProductsForDogs() {
  const [productColors, setProductColors] = useState(
    products.map((product) => ({
      productId: product.name,
      currentColorIndex: 0,
    })),
  );

  const handleNextColor = (productId: string, colorsLength: number) => {
    setProductColors((prevProductColors) =>
      prevProductColors.map((productColor) =>
        productColor.productId === productId
          ? {
              ...productColor,
              currentColorIndex:
                (productColor.currentColorIndex + 1) % colorsLength,
            }
          : productColor,
      ),
    );
  };

  const handlePreviousColor = (productId: string, colorsLength: number) => {
    setProductColors((prevProductColors) =>
      prevProductColors.map((productColor) =>
        productColor.productId === productId
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
                      handlePreviousColor(product.name, product.colors.length)
                    }
                  />
                  <RightIcon
                    onClick={() =>
                      handleNextColor(product.name, product.colors.length)
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
