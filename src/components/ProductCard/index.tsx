import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { ButtonAddProduct, Price, ProductCardContainer, ProductControls, QuantityProducts, Type, TypeGroups } from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { useState } from 'react';


interface ProductType {
  id: number
  image: string;
  name: string;
  types: string[];
  description: string;
  price: number;
}
interface ProductCardProps {
  product: ProductType;
  onAddProductCart: () => void;
  onProductQuantityControl: (quantity: number) => void
}

export function ProductCard({
  product,
  onAddProductCart,
  onProductQuantityControl
}: ProductCardProps) {
  const { colors } = useTheme();

  const [quantityProducts, setQuantityProducts] = useState(1);

  function handleAddQuantityOfProductToCart() {
    const addNewQuantity = quantityProducts + 1;
    setQuantityProducts(addNewQuantity);
    onProductQuantityControl(addNewQuantity);
  }

  function handleRemoveProductQuantityFromCart() {
    const removeNewQuantity = quantityProducts !== 1 ? quantityProducts - 1 : 1;

    setQuantityProducts(removeNewQuantity);

    onProductQuantityControl(removeNewQuantity);
  }

  function handleAddProduct() {
    onAddProductCart();
    setQuantityProducts(1);
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
