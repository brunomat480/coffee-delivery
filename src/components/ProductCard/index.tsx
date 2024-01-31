import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react';
import traditionalExpress from '../../assets/cafes/traditional-express.svg';
import { useTheme } from 'styled-components';
import { ButtonAddProduct, Price, ProductCardContainer, ProductControls, Quantity, Type } from './styles';
import { formatCurrency } from '../../utils/formatCurrency';

export function ProductCard() {
  const { colors } = useTheme();

  return (
    <ProductCardContainer>
      <img src={traditionalExpress} alt="" />

      <Type>
        tradicional
      </Type>

      <h3>
        Expresso Tradicional
      </h3>

      <p>O tradicional café feito com água quente e grãos moídos</p>

      <ProductControls>
        <Price><small>R$</small> {formatCurrency(9.90)}</Price>

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
