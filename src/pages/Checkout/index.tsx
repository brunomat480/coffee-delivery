import { useContext, useState } from 'react';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ButtonContainer,
  Cart,
  CartContainer,
  CheckoutContainer,
  FormGroup,
  PricesGroup
} from './styles';
import { FormProvider, useForm } from 'react-hook-form';
import { ProductContext } from '../../context/ProductsContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { ProductCard } from './components/ProductCard';
import { WarningNotifications } from '../../components/WarningNotifications';
import { PurchaseForm } from './components/ProductCard/PurchaseForm';
import { toast } from 'react-toastify';
import { Success } from './components/Success';

const sendPurchaseInformationFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  road: zod.string().min(1, 'Informe a rua'),
  number: zod.number().min(1, 'Informe o número da casa'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'informe sua cidade'),
  fu: zod.string().min(2, 'Informe seu estado'),
  formPayment: zod.string().optional()
});

export type SendPurchaseInformationFormData = zod.infer<typeof sendPurchaseInformationFormValidationSchema>

export function Checkout() {
  const {
    productCart,
    setControlProductCart,
  } = useContext(ProductContext);

  const [purchaseData, setPurchaseData] = useState<SendPurchaseInformationFormData | null>(null);
  const [formPayment, setFormPayment] = useState('');
  const [successfulPurchase, setSuccessfulPurchase] = useState(false);

  const totalItens = productCart.reduce((accumulator, product) => {
    return accumulator + product!.price * product!.quantity;
  }, 0);

  const methodsUseForm = useForm<SendPurchaseInformationFormData>({
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
  const { handleSubmit, reset } = methodsUseForm;

  function notify() {
    toast.warning('Selecione a forma de pagamento!', {
      position: 'top-right'
    });
  }

  function handleSendPurchaseInformation(data: SendPurchaseInformationFormData) {

    if (formPayment) {
      setPurchaseData({ ...data, formPayment: formPayment });
      setFormPayment('');
      setControlProductCart([]);
      reset();
      setSuccessfulPurchase(true);

      return;
    }
    notify();
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

    setControlProductCart(updateProductCart);
  }

  function handleRemoveQuantityProduct(id: number, quantity: number) {
    const transformedValue = quantity !== 1 ? quantity - 1 : 1;
    const updateProductCart = productCart.map((product) => product?.id === id ? { ...product, quantity: transformedValue } : product);

    setControlProductCart(updateProductCart);
  }

  const isSubmitDisabled = productCart.length === 0;

  return (
    <CheckoutContainer>
      {
        !successfulPurchase
          ? <FormGroup onSubmit={handleSubmit(handleSendPurchaseInformation)}>
            <FormProvider {...methodsUseForm}>
              <PurchaseForm
                isSubmitDisabled={isSubmitDisabled}
                setSelectingPaymentMethod={handleSelectingPaymentMethod}
                formPayment={formPayment}
              />
            </FormProvider>

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
          :
          <Success purchaseData={purchaseData} />
      }


      <WarningNotifications />
    </CheckoutContainer >
  );
}
