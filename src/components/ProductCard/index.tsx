import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { ButtonAddProduct, Price, ProductCardContainer, ProductControls, QuantityProducts, Type, TypeGroups } from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductsContext';


interface ProductType {
  id: number
  image: string;
  name: string;
  types: string[];
  description: string;
  price: number;
  quantity: number
}
interface ProductCardProps {
  product: ProductType;
  notify: (nameProduct: string) => void;
}

export function ProductCard({
  product,
  notify
}: ProductCardProps) {
  const { colors } = useTheme();
  const { handleAddProductCart, handleProductQuantityControl } = useContext(ProductContext);

  const [quantityProducts, setQuantityProducts] = useState(1);

  function handleAddQuantityOfProductToCart() {
    const addNewQuantity = quantityProducts + 1;
    setQuantityProducts(addNewQuantity);
    handleProductQuantityControl(addNewQuantity);
  }

  function handleRemoveProductQuantityFromCart() {
    const removeNewQuantity = quantityProducts !== 1 ? quantityProducts - 1 : 1;

    setQuantityProducts(removeNewQuantity);

    handleProductQuantityControl(removeNewQuantity);
  }

  function handleAddProduct() {
    handleAddProductCart(product);
    setQuantityProducts(1);
    notify(product.name);
  }

  return (
    <ProductCardContainer>
      <img src={product.image} />

      <TypeGroups>
        {product.types.map((type) => (
          <Type key={Math.random()}>
            {type}
          </Type>
        ))}
      </TypeGroups>

      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <ProductControls>
        <Price><small>R$</small> {formatCurrency(product.price)}</Price>

        <div>
          <QuantityProducts>
            <button type="button" onClick={handleRemoveProductQuantityFromCart}>
              <Minus color={colors.purple} size={14} />
            </button>
            <span>{quantityProducts}</span>
            <button type="button" onClick={handleAddQuantityOfProductToCart}>
              <Plus color={colors.purple} size={14} />
            </button>
          </QuantityProducts>

          <ButtonAddProduct type="button" onClick={handleAddProduct}>
            <ShoppingCart
              color={colors['base-card']}
              size={22}
              weight='fill'
            />
          </ButtonAddProduct>
        </div>
      </ProductControls>
    </ProductCardContainer>
  );
}
