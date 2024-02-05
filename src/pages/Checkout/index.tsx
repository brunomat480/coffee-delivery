import { useContext, useState } from 'react';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from '@phosphor-icons/react';
import { ButtonContainer, Cart, CartContainer, CheckoutContainer, Form, FormContainer, FormGroup, FormPaymentContiner, FormPaymentGroup, InputGroup, PaymentButton, PricesGroup } from './styles';
import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';

import { ProductContext } from '../../context/ProductsContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { ProductCard } from './components/ProductCard';
import { toast } from 'react-toastify';
import { WarningNotifications } from '../../components/WarningNotifications';
import { formatCep } from '../../utils/formatCep';

const sendPurchaseInformationFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  road: zod.string().min(1, 'Informe a rua'),
  number: zod.number().min(1, 'Informe o número da casa'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'informe sua cidade'),
  fu: zod.string().min(2, 'Informe seu estado'),
});

type SendPurchaseInformationFormData = zod.infer<typeof sendPurchaseInformationFormValidationSchema>

export function Checkout() {
  const { colors } = useTheme();
  const { productCart, setControlProductCart, setUpdateProductCard } = useContext(ProductContext);

  const [formPayment, setFormPayment] = useState('');

  const totalItens = productCart.reduce((accumulator, product) => {
    return accumulator + product!.price * product!.quantity;
  }, 0);

  const { register, handleSubmit, watch } = useForm<SendPurchaseInformationFormData>({
    resolver: zodResolver(sendPurchaseInformationFormValidationSchema),
    defaultValues: {
      cep: '',
      city: '',
      complement: '',
      fu: '',
      neighborhood: '',
      number: undefined,
      road: '',
    }
  });

  function notify() {
    toast.warning('Preencha todas as infomações', {
      position: 'top-right'
    });
  }

  function handleSendPurchaseInformation(data: SendPurchaseInformationFormData) {

    if (data) {
      notify();
    }
  }

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

  const cep = watch('cep');
  const cepMask = formatCep(cep);


  const isSubmitDisabled = productCart.length === 0;

  return (
    <CheckoutContainer>
      <FormGroup onSubmit={handleSubmit(handleSendPurchaseInformation)}>
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
                value={cepMask}
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
                $payment={formPayment === 'cartão de crédito'}
                onClick={() => handleSelectingPaymentMethod('cartão de crédito')}
              >
                <CreditCard color='#8047F8' size={16} />
                cartão de crédito
              </PaymentButton>
              <PaymentButton
                type="button"
                disabled={isSubmitDisabled}
                $payment={formPayment === 'cartão de débito'}
                onClick={() => handleSelectingPaymentMethod('cartão de débito')}
              >
                <Bank color='#8047F8' size={16} />
                cartão de débito
              </PaymentButton>
              <PaymentButton
                type="button"
                disabled={isSubmitDisabled}
                $payment={formPayment === 'dinheiro'}
                onClick={() => handleSelectingPaymentMethod('dinheiro')}
              >
                <Money color='#8047F8' size={16} />
                cartão de débito
              </PaymentButton>
            </FormPaymentGroup>
          </FormPaymentContiner>
        </FormContainer>

        <CartContainer>
          <h2>Cafés selecionados</h2>

          <Cart>
            {productCart.map((product) => (
              <ProductCard
                key={product?.id}
                product={product}
                setAddQuantityProduct={handleAddQuantityProduct}
                setRemoveQuantityProduct={handleRemoveQuantityProduct}
                setRemoveProduct={handleRemoveProduct}
              />
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

            <ButtonContainer disabled={isSubmitDisabled} type="submit">
              confirmar pedido
            </ButtonContainer>
          </Cart>
        </CartContainer>
      </FormGroup>
      <WarningNotifications />
    </CheckoutContainer >
  );
}
