import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { ButtonAddProduct, Price, ProductCardContainer, ProductControls, Quantity, Type } from './styles';
import { formatCurrency } from '../../utils/formatCurrency';

interface ProductCardProps {
  image: string;
  name: string;
  types: string[];
  description: string;
  price: number;
}

export function ProductCard({ image, name, types, description, price }: ProductCardProps) {
  const { colors } = useTheme();

  return (
    <ProductCardContainer>
      <img src={image} />

      <div className="types">
        {types.map((type) => (
          <Type key={Math.random()}>
            {type}
          </Type>
        ))}
      </div>


      <h3>
        {name}
      </h3>

      <p>{description}</p>

      <ProductControls>
        <Price><small>R$</small> {formatCurrency(price)}</Price>

        <div>
          <Quantity>
            <button type="button">
              <Minus color={colors.purple} size={14} />
            </button>
            <span>1</span>
            <button type="button">
              <Plus color={colors.purple} size={14} />
            </button>
          </Quantity>

          <ButtonAddProduct type="button">
            <ShoppingCart color={colors['base-card']} size={22} weight='fill' />
          </ButtonAddProduct>
        </div>
      </ProductControls>
    </ProductCardContainer>
  );
}
