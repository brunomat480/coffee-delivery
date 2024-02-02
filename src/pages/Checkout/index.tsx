import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from '@phosphor-icons/react';
import { CheckoutContainer, Form, FormContainer, FormGroup, FormPaymentContiner, FormPaymentGroup, PaymentButton } from './styles';
import { useTheme } from 'styled-components';
import { useState } from 'react';

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

  function handleSelectingPaymentMethod(payment: string) {
    setFormPayment(payment);
  }

  console.log(formPayment);

  return (
    <CheckoutContainer>
      <h2>Complete seu pedido</h2>

      <FormGroup>
        <FormContainer>
          <header>
            <MapPinLine color={colors['yellow-dark']} size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <Form>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <div>
              <input type="text" placeholder="Número" />
              <div className="input">
                <input type="text" placeholder="Complemento" />
                <small>opcional</small>
              </div>
            </div>
            <div className="location">
              <div>
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
              </div>
              <input type="text" placeholder="UF" maxLength={2} />
            </div>
          </Form>
        </FormContainer>

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
      </FormGroup>
    </CheckoutContainer>
  );
}
