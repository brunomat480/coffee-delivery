import { ShoppingCart } from '@phosphor-icons/react';
import traditionalExpress from '../../assets/cafes/traditional-express.svg';
import { useTheme } from 'styled-components';
import { ProductCardContainer } from './sytyles';

export function ProductCard() {
  const { colors } = useTheme();

  return (
    <ProductCardContainer>
      <img src={traditionalExpress} alt="" />

      <div>
        <span>tradicional</span>
      </div>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <div>
        <span>9.90</span>
        <div>
          <div>
            <button type='button'>-</button>
            <span>1</span>
            <button type='button'>+</button>
          </div>

          <button type='button'>
            <ShoppingCart color={colors['base-card']} size={22} weight='fill' />
          </button>
        </div>
      </div>
    </ProductCardContainer>
  );
}
