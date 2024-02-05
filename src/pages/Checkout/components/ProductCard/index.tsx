import { Minus, Plus, Trash } from '@phosphor-icons/react';
import { Product } from '../../../../context/ProductsContext';
import { ButtonRemover, ProductContainer, QuantityProducts } from './styles';
import { useTheme } from 'styled-components';
import { formatCurrency } from '../../../../utils/formatCurrency';

interface ProductCard {
  product: Product | null;
  setRemoveQuantityProduct: (id: number, quantity: number) => void;
  setAddQuantityProduct: (id: number, quantity: number) => void;
  setRemoveProduct: (id: number) => void;
}

export function ProductCard({
  product,
  setAddQuantityProduct,
  setRemoveQuantityProduct,
  setRemoveProduct
}: ProductCard) {
  const { colors } = useTheme();

  return (
    <ProductContainer key={product?.id}>
      <div className="control-product">
        <img src={product?.image} alt="" />

        <div>
          <h3>{product?.name}</h3>

          <div className="button-group">
            <QuantityProducts>
              <button type="button" onClick={() => setRemoveQuantityProduct(product!.id, product!.quantity)}>
                <Minus color={colors.purple} size={14} />
              </button>
              <span>{product?.quantity}</span>
              <button type="button" onClick={() => setAddQuantityProduct(product!.id, product!.quantity)}>
                <Plus color={colors.purple} size={14} />
              </button>
            </QuantityProducts>

            <ButtonRemover type="button" onClick={() => setRemoveProduct(product!.id)}>
              <Trash color={colors.purple} size={16} />
              remover
            </ButtonRemover>
          </div>
        </div>
      </div>

      <span>R$ {formatCurrency(product!.price * product!.quantity)}</span>
    </ProductContainer>
  );
}
