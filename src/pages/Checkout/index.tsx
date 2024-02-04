import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from '@phosphor-icons/react';
import { ButtonContainer, ButtonRemover, Cart, CartContainer, CheckoutContainer, Form, FormContainer, FormGroup, FormPaymentContiner, FormPaymentGroup, InputGroup, PaymentButton, PricesGroup, Product, QuantityProducts } from './styles';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import coffee from '/cafes/traditional-express.svg';

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

  const [formPayment, setFormPayment] = useState('');

  const { register } = useForm();

  function handleSelectingPaymentMethod(payment: string) {
    setFormPayment(payment);
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
            <Product>
              <div className="control-product">
                <img src={coffee} alt="" />

                <div>
                  <h3>Expresso Tradicional</h3>

                  <div className="button-group">
                    <QuantityProducts>
                      <button type="button">
                        <Minus color={colors.purple} size={14} />
                      </button>
                      <span>1</span>
                      <button type="button">
                        <Plus color={colors.purple} size={14} />
                      </button>
                    </QuantityProducts>

                    <ButtonRemover type="button">
                      <Trash color={colors.purple} size={16} />
                      remover
                    </ButtonRemover>
                  </div>
                </div>
              </div>

              <span>R$ 9,90</span>
            </Product>

            <PricesGroup>
              <div>
                <small>Total de itens</small>
                <span>R$ 29,70</span>
              </div>

              <div>
                <small>Entrega</small>
                <span>R$ 3,50</span>
              </div>

              <div className="total">
                <small>Total</small>
                <span>R$ 33,20</span>
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
