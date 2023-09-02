import { useEffect, useState } from 'react';
import {
  ButtonIcon,
  CardSession,
  CardSessionError,
  FullScreenCard,
  IconLeft,
  IconMagnifyingGlass,
  IconRight,
  ImageContainer,
} from './style';
import productsCats from '../../json/products/productsCats.json';

interface Product {
  id: number;
  name: string;
  brand: string;
  colors?: {
    photo: string;
  }[];
  price: number;
  installments: string;
  photo?: string;
  category: string;
}

export function CardProductsForCats({
  searchTerm,
  selectedFilter,
  selectedCategory,
  itemsToShow,
}: {
  searchTerm: string;
  selectedFilter: string;
  selectedCategory: string;
  itemsToShow: number;
}) {
  const [productColors, setProductColors] = useState(
    productsCats.map((product) => ({
      productId: product.id,
      currentColorIndex: 0,
    })),
  );

  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null,
  );

  const [shuffledProducts, setShuffledProducts] = useState<Product[]>([]);

  const [imagesLoaded, setImagesLoaded] = useState(false);

  const preloadImages = (imageUrls: string[]) => {
    const loadedImages = new Set<string>();

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedImages.add(url);
        if (loadedImages.size === imageUrls.length) {
          // All images are loaded
          setImagesLoaded(true);
        }
      };
    });
  };

  useEffect(() => {
    const imageUrls = shuffledProducts.reduce<string[]>((urls, product) => {
      if (product.colors) {
        urls.push(...product.colors.map((color) => color.photo));
      } else if (product.photo) {
        urls.push(product.photo);
      }
      return urls;
    }, []);

    preloadImages(imageUrls);
  }, [selectedFilter, selectedCategory, shuffledProducts]);

  useEffect(() => {
    const shuffleArray = (array: Product[]) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[randomIndex]] = [
          shuffledArray[randomIndex],
          shuffledArray[i],
        ];
      }
      return shuffledArray;
    };

    setShuffledProducts(shuffleArray(productsCats));
  }, []);

  useEffect(() => {
    const preloadImages = (imageUrls: string[]) => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    const imageUrls = shuffledProducts.reduce<string[]>((urls, product) => {
      if (product.colors) {
        urls.push(...product.colors.map((color) => color.photo));
      } else if (product.photo) {
        urls.push(product.photo);
      }
      return urls;
    }, []);

    preloadImages(imageUrls);
  }, [selectedFilter, selectedCategory, shuffledProducts]);

  const sortProducts = (products: any[]) => {
    let sortedProducts = [...products];
    switch (selectedFilter) {
      case 'NameAscending':
        sortedProducts = sortedProducts.sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        break;
      case 'NameDescending':
        sortedProducts = sortedProducts.sort((a, b) =>
          b.name.localeCompare(a.name),
        );
        break;
      case 'PriceAscending':
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'PriceDescending':
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    if (selectedCategory !== '') {
      sortedProducts = sortedProducts.filter(
        (product) => product.category === selectedCategory,
      );
    }

    return sortedProducts;
  };

  const handleCardClick = (productId: number) => {
    const index = productsCats.findIndex((product) => product.id === productId);
    setSelectedCardIndex(index);
  };

  const handleFullScreenCardClose = () => {
    setSelectedCardIndex(null);
  };

  const filteredProducts = sortProducts(shuffledProducts).filter(
    (product) =>
      (searchTerm === '' ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === '' || product.category === selectedCategory),
  );

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
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
    <section aria-label="card sobre produtos para gato disponível para venda">
      {filteredProducts.length === 0 && (
        <CardSessionError>
          <img
            src="/img/no-product.png"
            alt="Imagem do erro de produto não encontrado"
          />
        </CardSessionError>
      )}
      {filteredProducts.slice(0, itemsToShow).map((product) => (
        <CardSession key={product.id}>
          <h2>{product.name}</h2>
          <h2 className="brand">{product.brand}</h2>
          <ImageContainer>
            {product.colors &&
            Array.isArray(product.colors) &&
            product.colors.length > 0 ? (
              <>
                <img
                  src={
                    product.colors &&
                    Array.isArray(product.colors) &&
                    product.colors.length > 0
                      ? product.colors[
                          productColors.find((p) => p.productId === product.id)
                            ?.currentColorIndex || 0
                        ]?.photo
                      : product.photo
                  }
                  alt={product.name}
                  className={`${imagesLoaded ? '' : 'image-loading'}`}
                />
                <IconMagnifyingGlass
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
              <>
                <img
                  src={product.photo}
                  alt={product.name}
                  className={`${imagesLoaded ? '' : 'image-loading'}`}
                />
                <IconMagnifyingGlass
                  onClick={() => handleCardClick(product.id)}
                />
              </>
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
              productsCats[selectedCardIndex].colors
                ? productsCats[selectedCardIndex]?.colors?.[
                    productColors[selectedCardIndex]?.currentColorIndex
                  ]?.photo
                : productsCats[selectedCardIndex].photo
            }
            alt={productsCats[selectedCardIndex].name}
          />
          <ButtonIcon onClick={handleFullScreenCardClose} />
        </FullScreenCard>
      )}
    </section>
  );
}
