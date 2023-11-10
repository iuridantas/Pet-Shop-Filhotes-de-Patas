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
import productsDogs from '../../json/products/productsDogs.json';

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

export function CardProductsForDogs({
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
    productsDogs.map((product) => ({
      productId: product.id,
      currentColorIndex: 0,
    })),
  );

  const FilterTypes = {
    NAME_ASCENDING: 'NameAscending',
    NAME_DESCENDING: 'NameDescending',
    PRICE_ASCENDING: 'PriceAscending',
    PRICE_DESCENDING: 'PriceDescending',
  };

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
          setImagesLoaded(true);
        }
      };
    });
  };

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

    setShuffledProducts(shuffleArray(productsDogs));
  }, []);

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

  const sortProducts = (products: any[]) => {
    let sortedProducts = [...products];
    switch (selectedFilter) {
      case FilterTypes.NAME_ASCENDING:
        sortedProducts = sortedProducts.sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        break;
      case FilterTypes.NAME_DESCENDING:
        sortedProducts = sortedProducts.sort((a, b) =>
          b.name.localeCompare(a.name),
        );
        break;
      case FilterTypes.PRICE_ASCENDING:
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case FilterTypes.PRICE_DESCENDING:
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
    const index = productsDogs.findIndex((product) => product.id === productId);
    setSelectedCardIndex(index);
  };

  const handleFullScreenCardClose = () => {
    setSelectedCardIndex(null);
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

  const filteredProducts = sortProducts(shuffledProducts).filter(
    (product) =>
      (searchTerm === '' ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === '' || product.category === selectedCategory),
  );

  return (
    <section aria-label="card sobre produtos para cachorro disponível para venda">
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
                    product.colors[
                      productColors.find((p) => p.productId === product.id)
                        ?.currentColorIndex || 0
                    ]?.photo
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
