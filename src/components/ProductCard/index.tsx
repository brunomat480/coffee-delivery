import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { ButtonAddProduct, Price, ProductCardContainer, ProductControls, QuantityProducts, Type, TypeGroups } from './styles';
import { formatCurrency } from '../../utils/formatCurrency';

interface ProductCardProps {
  image: string;
  name: string;
  types: string[];
  description: string;
  price: number;
}

export function ProductCard({
  image,
  name,
  types,
  description,
  price
}: ProductCardProps) {
  const { colors } = useTheme();

  return (
    <ProductCardContainer>
      <img src={image} />

      <TypeGroups>
        {types.map((type) => (
          <Type key={Math.random()}>
            {type}
          </Type>
        ))}
      </TypeGroups>

      <h3>{name}</h3>
      <p>{description}</p>

      <ProductControls>
        <Price><small>R$</small> {formatCurrency(price)}</Price>

        <div>
          <QuantityProducts>
            <button type="button">
              <Minus color={colors.purple} size={14} />
            </button>
            <span>1</span>
            <button type="button">
              <Plus color={colors.purple} size={14} />
            </button>
          </QuantityProducts>

          <ButtonAddProduct type="button">
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
