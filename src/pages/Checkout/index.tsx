import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from '@phosphor-icons/react';
import { ButtonContainer, ButtonRemover, Cart, CartContainer, CheckoutContainer, Form, FormContainer, FormGroup, FormPaymentContiner, FormPaymentGroup, InputGroup, PaymentButton, PricesGroup, Product, QuantityProducts } from './styles';
import { useTheme } from 'styled-components';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ProductContext } from '../../context/ProductsContext';
import { formatCurrency } from '../../utils/formatCurrency';

const paymentOptions = [
  {
    icon: <CreditCard color='#8047F8' size={16} />,
    name: 'cartão de crédito',
  },
  {
    icon: <Bank color='#8047F8' size={16} />,
    name: 'cartão de débito',
  },
  {
    icon: <Money color='#8047F8' size={16} />,
    name: 'dinheiro',
  },
];

export function Checkout() {
  const { colors } = useTheme();
  const { productCart, setControlProductCart, setUpdateProductCard } = useContext(ProductContext);

  const [formPayment, setFormPayment] = useState('');

  const { register } = useForm();


  const totalItens = productCart.reduce((accumulator, product) => {
    return accumulator + product!.price * product!.quantity;
  }, 0);

  function handleSelectingPaymentMethod(payment: string) {
    setFormPayment(payment);
  }

  function handleRemoveProduct(id: number) {
    const filterProduct = productCart.filter((product) => product?.id !== id);

    setControlProductCart(filterProduct);
  }

  function handleAddQuantityProduct(id: number, quantity: number) {
    const updateProductCart = productCart.map((product) => product?.id === id ? { ...product, quantity: quantity + 1 } : product);

    setUpdateProductCard(updateProductCart);
  }

  function handleRemoveQuantityProduct(id: number, quantity: number) {
    const transformedValue = quantity !== 1 ? quantity - 1 : 1;
    const updateProductCart = productCart.map((product) => product?.id === id ? { ...product, quantity: transformedValue } : product);

    setUpdateProductCard(updateProductCart);
  }

  return (
    <CheckoutContainer>
      <FormGroup>
        <FormContainer>
          <h2>Complete seu pedido</h2>
          <Form>
            <header>
              <MapPinLine color={colors['yellow-dark']} size={22} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>

            <InputGroup>
              <input
                placeholder="CEP"
                {...register('cep')}
              />
              <input
                placeholder="Rua"
                {...register('road')}
              />
              <div>
                <input
                  type="number"
                  placeholder="Número"
                  {...register('number', { valueAsNumber: true })}
                />
                <div className="input">
                  <input
                    placeholder="Complemento"
                    {...register('complement')}
                  />
                  <small>opcional</small>
                </div>
              </div>
              <div className="location">
                <div>
                  <input
                    placeholder="Bairro"
                    {...register('neighborhood')}
                  />
                  <input
                    placeholder="Cidade"
                    {...register('city')}
                  />
                </div>
                <input
                  placeholder="UF"
                  minLength={2}
                  maxLength={2}
                  {...register('fu')}
                />
              </div>
            </InputGroup>

          </Form>

          <FormPaymentContiner>
            <header>
              <CurrencyDollar color={colors.purple} size={22} />
              <div>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </header>

            <FormPaymentGroup>
              {paymentOptions.map((option) => (
                <PaymentButton
                  key={option.name}
                  type="button"
                  onClick={() => handleSelectingPaymentMethod(option.name)}
                  $payment={formPayment === option.name}
                >
                  {option.icon}
                  {option.name}
                </PaymentButton>
              ))}
            </FormPaymentGroup>
          </FormPaymentContiner>
        </FormContainer>

        <CartContainer>
          <h2>Cafés selecionados</h2>

          <Cart>
            {productCart.map((product) => (
              <Product key={product?.id}>
                <div className="control-product">
                  <img src={product?.image} alt="" />

                  <div>
                    <h3>{product?.name}</h3>

                    <div className="button-group">
                      <QuantityProducts>
                        <button type="button" onClick={() => handleRemoveQuantityProduct(product!.id, product!.quantity)}>
                          <Minus color={colors.purple} size={14} />
                        </button>
                        <span>{product?.quantity}</span>
                        <button type="button" onClick={() => handleAddQuantityProduct(product!.id, product!.quantity)}>
                          <Plus color={colors.purple} size={14} />
                        </button>
                      </QuantityProducts>

                      <ButtonRemover type="button" onClick={() => handleRemoveProduct(product!.id)}>
                        <Trash color={colors.purple} size={16} />
                        remover
                      </ButtonRemover>
                    </div>
                  </div>
                </div>

                <span>R$ {formatCurrency(product!.price * product!.quantity)}</span>
              </Product>
            ))}

            <PricesGroup>
              <div>
                <small>Total de itens</small>
                <span>
                  R$ {formatCurrency(totalItens)}
                </span>
              </div>

              <div>
                <small>Entrega</small>
                <span>{productCart.length === 0 ? 'R$ 0,00' : 'R$ 3,50'}</span>
              </div>

              <div className="total">
                <small>Total</small>
                <span>R$ {productCart.length === 0 ? formatCurrency(totalItens) : formatCurrency(totalItens + 3.50)}</span>
              </div>
            </PricesGroup>

            <ButtonContainer type="submit">
              confirmar pedido
            </ButtonContainer>
          </Cart>
        </CartContainer>
      </FormGroup>
    </CheckoutContainer >
  );
}
