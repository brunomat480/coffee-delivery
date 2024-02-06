import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from '@phosphor-icons/react';
import {
  Form,
  FormContainer,
  FormPaymentContiner,
  FormPaymentGroup,
  InputGroup,
  PaymentButton
} from './styles';
import { useTheme } from 'styled-components';
import { useFormContext } from 'react-hook-form';

interface FormProps {
  isSubmitDisabled: boolean;
  formPayment: string
  setSelectingPaymentMethod: (payment: string) => void
}

export function PurchaseForm({ isSubmitDisabled, setSelectingPaymentMethod, formPayment }: FormProps) {
  const { colors } = useTheme();
  const { register } = useFormContext();

  return (
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
            disabled={isSubmitDisabled}
            {...register('cep')}
          />
          <input
            placeholder="Rua"
            disabled={isSubmitDisabled}
            {...register('road')}
          />
          <div>
            <input
              type="number"
              placeholder="Número"
              disabled={isSubmitDisabled}
              {...register('number', { valueAsNumber: true })}
            />
            <div className="input">
              <input
                placeholder="Complemento"
                disabled={isSubmitDisabled}
                {...register('complement')}
              />
              <small>opcional</small>
            </div>
          </div>
          <div className="location">
            <div>
              <input
                placeholder="Bairro"
                disabled={isSubmitDisabled}
                {...register('neighborhood')}
              />
              <input
                placeholder="Cidade"
                disabled={isSubmitDisabled}
                {...register('city')}
              />
            </div>
            <input
              placeholder="UF"
              disabled={isSubmitDisabled}
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
          <PaymentButton
            type="button"
            disabled={isSubmitDisabled}
            $payment={formPayment === 'Cartão de Crédito'}
            onClick={() => setSelectingPaymentMethod('Cartão de Crédito')}
          >
            <CreditCard color='#8047F8' size={16} />
            cartão de crédito
          </PaymentButton>
          <PaymentButton
            type="button"
            disabled={isSubmitDisabled}
            $payment={formPayment === 'Cartão de Débito'}
            onClick={() => setSelectingPaymentMethod('Cartão de Débito')}
          >
            <Bank color='#8047F8' size={16} />
            cartão de débito
          </PaymentButton>
          <PaymentButton
            type="button"
            disabled={isSubmitDisabled}
            $payment={formPayment === 'Dinheiro'}
            onClick={() => setSelectingPaymentMethod('Dinheiro')}
          >
            <Money color='#8047F8' size={16} />
            cartão de débito
          </PaymentButton>
        </FormPaymentGroup>
      </FormPaymentContiner>
    </FormContainer>
  );
}
