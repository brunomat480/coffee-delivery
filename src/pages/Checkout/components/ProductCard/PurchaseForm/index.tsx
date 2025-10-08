import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from '@phosphor-icons/react';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useTheme } from 'styled-components';
import {
  Form,
  FormContainer,
  FormPaymentContiner,
  FormPaymentGroup,
  InputGroup,
  PaymentButton
} from './styles';

interface FormProps {
  isSubmitDisabled: boolean;
  formPayment: string
  setSelectingPaymentMethod: (payment: string) => void
}

type Cep =
  | {
    localidade: string;
    logradouro: string;
    bairro: string;
    uf: string;
  }
  | {
    erro: 'true';
  };

export function PurchaseForm({ isSubmitDisabled, setSelectingPaymentMethod, formPayment }: FormProps) {
  const { colors } = useTheme();
  const { register, watch, setValue } = useFormContext();

  const cepWatch = watch('cep');

  useEffect(() => {
    async function fetchLocation() {
      const cepMask = cepWatch.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2');
      setValue('cep', cepMask);

      const cep = cepMask.replace(/\D/g, '');
      if (cep.length === 8) {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data: Cep = await response.json();

        if ('erro' in data) {
          toast.error('Cep não encontrado!', {
            position: 'bottom-right'
          });
          return;
        }

        setValue('city', data?.localidade);
        setValue('road', data?.logradouro);
        setValue('fu', data?.uf);
        setValue('neighborhood', data?.bairro);
      }
    }

    fetchLocation();
  }, [cepWatch]);

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
            minLength={9}
            maxLength={9}
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
